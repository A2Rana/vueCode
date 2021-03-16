<template>
  <button @click="viewOverhead()">{{view}}</button><br><br>
  <button @click="addOverhead()">{{add}}</button><br><br>
  <button @click="updateOverhead()">{{update}}</button><br><br>
  <button @click="expenseforOverhead()">{{expense}}</button><br><br>
  <button @click="backToMain()">{{main}}</button>
</template>

<script>
export default {
  name: 'OverheadMethods',
  props:{
  },
  data() {
    return {
      view:'View Overhead',
      add:'Add Overhead',
      update:'Update Overhead',
      expense:'Overhead Expense',
      main:'Back to Main'
    };
  },
  methods:{
    viewOverhead : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showOverhead=false;
      this.$parent.$data.viewOverhead=true;
    },
    addOverhead : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showOverhead=false;
      this.$parent.$data.addOverhead=true;
    },
    updateOverhead : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showOverhead=false;
      this.$parent.$data.updateOverhead=true;
    },
    expenseforOverhead : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showOverhead=false;
      this.$parent.$data.expenseforOverhead=true;
    },
    backToMain : function(){
      this.$parent.$data.show=true;
      this.$parent.$data.showOverhead=false;
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
