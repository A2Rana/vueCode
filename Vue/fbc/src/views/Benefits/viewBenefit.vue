<template>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
</template>

<script>
import Table from '@/components/Table';

export default {
    name:'ViewBenefit',
    components:{
        Table
    },
    data(){
        return{
            data:[],
            tableHeaders:[]
        };
    },
    methods:{
        async getData(param = '') {
            const response = await fetch('https://fbc.exitest.com/benefit' + param);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        }
    },
    mounted: async function() {
    this.data = Object.values(await this.getData());
    if (this.data.length){
        this.tableHeaders = Object.keys(this.data[0]);
    }
    else{
        this.tableHeaders = ['Data is not present!'];
    }
  }
};
</script>

<style scoped>
    table{
        display: inline-block;
    }
</style>
