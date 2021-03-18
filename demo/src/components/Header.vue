<template>
    <div class="head">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
    background-color: lightgreen;
    padding: 20px;
}
</style>
