<template>
    <!-- <HelloWorld msg="Hello World Component"/> -->
    <Login v-if="onlyLogin"/>
    <div v-else>
      <app-header msg="Financial Bowling Chart"> </app-header>
      <Employee msg="Employee Component" />
      <Vendor msg="Vendor Component" />
      <Benefit msg="Benefit Component" />
      <Overhead msg="Overhead Component" />
      <Expense msg="Expense Component" />
      <app-footer msg="Copyright 2021 EX2India!" />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Header from './components/Header.vue';
import Employee from './components/Employee.vue';
import Vendor from './components/Vendor.vue';
import Benefit from './components/Benefit.vue';
import Overhead from './components/Overhead.vue';
import Expense from './components/Expense.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    data() {
      return {
        onlyLogin: true
      }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        Vendor,
        Employee,
        Benefit,
        Overhead,
        Login,
        Expense
    },
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
