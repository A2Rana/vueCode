<template>
    <h1>Expenses for Employees</h1>
    <h2 v-if="show">Employee Id : {{id}}</h2>
    <Table v-if="show" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <Filter v-bind:msg="msg" v-bind:message="message" v-bind:route="route"/>
</template>

<script>
import Table from '@/components/Table';
import Filter from '@/components/Filter';

export default {
    name: 'Employee Expense Details',
    components: {
        Table,
        Filter,
    },
    data() {
        return {
            msg: 'Filter expenses by Employee',
            message: 'Enter Employee Id',
            data: [],
            tableHeaders: [],
            ctcdata: [],
            id:Number,
            show:false,
            route:'http://expensetracker.exitest.com/expenseEmployee'
        };
    },
    methods: {
        async getData(eID, year) {
            this.id=eID;
            const response = await fetch(`https://fbc.exitest.com/benefit/employee/${eID}/${year}/expense`);
            const ctcresponse = await fetch(`https://fbc.exitest.com/employee/compensation/year=${year}/id=${eID}`);
            if (response.ok) {
                const Data = await response.json();
                this.ctcdata = await ctcresponse.json();
                this.show=true;
                if (Data.length === 1 && Object.values(Data[0])[0] === null && this.ctcdata.length === 0) {
                    return [];
                }
                if (!Data.length && !this.ctcdata.length) {
                    return [];
                }
                Data.push({ Name: Object.keys(this.ctcdata[0])[0], ExpenseAmount: Object.values(this.ctcdata[0])[0] });
                return Data;
            }
            return console.log('HTTP-Error: ' + response.status);
        },
    },
    async mounted() {
        if (this.data.length) {
            this.tableHeaders = Object.keys(this.data[0]);
        } else {
            this.tableHeaders = [];
        }
    },
};
</script>

<style scoped>
table {
    display: inline-block;
}
</style>
