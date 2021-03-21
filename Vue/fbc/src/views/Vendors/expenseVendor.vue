<template>
    <h1>Expenses for Vendors</h1>
    <h2>Vendor Id : {{id}}</h2>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <Filter v-bind:msg="msg" v-bind:message="message" />
</template>

<script>
import Table from '@/components/Table';
import Filter from '@/components/Filter';

export default {
    name: 'Vendor Expense Details',
    components: {
        Table,
        Filter,
    },
    data() {
        return {
            msg: 'Filter expenses by Vendor',
            message:'Enter Vendor Id',
            data: [],
            tableHeaders: [],
            ctcdata: [],
            id:Number
        };
    },
    methods: {
        async getData(vID, year = 2021) {
            this.id=vID;
            const response = await fetch(`https://fbc.exitest.com/benefit/employee/${vID}/expense`);
            const ctcresponse = await fetch(`https://fbc.exitest.com/employee/compensation/year=${year}/id=${vID}`);
            if (response.ok) {
                const Data = await response.json();
                this.ctcdata = await ctcresponse.json();
                if (Data.length === 1 && Object.values(Data[0])[0] === null && this.ctcdata.length === 0) {
                    return ['Data is not present'];
                }
                if (!Data.length && !this.ctcdata.length) {
                    return ['Data is not present!'];
                }
                Data.push({ Name: Object.keys(this.ctcdata[0])[0], ExpenseAmount: Object.values(this.ctcdata[0])[0] });
                return Data;
            }
            return console.log('HTTP-Error: ' + response.status);
        },
    },
    async mounted() {
        this.data = Object.values(await this.getData(3));
        if (this.data.length) {
            this.tableHeaders = Object.keys(this.data[0]);
        } else {
            this.tableHeaders = ['Data is not present!'];
        }
    },
};
</script>

<style scoped>
    table{
        display: inline-block;
    }
</style>
