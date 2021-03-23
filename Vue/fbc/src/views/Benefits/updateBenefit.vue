<template>
    <div class="updateBenefit">
        <div v-show="start">
            <label for="EmployeeID"></label>
            <input v-model="benefitID" placeholder="Enter the Benefit ID you want to update.." />
            <button @click="getBenefitId()">Go!</button>
            <br />
            <br />
            <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data" />
        </div>
        <div v-if="show">
            <h2>Update benefit details..</h2>
            <UpdateFacility v-bind:data="data" />
        </div>
    </div>
</template>

<script>
import Table from '@/components/Table';
import UpdateFacility from '../../components/updateFacility.vue';
export default {
    name: 'ViewBenefit',
    components: {
        Table,
        UpdateFacility,
    },
    data() {
        return {
            benefitID: '',
            data: [],
            tableHeaders: [],
            start: true,
            show: false,
            updateUrl: 'https://fbc.exitest.com/benefit/getData/id=',
            url: 'https://fbc.exitest.com/benefit',
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
        async getBenefitId() {
            if(this.benefitID === ''){
                window.alert('Please enter Benefit ID');
            } else {
                this.data = Object.values(await this.getData(this.updateUrl, this.benefitID))[0];
                if (this.data.length) {
                    this.tableHeaders = Object.keys(this.data[0]);
                } else {
                    this.tableHeaders = ['Data is not present!'];
                }
                this.show = true;
                this.start = false;
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
