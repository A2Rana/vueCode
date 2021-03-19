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
import Table from '@/components/Table.vue';
export default {
    name: 'Calculate Expense',
    components: {
        Table,
    },
    data() {
        return {
            tableHeaders: [],
            data: [],
            show:false
        };
    },
    methods: {
        async getData(url) {
            const response = await fetch(url);
            if (response.ok) {
                console.log('ok');
                const data = await response.json();
                console.log(data, 'returning');
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async doCalculations() {
            const year = document.querySelector('#year').value;
            const per = document.querySelector('#profit').value;
            console.log(year, per);
            const url = `https://fbc.exitest.com/employee/expenseDetails/year=${year}/profit=${per}`;
            console.log(this.data, url, 'going to fetch');
            this.data = Object.values(await this.getData(url));
            this.tableHeaders = ['Total Expense'];
            this.show=true;
        },
    }
};
</script>
