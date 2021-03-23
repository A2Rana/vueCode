<template>
    <Table v-if="show" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <input type="text" id="year" name="Year" required="" v-model="year" placeholder="Enter Year.." />
    <br />
    <input type="number" id="profit" v-model="per" placeholder="Profit Percentage...">
    <br />
    <br />
    <button @click="doCalculations()">GO!!</button>
</template>

<script>
import Table from '../../components/Table.vue';

export default {
    name: 'Calculate Expense',
    components: {
        Table,
    },
    data() {
        return {
            data: [],
            show: false,
            year:'',
            per:'',
            tableHeaders: [],
        };
    },
    methods: {
        async getData(year, per) {
            const response = await fetch(`https://fbc.exitest.com/employee/expenseDetails/year=${year}/profit=${per}`);
            if (response.ok) {
                const data = await response.json();
                return Object.values(data);
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async doCalculations() {
            this.data[0] = await this.getData(this.year, this.per);
            this.tableHeaders = ['Total Expense'];
            this.show = true;
        },
    },
};
</script>

<style scoped>
table {
    display: inline-block;
    width: 26%;
}
</style>
