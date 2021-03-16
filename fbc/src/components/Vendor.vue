<template>
  <button @click="viewVendor()">{{view}}</button><br><br>
  <button @click="addVendor()">{{add}}</button><br><br>
  <button @click="updateVendor()">{{update}}</button><br><br>
  <button @click="backToMain()">{{main}}</button>
</template>

<script>
export default {
  name: 'VendorMethods',
  props:{
  },
  data() {
    return {
      view:'View Vendor',
      add:'Add Vendor',
      update:'Update Vendor',
      main:'Back to Main'
    };
  },
  methods:{
    viewVendor : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showVendor=false;
      this.$parent.$data.viewVendor=true;
    },
    addVendor : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showVendor=false;
      this.$parent.$data.addVendor=true;
    },
    updateVendor : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showVendor=false;
      this.$parent.$data.updateVendor=true;
    },
    expenseforVendor : function(){
      this.$parent.$data.show=false;
      this.$parent.$data.showVendor=false;
      this.$parent.$data.expenseforVendor=true;
    },
    backToMain : function(){
      this.$parent.$data.show=true;
      this.$parent.$data.showVendor=false;
    }
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
    width: 160px;
    height: 30px;
}
button:hover {
    background: #8bc34a;
    color: #ffffff;
}

</style>
