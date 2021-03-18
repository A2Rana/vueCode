<template>
    <div v-if="show" class="vendor">
        <h1>{{ msg }}</h1>
        <button @click="viewBenefits()">{{ view }}</button><br />
        <button @click="addBenefit()">{{ add }}</button><br />
        <button @click="expenseBenefit()">{{ expense }}</button><br />
        <button @click="backToMain()">{{ main }}</button><br />
    </div>
    <button v-if="showChild && !show" @click="backToBenefits()">{{ back }}</button><br />
    <Table v-if="viewVariable || expenseVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <div v-if="addVariable">
        <form method="POST" action="https://fbc.exitest.com/vendor/addFacility">
            <input type="text" id="fname" name="FacilityName" required="" placeholder="Facility Name.." />
            <br />
            <input type="text" id="lname" name="FacilityDescription" required="" placeholder="Facility Description.." />
            <br />
            <label>Facility Type: </label>
            <select name="FacilityType" required="">
                <option value="B">Benefit</option>
                <option value="O">Overhead</option>
            </select>
            <br />
            <label>Do you want to add vendor for this Facility?</label>
            <select name="Choice" required="">
                <option value="YES">Yes</option>
                <option value="NO">No</option>
            </select>
            <br />
            <br />
            <input type="submit" value="GO!" />
        </form>
    </div>
    <Filter v-if="expenseVariable" v-bind:msg="msgg" />
</template>

<script>
import Table from './Table.vue';
import Filter from './Filter.vue';
export default {
    name: 'Benefit',
    props: {
        msg: String,
    },
    components: {
        Table,
        Filter,
    },
    data() {
        return {
            view: 'View Benefit',
            add: 'Add Benefit',
            expense: 'Expenses due to Benefits',
            main: 'Back to Main',
            tableHeaders: [],
            data: [],
            viewVariable: false,
            addVariable: false,
            expenseVariable: false,
            msgg: 'Filter Benefit Expenses according to the year!',
            show: true,
            back: 'Back to Benefits',
            showChild: false,
        };
    },
    methods: {
        async getData(param = '') {
            const response = await fetch('https://fbc.exitest.com/benefit' + param);
            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        viewBenefits() {
            this.viewVariable = true;
            this.show = false;
            this.showChild = true;
        },
        addBenefit() {
            this.addVariable = true;
            this.show = false;
            this.showChild = true;
        },
        expenseBenefit() {
            this.expenseVariable = true;
            this.show = false;
            this.showChild = true;
        },
        backToMain() {
            this.$parent.$data.show = true;
            this.showChild = false;
            this.show = false;
        },
        backToBenefits() {
            this.show = true;
            this.addVariable = false;
            this.expenseVariable = false;
            this.viewVariable = false;
        },
    },
    async mounted() {
        this.data = Object.values(await this.getData());
        this.tableHeaders = Object.keys(this.data[0]);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
