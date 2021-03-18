<template>
    <app-header msg="Welcome to Financial Bowling Chart"></app-header>
    <button @click="showEmployeeMethods()">Employees</button><br /><br />
    <button @click="showVendorMethods()">Vendors</button><br /><br />
    <button @click="showBenefitsMethods()">Benefits</button><br /><br />
    <button @click="showOverheadsMethods()">Overheads</button><br /><br />
    <button @click="showExpenseMethods()">Expenses</button><br /><br />
    <app-footer msg="Copyright EX2India 2021!"></app-footer>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
    name: 'Main',
    components: {
        'app-header': Header,
        'app-footer': Footer,
    },
    methods: {
        showEmployeeMethods() {
            this.$parent.$data.show = false;
            this.$parent.$data.viewEmployee = true;
        },
        showVendorMethods() {
            this.$parent.$data.show = false;
            this.$parent.$data.viewVendor = true;
        },
        showBenefitsMethods() {
            this.$parent.$data.show = false;
            this.$parent.$data.viewBenefit = true;
        },
        showOverheadsMethods() {
            this.$parent.$data.show = false;
            this.$parent.$data.viewOverhead = true;
        },
        showExpenseMethods() {
            this.$parent.$data.show = false;
            this.$parent.$data.viewExpense = true;
        },
    },
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
