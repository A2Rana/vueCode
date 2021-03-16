<template>
  <button @click="viewExpense()">{{view}}</button><br><br>
  <button @click="calculateExpenses()">{{calculateExpense}}</button><br><br>
  <button @click="backToMain()">{{main}}</button>
</template>

<script>
export default {
  name: 'ExpenseMethods',
  props:{
  },
  data() {
    return {
      view:'View Expense',
      calculateExpense:'Calculate Expense',
      main:'Back to Main'
    };
  },
  methods:{
    viewExpense : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showExpense=false;
      this.$parent.$data.viewExpense=true;
    },
    calculateExpenses : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showExpense=false;
      this.$parent.$data.calculateExpense=true;
    },
    backToMain : function(){
      this.$parent.$data.show=true;
      this.$parent.$data.showExpense=false;
    }
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
    width: 200px;
    height: 30px;
}
button:hover {
    background: #8bc34a;
    color: #ffffff;
}

</style>
