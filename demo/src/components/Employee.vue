<template>
  <div class="vendor">
    <h1>{{ msg }}</h1>
    <button @click="viewEmployees()">{{view}}</button><br>
    <button @click="addEmployee()">{{add}}</button><br>
    <button @click="updateEmployee()">{{update}}</button><br>
    <button @click="expenseEmployee()">{{expenseEmployee}}</button><br>
  </div>
  <Form v-if="addVariable"></Form>
  <UpdateForm v-if="updateVariable"></UpdateForm>
  <Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
</template>

<script>
import Form from './addForm.vue';
import Table from './Table.vue';
import UpdateForm from './Update.vue';
export default {
  name: 'Employee',
  components: {
    Form,
    UpdateForm,
    Table
  },
  props: {
    msg: String
  },
  data(){
    return {
      view: 'View Employee',
      add: 'Add Employee',
      update: 'Update Employee',
      expenseEmployee: 'Expenses for Employee',
      tableHeaders: [],
      data: [],
      viewVariable: false,
      addVariable: false,
      updateVariable: false,
    }
  },
  methods:{
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/employee' + param);
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
    async viewEmployees() {
      this.viewVariable = !this.viewVariable;
    },
  addEmployee() {
    this.addVariable = !this.addVariable;
  },
  updateEmployee() {
    this.updateVariable = !this.updateVariable;
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
