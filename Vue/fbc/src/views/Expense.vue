<template>
  <div class="Expense">
    <h1>This is Expense page</h1>
    <router-link to="/viewExpense">View Expense Details</router-link> |
    <router-link to="/calculateExpense">Calculate New Expense</router-link>
    <router-view />
  </div>
</template>
