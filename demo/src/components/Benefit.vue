<template>
<div class="vendor">
  <h1>{{ msg }}</h1>
  <button @click="viewBenefits()">{{view}}</button><br>
  <button @click="addBenefit()">{{add}}</button><br>
  <button @click="expenseBenefit()">{{expense}}</button><br>
</div>
<Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>

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
</template>

<script>
import Table from './Table.vue';
export default {
  name: 'Benefit',
  props: {
    msg: String
  },
  components: {
    Table
  },
  data() {
    return {
      view: 'View Benefit',
      add: 'Add Benefit',
      expense: 'Expenses due to Benefits',
      tableHeaders: [],
      data: [],
      viewVariable: false
    }
  },
  methods: {
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/benefit' + param);
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
    async viewBenefits() {
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
