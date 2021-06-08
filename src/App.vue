<template>
  <div>
    <img src="" alt="">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/employee">Employee</router-link> |
      <router-link to="/benefit">Benefit</router-link> |
      <router-link to="/expense">Expense</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 40px;
  font-size: 4ch;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
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
