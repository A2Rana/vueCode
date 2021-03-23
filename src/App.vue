<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> | <router-link to="/employee">Employee</router-link> |
            <router-link to="/vendor">Vendor</router-link> | <router-link to="/benefit">Benefit</router-link> |
            <router-link to="/overhead">Overhead</router-link> |
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
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #31b87b;
}
</style>
