<template>
  <div class="vendor">
    <h1>{{ msg }}</h1>
    <button @click="viewVendors()">{{view}}</button><br>
    <button @click="addVendor()">{{add}}</button><br>
    <button @click="updateVendor()">{{update}}</button><br>
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
  name: 'Vendor',
  props: {
    msg: String
  },
  components: {
    Table,
    Form,
    UpdateForm
  },
  data(){
    return {
      view: 'View Vendor',
      add: 'Add Vendor',
      update: 'Update Vendor',
      tableHeaders: [],
      data: [],
      viewVariable: false,
      addVariable: false,
      updateVariable: false
    }
  },
  methods:{
    async getData(param = '') {
      const response = await fetch('https://fbc.exitest.com/vendor' + param);
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
    viewVendors() {
      this.viewVariable = !this.viewVariable;
    },
    addVendor() {
      this.addVariable = !this.addVariable;
    },
    updateVendor() {
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
