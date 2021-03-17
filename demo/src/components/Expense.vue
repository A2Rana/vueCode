<template>
<h1>{{msg}}</h1>
<button @click="viewExpense()">{{view}}</button><br><br>
<button @click="calculateExpenses()">{{calculateExpense}}</button><br><br>
<Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
</template>

<script>
import Table from './Table.vue';
export default {
  name: 'Expense',
  props: {
    msg: String
  },
  components: {
    Table
  },
  data() {
    return {
      view: 'View Expenses',
      calculateExpense: 'Calculate Expense',
      viewVariable: false,
    };
  },
  methods: {
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/totalExpense' + param);
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
    async viewExpense() {
      this.viewVariable = !this.viewVariable;
    }
  },
  mounted: async function() {
    this.data = Object.values(await this.getData());
    this.tableHeaders = Object.keys(this.data[0]);
  }
};
</script>
