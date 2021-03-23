<template>
  <div class="Vendor">
    <h1>This is Vendor page</h1>
    <router-link to="/viewVendor">View Vendor Details</router-link> |
    <router-link to="/addVendor">Add New Vendor</router-link> |
    <router-link to="/updateVendor">Update Vendor Details</router-link> |
    <router-link to="/expenseVendor">Vendor Expense Details</router-link>
    <router-view />
  </div>
</template>

