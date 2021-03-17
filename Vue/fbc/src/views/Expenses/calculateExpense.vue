<template>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <div>
    <input type="text" id="year" name="Year" required="" placeholder="Enter Year..">
    <br>
    <input type="text" id="profit" name="per" required="" placeholder="Profit Percentange..">
    <br>
    <br>
    <button @click="doCalculations()"> GO!! </button>
    </div>
</template>

<script>
import Table from '@/components/Table.vue';
export default {
  name: 'Calculate Expense',
  components: {
    Table
  },
  data() {
    return {
      selectedYear: null,
      data: [],
      yearArray: [],
      calculateVariable: false,
      url: 'https://fbc.exitest.com/totalExpense'
    };
  },
  methods: {
    async getData(url) {
      console.log(url, 'heyaaaa');
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return console.log('HTTP-Error: ' + response.status);
      }
    },
    async viewExpense() {
      this.data = Object.values(await this.getData(this.url));
      this.tableHeaders = Object.keys(this.data[0]);
      this.data.forEach(item => this.yearArray.push(item.Year));
      this.viewVariable = !this.viewVariable;
    },
    calculateExpenses() {
      this.calculateVariable = !this.calculateVariable;
    },
    async doCalculations() {
      this.calculateVariable = true;
      const year = document.querySelector('#year').value;
      const per = document.querySelector('#profit').value;
      console.log(year, per);
      const url = `https://fbc.exitest.com/employee/expenseDetails/year=${year}/profit=${per}`;
      console.log(this.data, url);
    }
  }
};
</script>
