<template>
    <Login v-if="onlyLogin" />
    <div v-else>
        <Main v-if="show" msg="Welcome to Financial Bowling Chart" />
        <Employee v-if="viewEmployee" msg="Employee Component" />
        <Vendor v-if="viewVendor" msg="Vendor Component" />
        <Benefit v-if="viewBenefit" msg="Benefit Component" />
        <Overhead v-if="viewOverhead" msg="Overhead Component" />
        <Expense v-if="viewExpense" msg="Expense Component" />
    </div>
</template>

<script>
import Main from './components/Main.vue';
import Login from './components/Login.vue';
import Employee from './components/Employee.vue';
import Vendor from './components/Vendor.vue';
import Benefit from './components/Benefit.vue';
import Overhead from './components/Overhead.vue';
import Expense from './components/Expense.vue';

export default {
    name: 'App',
    data() {
        return {
            show: false,
            onlyLogin: true,
            viewEmployee: false,
            viewVendor: false,
            viewBenefit: false,
            viewOverhead: false,
            viewExpense: false,
            showEmployee: false,
            showVendor: false,
            showBenefit: false,
            showOverhead: false,
            showExpense: false,
        };
    },
    components: {
        Vendor,
        Employee,
        Benefit,
        Overhead,
        Login,
        Expense,
        Main,
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
