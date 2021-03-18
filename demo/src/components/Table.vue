<template>
    <table border="15">
        <tr>
            <th v-for="(item, index) of tableHeaders" v-bind:key="index">{{ item }}</th>
        </tr>
        <tr v-for="(items, index) in data" :key="index">
            <td v-for="(item, index) in items" :key="index">
                {{ item }}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name: 'Table',
    props: {
        msg: String,
        tableHeaders: Object,
        data: Array,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
