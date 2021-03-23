<template>
  <div class="Overhead">
    <h1>This is Overhead page</h1>
    <router-link to="/viewOverhead">View Overhead Details</router-link> |
    <router-link to="/addOverhead">Add New Overhead</router-link> |
    <router-link to="/updateOverhead">Update Overhead Details</router-link> |
    <router-link to="/expenseOverhead">Overhead Expense Details</router-link>
    <router-view />
  </div>
</template>
