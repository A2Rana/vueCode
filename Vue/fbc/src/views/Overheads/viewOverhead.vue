<template>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <h2 for="Overhead">{{ msg }}</h2>
    <input v-model="overheadName" :placeholder="message" /> <br />
    <input v-model="year" placeholder="Enter the year..." />
    <button @click="getFacility()">Go!!!</button>
</template>

<script>
import Table from '@/components/Table';

export default {
    name: 'ViewOverhead',
    components: {
        Table,
    },
    data() {
        return {
            data: [],
            tableHeaders: [],
            overheadName: '',
            year: '',
            msg: 'Filter expenses according to overhead:',
            message: 'Enter Overhead Name',
            url: 'https://fbc.exitest.com/overhead',
        };
    },
    methods: {
        async getData(url) {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },

        async getFacility() {
            console.log(this.overheadName, this.year);
            this.data = Object.values(await this.getData(`${this.url}/facility=${this.overheadName}/expense/${this.year}`));
            if (this.data.length) {
                this.tableHeaders = Object.keys(this.data[0]);
            } else {
                this.tableHeaders = ['Data is not present!'];
            }
        },
    },
    async mounted() {
        this.data = Object.values(await this.getData(this.url));
        if (this.data.length) {
            this.tableHeaders = Object.keys(this.data[0]);
        } else {
            this.tableHeaders = ['Data is not present!'];
        }
    },
};
</script>

<style scoped>
input {
    position: relative;
    text-transform: capitalize;
}

table {
    display: inline-block;
    width: 69%;
}
</style>
