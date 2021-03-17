<template>
<div class="vendor">
  <h1>{{ msg }}</h1>
  <button @click="viewEmployees()">{{view}}</button><br>
  <button @click="addEmployee()">{{add}}</button><br>
  <button @click="updateEmployee()">{{update}}</button><br>
  <button @click="expenseEmployee()">{{expenseEmployee}}</button><br>
  <button @click="backToMain()">{{main}}</button>
</div>
<Form v-if="addVariable"></Form>
<UpdateForm v-if="updateVariable"></UpdateForm>
<Table v-if="viewVariable" v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
<Filter v-if="viewVariable" v-bind:msg="msgg" v-bind:placehold="placehold" />
</template>

<script>
import Form from './addForm.vue';
import Table from './Table.vue';
import Filter from './Filter.vue';
import UpdateForm from './Update.vue';
export default {
  name: 'Employee',
  components: {
    Form,
    UpdateForm,
    Table,
    Filter
  },
  props: {
    msg: String
  },
  data() {
    return {
      view: 'View Employee',
      add: 'Add Employee',
      update: 'Update Employee',
      expenseEmployee: 'Expenses for Employee',
      main: 'Back to Main',
      tableHeaders: [],
      data: [],
      viewVariable: false,
      addVariable: false,
      updateVariable: false,
      placehold: 'Employee ID',
      msgg: 'Filter By EmployeeID',
    }
  },
  methods: {
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/employee' + param);
      if (response.ok) {
        let data = await response.json();
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
    },
    backToMain: function() {
      this.$parent.$data.show = true;
      this.$parent.$data.viewEmployee = false;
    }
  },
  mounted: async function() {
    this.data = Object.values(await this.getData());
    if (this.data.length)
      this.tableHeaders = Object.keys(this.data[0]);
    else
      this.tableHeaders = ['Data is not present!'];
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
