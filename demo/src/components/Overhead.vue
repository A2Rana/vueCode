<template>
<div class="overhead">
  <h1>{{ msg }}</h1>
  <button @click="viewOverheads()">{{view}}</button><br>
  <button @click="addOverhead()">{{add}}</button><br>
  <button @click="expenseOverhead()">{{expense}}</button><br>
  <button @click="backToMain()">{{main}}</button><br>
</div>
<Table v-if="viewVariable || expenseVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
<div v-if="addVariable">
  <form method="POST" action="https://fbc.exitest.com/vendor/addFacility">
    <input type="text" id="fname" name="FacilityName" required="" placeholder="Facility Name..">
    <br>
    <input type="text" id="lname" name="FacilityDescription" required="" placeholder="Facility Description..">
    <br>
    <label>Facility Type: </label>
    <select name="FacilityType" required="">
      <option value="B">Benefit</option>
      <option value="O">Overhead</option>
    </select>
    <br>
    <label>Do you want to add vendor for this Facility?</label>
    <select name="Choice" required="">
      <option value="YES">Yes</option>
      <option value="NO">No</option>
    </select>
    <br>
    <br>
    <input type="submit" value="GO!">
  </form>
</div>
<Filter v-if="expenseVariable" v-bind:msg="msgg" />
</template>

<script>
import Table from './Table.vue';
import Filter from './Filter.vue';
export default {
  name: 'Overhead',
  props: {
    msg: String
  },
  components: {
    Table,
    Filter
  },
  data() {
    return {
      view: 'View Overhead',
      add: 'Add Overhead',
      expense: 'Expenses due to Overhead',
      main: 'Back to Main',
      tableHeaders: [],
      data: [],
      viewVariable: false,
      addVariable: false,
      expenseVariable: false,
      msgg: 'Filter Overhead Expenses according to the year!',
    }
  },
  methods: {
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/overhead' + param);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        return console.log('HTTP-Error: ' + response.status);
      }
    },
    viewOverheads() {
      this.viewVariable = !this.viewVariable;
    },
    addOverhead() {
      this.addVariable = !this.addVariable;
    },
    expenseOverhead() {
      this.expenseVariable = !this.expenseVariable;
    },
    backToMain: function() {
      this.$parent.$data.show = true;
      this.$parent.$data.viewOverhead = false;
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
