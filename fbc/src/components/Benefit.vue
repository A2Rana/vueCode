<template>
  <button @click="viewBenefit()">{{view}}</button><br><br>
  <button @click="addBenefit()">{{add}}</button><br><br>
  <button @click="updateBenefit()">{{update}}</button><br><br>
  <button @click="expenseforBenefit()">{{expense}}</button><br><br>
  <button @click="backToMain()">{{main}}</button>
</template>

<script>
export default {
  name: 'BenefitMethods',
  props:{
  },
  data() {
    return {
      view:'View Benefit',
      add:'Add Benefit',
      update:'Update Benefit',
      expense:'Benefit Expense',
      main:'Back to Main'
    };
  },
  methods:{
    viewBenefit : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showBenefit=false;
      this.$parent.$data.viewBenefit=true;
    },
    addBenefit : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showBenefit=false;
      this.$parent.$data.addBenefit=true;
    },
    updateBenefit : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showBenefit=false;
      this.$parent.$data.updateBenefit=true;
    },
    expenseforBenefit : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showBenefit=false;
      this.$parent.$data.expenseforBenefit=true;
    },
    backToMain : function(){
      this.$parent.$data.show=true;
      this.$parent.$data.showBenefit=false;
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
