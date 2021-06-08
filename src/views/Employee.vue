<template>
  <div class="Employee">
    <h1>Explore employee details...</h1>
    <div id="nav">
      <router-link to="/viewEmployee">View Employee Details</router-link> |
      <router-link to="/addEmployee">Add New Employee</router-link> |
      <router-link to="/updateEmployee">Update Employee Details</router-link> |
      <router-link to="/expenseEmployee">Employee Expense Details</router-link>
      <router-view />
    </div>
  </div>
</template>

<style scoped>

#nav {
  background: rgba(0, 0, 0, 0.6);
  padding: 40px;
  font-size: 4ch;
}

#nav a {
  font-weight: bold;
  color:#05a081;
  font-size: 1ch;
}

#nav a:hover {
  font-weight: bold;
  color:tomato;
  font-size: 1.1ch;
}

#nav a.router-link-exact-active {
  color: #31b87b;
  font-size: 1.3ch;
}
</style>
