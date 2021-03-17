<template>
  <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table><br><br>
  <button @click="backToExpense()">{{backExpense}}</button>
</template>

<script>
  import Table from '../Table';

  export default {
    name: 'ViewExpense',
    props:{
      },
    components:{
      Table
    },
    data() {
      return {
        backExpense:'Back to Expense',
        data:[],
        tableHeaders:[]
      };
    },
    methods:{
      async getData(param = '') {
        const response = await fetch('https://fbc.exitest.com/totalExpense' + param);
        if (response.ok) {
            const data = await response.json();
            if (!data.length) {
                return ('Data is not present!');
            }
            return data;
        } else {
            return console.log('HTTP-Error: ' + response.status);
        }
      },
      backToExpense: function(){
        this.$parent.$data.showExpense=true;
        this.$parent.$data.viewExpense=false;
      }
    },
    mounted: async function() {
        this.data = Object.values(await this.getData());
        this.tableHeaders = Object.keys(this.data[0]);
    }
  };
</script>

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
  button {
    display: inline-block;
    padding: 12px 12px 30px 12px;
    background: rgb(220, 220, 220);
    font-weight: bold;
    color: rgb(120, 120, 120);
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    transition: ease 0.3s;
    font-size: medium;
    width: 165px;
    height: 30px;
  }
  button:hover {
    background: #8bc34a;
    color: #ffffff;
  }
</style>
