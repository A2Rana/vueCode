<template>
  <Main v-if="show"  headerMessage='Welcome to Financial Bowling Chart'/>
  <Employee v-if="showEmployee" />
  <view-employee v-if="viewEmployee"/>
  <add-employee v-if="addEmployee"/>
  <update-employee v-if="updateEmployee"/>
  <expense-employee v-if="expenseforEmployee"/>
  <Vendor v-if="showVendor" />
  <view-vendor v-if="viewVendor"/>
  <add-vendor v-if="addVendor"/>
  <update-vendor v-if="updateVendor"/>
  <Benefit v-if="showBenefit" />
  <view-benefit v-if="viewBenefit"/>
  <add-benefit v-if="addBenefit"/>
  <update-benefit v-if="updateBenefit"/>
  <expense-benefit v-if="expenseforBenefit"/>
  <Overhead v-if="showOverhead" />
  <view-overhead v-if="viewOverhead"/>
  <add-overhead v-if="addOverhead"/>
  <update-overhead v-if="updateOverhead"/>
  <expense-overhead v-if="expenseforOverhead"/>
  <Expense v-if="showExpense" />
  <Report v-if="viewExpense"/>
  <calculate-expense v-if="calculateExpense"/>
</template>

<script>
import Main from './components/Main.vue';
import Employee from './components/Employee.vue';
import ViewEmployee from './components/Employees/ViewEmployee';
import AddEmployee from './components/Employees/AddEmployee';
import UpdateEmployee from './components/Employees/UpdateEmployee';
import ExpenseEmployee from './components/Employees/ExpenseEmployee';
import Vendor from './components/Vendor';
import ViewVendor from './components/Vendors/ViewVendor';
import AddVendor from './components/Vendors/AddVendor';
import UpdateVendor from './components/Vendors/UpdateVendor';
import Benefit from './components/Benefit';
import ViewBenefit from './components/Benefits/ViewBenefit';
import AddBenefit from './components/Benefits/AddBenefit';
import UpdateBenefit from './components/Benefits/UpdateBenefit';
import ExpenseBenefit from './components/Benefits/ExpenseBenefit';
import Overhead from './components/Overhead';
import ViewOverhead from './components/Overheads/ViewOverhead';
import AddOverhead  from './components/Overheads/AddOverhead';
import UpdateOverhead from './components/Overheads/UpdateOverhead';
import ExpenseOverhead from './components/Overheads/ExpenseOverhead';
import Expense from './components/Expense';
import Report from './components/Expenses/Report';
import CalculateExpense from './components/Expenses/CalculateExpense';

export default {
  name: 'App',
  data: function(){
    return{
      show:true,
      showEmployee :false,
      viewEmployee:false,
      addEmployee:false,
      updateEmployee:false,
      expenseforEmployee:false,
      showVendor :false,
      viewVendor :false,
      addVendor:false,
      updateVendor:false,
      showBenefit :false,
      viewBenefit:false,
      addBenefit:false,
      updateBenefit:false,
      expenseforBenefit:false,
      showOverhead :false,
      viewOverhead:false,
      addOverhead:false,
      updateOverhead:false,
      expenseforOverhead:false,
      showExpense :false,
      viewExpense:false,
      calculateExpense:false
      };
    },
  components: {
    Main,Employee,Vendor,Benefit,Overhead,Expense,ViewEmployee,
    AddEmployee,UpdateEmployee,ExpenseEmployee,ViewVendor,
    AddVendor,UpdateVendor,ViewOverhead,AddOverhead,ExpenseOverhead,
    UpdateOverhead,ViewBenefit,AddBenefit,UpdateBenefit,ExpenseBenefit,
    Report,CalculateExpense
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
