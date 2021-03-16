<template>
  <div class="overhead">
    <h1>{{ msg }}</h1>
    <button @click="viewOverheads()">{{view}}</button><br>
    <button @click="addOverhead()">{{add}}</button><br>
    <button @click="expenseOverhead()">{{expense}}</button><br>
  </div>
  <table v-if="viewVariable" border="15">
    <tr>
      <th v-for="(item, index) of tableHeaders" v-bind:key="index">{{item}}</th>
    </tr>
    <tr v-for="(items, index) in data" :key="index">
        <td v-for=" (item, index) in items" :key="index">
          {{ item }}
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'Overhead',
  props: {
    msg: String
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
