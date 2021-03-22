<template>
    <h1>Expenses for Vendors</h1>
    <h2 v-if="show">Vendor Id : {{id}}</h2>
    <Table v-if="show" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <Filter v-bind:msg="msg" v-bind:message="message" v-bind:route="route"/>
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
            id:Number,
            year:Number,
            show:false,
            route:'http://localhost:8080/expenseVendor'
        };
    },
    methods: {
        async getData(vID, year) {
            this.id=vID.slice(4);
            this.year=year;
            const response = await fetch(`https://fbc.exitest.com/vendor/${this.id}/earning/${this.year}`);
            if (response.ok) {
                const data = await response.json();
                this.data = Object.values(data);
                this.show=true;
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
    },
    async mounted() {
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
