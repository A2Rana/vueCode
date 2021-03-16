<template>
  <button @click="backToBenefit()">{{backBenefit}}</button>
</template>

<script>
  export default {
    name: 'ExpenseBenefit',
    props:{
      },
    data() {
      return {
        backBenefit:'Back to Benefit'
      };
    },
    methods:{
      backToBenefit: function(){
        this.$parent.$data.showBenefit=true;
        this.$parent.$data.expenseforBenefit=false;
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
    width: 165px;
    height: 30px;
  }
  button:hover {
    background: #8bc34a;
    color: #ffffff;
  }
</style>
