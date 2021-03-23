<template>
    <div class="updateoverhead">
        <div v-show="start">
            <label for="EmployeeID"></label>
            <input v-model="overheadID" placeholder="Enter the Overhead ID you want to update.." />
            <button @click="getoverheadId()">Go!</button>
            <br />
            <br />
            <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data" />
        </div>
        <div v-if="show">
            <h2>Update overhead details..</h2>
            <UpdateFacility v-bind:data="data" />
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table';
import UpdateFacility from '../../components/updateFacility.vue';
export default {
    name: 'Viewoverhead',
    components: {
        Table,
        UpdateFacility,
    },
    data() {
        return {
            overheadID: '',
            data: [],
            tableHeaders: [],
            start: true,
            show: false,
            updateUrl: 'https://fbc.exitest.com/benefit/getData/id=',
            url: 'https://fbc.exitest.com/overhead',
        };
    },
    methods: {
        async getData(link = this.url, param = '') {
            const response = await fetch(link + param);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async getoverheadId() {
            if(this.overheadID === ''){
                window.alert('Please enter the Overhead ID');
            }
            else{
            this.data = Object.values(await this.getData(this.updateUrl, this.overheadID))[0];
            console.log('Heeee', this.data[0]);
            if (this.data.length) {
                this.tableHeaders = Object.keys(this.data[0]);
            } else {
                this.tableHeaders = ['Data is not present!'];
            }
            this.show = true;
            this.start = false;
            console.log(this.data);
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
