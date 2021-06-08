<template>
  <div class="Benefit">
    <h1>Explore benefits provided by the company...</h1>
    <div id="nav">
      <router-link to="/viewBenefit">View Benefit Details</router-link> |
      <router-link to="/addBenefit">Add New Benefit</router-link> |
      <router-link to="/updateBenefit">Update Benefit Details</router-link> |
      <router-link to="/expenseBenefit">Benefit Expense Details</router-link>
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
