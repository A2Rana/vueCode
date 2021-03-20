<template>
    <Table v-if="show" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <input type="text" id="year" name="Year" required="" placeholder="Enter Year.." />
    <br />
    <input type="text" id="profit" name="per" required="" placeholder="Profit Percentange.." />
    <br />
    <br />
    <button @click="doCalculations()">GO!!</button>
</template>

<script>
    import Table from '../../components/Table.vue';

export default {
    name: 'Calculate Expense',
    components:{
        Table
    },
    data() {
        return {
            data: [],
            show:false,
            tableHeaders:[]
        };
    },
    methods: {
        async getData(year,per) {
            const response = await fetch(`https://fbc.exitest.com/employee/expenseDetails/year=${year}/profit=${per}`);
            if (response.ok) {
                const data = await response.json();
                return Object.values(data);
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async doCalculations() {
            const year = parseInt(document.getElementById('year').value,10);
            const per = parseInt(document.getElementById('profit').value,10);
            this.data[0] = await this.getData(year,per);
            this.tableHeaders = ['Total Expense'];
            this.show = true;
        },
    },
};
</script>

<style scoped>
    table{
        display:inline-block;
    }
</style>

