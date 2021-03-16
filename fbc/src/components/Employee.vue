<template>
  <button @click="viewEmployee()">{{view}}</button><br><br>
  <button @click="addEmployee()">{{add}}</button><br><br>
  <button @click="updateEmployee()">{{update}}</button><br><br>
  <button @click="expenseforEmployee()">{{expense}}</button><br><br>
  <button @click="backToMain()">{{main}}</button>
</template>

<script>
export default {
    name: 'EmployeeMethods',
    props:{
    },
    data() {
        return {
            view:'View Employee',
            add:'Add Employee',
            update:'Update Employee',
            expense:'Employee Expense',
            main:'Back to Main'
        };
    },
    methods:{
        viewEmployee : function(){
            this.$parent.$data.show=false;
            this.$parent.$data.showEmployee=false;
            this.$parent.$data.viewEmployee=true;
        },
        addEmployee : function(){
            this.$parent.$data.show=false;
            this.$parent.$data.showEmployee=false;
            this.$parent.$data.addEmployee=true;
        },
        updateEmployee : function(){
            this.$parent.$data.show=false;
            this.$parent.$data.showEmployee=false;
            this.$parent.$data.updateEmployee=true;
        },
        expenseforEmployee : function(){
            this.$parent.$data.show=false;
            this.$parent.$data.showEmployee=false;
            this.$parent.$data.expenseforEmployee=true;
        },
        backToMain : function(){
        this.$parent.$data.show=true;
        this.$parent.$data.showEmployee=false;
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
    width: 170px;
    height: 30px;
}
button:hover {
    background: #8bc34a;
    color: #ffffff;
}

</style>
