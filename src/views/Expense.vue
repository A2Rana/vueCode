<template>
    <div class="Expense">
        <h1>Expense Summary page</h1>
        <div id="nav">
            <router-link to="/viewExpense">View Expense Details</router-link> |
            <router-link to="/calculateExpense">Calculate New Expense</router-link>
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
