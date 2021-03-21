<template>
    <div id="nav">
        <router-link to="/">Home</router-link> | <router-link to="/employee">Employee</router-link> | <router-link to="/vendor">Vendor</router-link> |
        <router-link to="/benefit">Benefit</router-link> | <router-link to="/overhead">Overhead</router-link> |
        <router-link to="/expense">Expense</router-link>
    </div>
    <router-view />
</template>

<script>
<<<<<<< HEAD
export default {};
=======
import Login from './components/Login';

export default {
    data() {
        return {
            showLogin: true,
        };
    },
    components: {
        Login,
    },
};
>>>>>>> 57de777d2f39c3fa6aec2166ed94529fab0cd04a
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
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
