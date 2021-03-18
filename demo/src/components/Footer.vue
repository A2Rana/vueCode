<template>
    <div class="foot">
        <h3>{{ msg }}</h3>
    </div>
</template>

<script>
export default {
    name: 'app-footer',
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    text-align: center;
    color: lightgreen;
    background-color: black;
    padding: 5px;
}
</style>
