<template>
    <div v-if="show">
        <h1>{{ msg }}</h1>
        <button @click="viewExpense()">{{ view }}</button><br /><br />
        <button @click="calculateExpenses()">{{ calculateExpense }}</button><br /><br />
        <button @click="backToMain()">{{ main }}</button>
    </div>
    <button v-if="showChild && !show" @click="backToExpenses()">{{ back }}</button><br />
    <Table v-if="viewVariable || calculateVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <div v-if="viewVariable">
        <select @change="changeYear($event)">
            <option value="" selected disabled>Select the year</option>
            <option v-for="Year in yearArray" :value="Year" :key="Year">{{ Year }}</option>
        </select>
    </div>

    <div v-if="calculateVariable">
        <input type="text" id="year" name="Year" required="" placeholder="Enter Year.." />
        <br />
        <input type="text" id="profit" name="per" required="" placeholder="Profit Percentange.." />
        <br />
        <br />
        <button @click="doCalculations()">GO!!</button>
    </div>
</template>

<script>
import Table from './Table.vue';
export default {
    name: 'Expense',
    props: {
        msg: String,
    },
    components: {
        Table,
    },
    data() {
        return {
            view: 'View Expenses',
            calculateExpense: 'Calculate Expense',
            viewVariable: false,
            main: 'Back to Main',
            selectedYear: null,
            data: [],
            yearArray: [],
            calculateVariable: false,
            url: 'https://fbc.exitest.com/totalExpense',
            show: true,
            back: 'Back to Expenses',
            showChild: false,
        };
    },
    methods: {
        async getData(url) {
            console.log(url, 'heyaaaa');
            const response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async viewExpense() {
            this.data = Object.values(await this.getData(this.url));
            this.tableHeaders = Object.keys(this.data[0]);
            this.data.forEach((item) => this.yearArray.push(item.Year));
            this.viewVariable = true;
            this.showChild = true;
            this.show = false;
        },
        async changeYear(event) {
            console.log(event.target.options[event.target.options.selectedIndex].value);
            this.selectedYear = event.target.options[event.target.options.selectedIndex].value;
            this.data = Object.values(await this.getData(this.url + '/' + this.selectedYear));
        },
        calculateExpenses() {
            this.calculateVariable = !this.calculateVariable;
        },
        async doCalculations() {
            this.calculateVariable = true;
            const year = document.querySelector('#year').value;
            const per = document.querySelector('#profit').value;
            console.log(year, per);
            const url = `https://fbc.exitest.com/employee/expenseDetails/year=${year}/profit=${per}`;
            console.log(this.data, url);
            // these lines are giving serious error!

            // this.data = Object.values(await this.getData(url));
            // this.tableHeaders = Object.keys(this.data[0]);
            // console.log(this.data);
        },
        backToMain() {
            this.$parent.$data.show = true;
            this.show = false;
        },
        backToExpenses() {
            this.show = true;
            this.caclulateVariable = false;
            this.viewVariable = false;
        },
    },
};
</script>
