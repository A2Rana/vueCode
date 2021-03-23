<template>
  <div class="Employee">
    <h1>This is Employee page</h1>
    <router-link to="/viewEmployee">View Employee Details</router-link> |
    <router-link to="/addEmployee">Add New Employee</router-link> |
    <router-link to="/updateEmployee">Update Employee Details</router-link> |
    <router-link to="/expenseEmployee">Employee Expense Details</router-link>
    <router-view />
  </div>
</template>
