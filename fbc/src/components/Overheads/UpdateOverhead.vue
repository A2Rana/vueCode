<template>
  <button @click="backToOverhead()">{{backOverhead}}</button>
</template>

<script>
  export default {
    name: 'UpdateOverhead',
    props:{
      },
    data() {
      return {
        backOverhead:'Back to Overhead'
      };
    },
    methods:{
      backToOverhead: function(){
        this.$parent.$data.showOverhead=true;
        this.$parent.$data.updateOverhead=false;
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
