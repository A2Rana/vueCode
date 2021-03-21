<template>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <select @change="changeYear($event)">
        <option value="" selected disabled>Select the year</option>
        <option v-for="Year in yearArray" :value="Year" :key="Year">{{ Year }}</option>
    </select>
</template>

<script>
import Table from '@/components/Table.vue';
export default {
    name: 'View Expense',
    components: {
        Table,
    },
    data() {
        return {
            data: [],
            tableHeaders: [],
            yearArray: [],
            selectedYear: null,
        };
    },
    methods: {
        async getData(param = '') {
            const response = await fetch('https://fbc.exitest.com/totalExpense' + param);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async changeYear(event) {
            this.selectedYear = event.target.options[event.target.options.selectedIndex].value;
            this.data = Object.values(await this.getData('/' + this.selectedYear));
        },
    },
    async mounted() {
        this.data = Object.values(await this.getData());
        this.tableHeaders = Object.keys(this.data[0]);
        this.data.forEach(item => this.yearArray.push(item.Year));
    },
};
</script>

<style scoped>
    table{
        display:inline-block;
        width: 86%;
    }
</style>
