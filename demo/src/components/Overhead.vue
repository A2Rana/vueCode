<template>
  <div class="overhead">
    <h1>{{ msg }}</h1>
    <button @click="viewOverheads()">{{view}}</button><br>
    <button @click="addOverhead()">{{add}}</button><br>
    <button @click="expenseOverhead()">{{expense}}</button><br>
  </div>
  <Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
</template>

<script>
import Table from './Table.vue';
export default {
  name: 'Overhead',
  props: {
    msg: String
  },
  components: {
    Table
  },
  data(){
    return {
      view: 'View Overhead',
      add: 'Add Overhead',
      expense: 'Expenses due to Overhead',
      tableHeaders: [],
      data: [],
      viewVariable: false
    }
  },
  methods:{
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/overhead' + param);
      if (response.ok) {
          let data = await response.json();
          if (!data.length) {
              return ('Data is not present!');
          }
          return data;
      } else {
          return console.log('HTTP-Error: ' + response.status);
      }
    },
    async viewOverheads() {
      this.viewVariable = !this.viewVariable;
    }
  },
  mounted: async function() {
    this.data = Object.values(await this.getData());
    this.tableHeaders = Object.keys(this.data[0]);
  }
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
