<template>
    <div v-if="show">
        <h1>{{ msg }}</h1>
        <button @click="viewVendors()">{{ view }}</button><br />
        <button @click="addVendor()">{{ add }}</button><br />
        <button @click="updateVendor()">{{ update }}</button><br />
        <button @click="backToMain()">{{ main }}</button>
    </div>
    <button v-if="showChild && !show" @click="backToVendors()">{{ back }}</button><br />
    <Form v-if="addVariable"></Form>
    <UpdateForm v-if="updateVariable"></UpdateForm>
    <Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <Filter v-if="viewVariable" v-bind:msg="msgg" v-bind:placehold="placehold" />
</template>

<script>
import Form from './addForm.vue';
import Table from './Table.vue';
import Filter from './Filter.vue';
import UpdateForm from './Update.vue';
export default {
    name: 'Vendor',
    props: {
        msg: String,
    },
    components: {
        Table,
        Form,
        UpdateForm,
        Filter,
    },
    data() {
        return {
            view: 'View Vendor',
            add: 'Add Vendor',
            update: 'Update Vendor',
            main: 'Back to Main',
            tableHeaders: [],
            data: [],
            viewVariable: false,
            addVariable: false,
            updateVariable: false,
            msgg: 'Filter By VendorID',
            placehold: '',
            show: true,
            back: 'Back to Vendors',
            showChild: false,
        };
    },
    methods: {
        async getData(param = '') {
            const response = await fetch('https://fbc.exitest.com/vendor' + param);
            if (response.ok) {
                let data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        viewVendors() {
            this.viewVariable = true;
            this.show = false;
            this.showChild = true;
        },
        addVendor() {
            this.addVariable = true;
            this.show = false;
            this.showChild = true;
        },
        updateVendor() {
            this.updateVariable = true;
            this.show = false;
            this.showChild = true;
        },
        backToMain() {
            this.$parent.$data.show = true;
            this.show = false;
        },
        backToVendors() {
            this.show = true;
            this.addVariable = false;
            this.updateVariable = false;
            this.viewVariable = false;
        },
    },
    async mounted() {
        this.data = Object.values(await this.getData());
        if (this.data.length) this.tableHeaders = Object.keys(this.data[0]);
        else this.tableHeaders = ['Data is not present!'];
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
