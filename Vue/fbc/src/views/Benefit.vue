<template>
  <div class="Benefit">
    <h1>This is Benefit page</h1>
    <router-link to="/viewBenefit">View Benefit Details</router-link> |
    <router-link to="/addBenefit">Add New Benefit</router-link> |
    <router-link to="/updateBenefit">Update Benefit Details</router-link> |
    <router-link to="/expenseBenefit">Benefit Expense Details</router-link>
    <router-view />
  </div>
</template>
