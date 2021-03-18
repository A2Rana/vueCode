<template>
    <h2>{{ msg }}</h2>
    <input placeholder="Enter ID" />
    <button @click="getID()" type="button">Go!</button>
</template>

<script>
export default {
    name: 'Filter',
    props: {
        msg: String,
        placehold: String,
    },
    data() {
        return {
            mainParam: '/id=',
        };
    },
    methods: {
        async getID() {
            if (this.msg.indexOf('year') >= 0 && this.msg.indexOf('Benefit') >= 0) {
                this.mainParam = '/expense/year=';
            } else {
                if (this.msg.indexOf('year') >= 0 && this.msg.indexOf('Overhead') >= 0) {
                    this.mainParam = '/year=';
                }
            }
            const inputID = document.querySelector('input');
            const param = inputID.value ? this.mainParam + inputID.value : inputID.value;
            this.$parent.$data.data = Object.values(await this.$parent.getData(param));
            if (this.$parent.$data.data.length) this.$parent.$data.tableHeaders = Object.keys(this.$parent.$data.data[0]);
            else this.$parent.$data.tableHeaders = ['Data is not present!'];
            inputID.value = '';
        },
    },
};
</script>

<style></style>
