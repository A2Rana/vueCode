<template>
    <h2 v-if="show"> Estimated Expense for {{year}} at profit percentange {{per}}%: {{data[0]}}</h2>
    <input type="text" id="year" name="Year" required="" placeholder="Enter Year.." />
    <br />
    <input type="text" id="profit" name="per" required="" placeholder="Profit Percentange.." />
    <br />
    <br />
    <button @click="doCalculations()">GO!!</button>
</template>

<script>

export default {
    name: 'Calculate Expense',
    data() {
        return {
            data: [],
            year :2020,
            per:5,
            show:false
        };
    },
    methods: {
        async getData(year,per) {
            if(year){
                this.year = year;
                this.per = per;
            }
            const response = await fetch(`https://fbc.exitest.com/employee/expenseDetails/year=${this.year}/profit=${this.per}`);
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
            this.data = await this.getData(year,per);
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

