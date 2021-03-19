<template>
    <h2>{{ msg }}: {{ valueID }}</h2>
    <input v-model.lazy="inputID" placeholder="Enter ID" />
    <button @click="getID()" type="button">Go!</button>
</template>

<script>
export default {
    name: 'Filter',
    props: {
        msg: String,
    },
    data() {
        return {
            mainParam: '/id=',
            inputID: '',
            valueID: '',
        };
    },
    methods: {
        async getID() {
            this.valueID = this.inputID;
            if (this.msg.indexOf('year') >= 0 && this.msg.indexOf('Benefit') >= 0) {
                this.mainParam = '/expense/year=';
            }
            if (this.msg.indexOf('year') >= 0 && this.msg.indexOf('Overhead') >= 0) {
                this.mainParam = '/year=';
            }
            if (this.msg.indexOf('Get') >= 0 && this.msg.indexOf('Benefits') >= 0) {
                this.mainParam = '/employee/';
            }
            if (this.msg.indexOf('expenses') >= 0 && this.msg.indexOf('Employee') >= 0) {
                this.mainParam = '';
            }
            const param = this.inputID ? this.mainParam + this.inputID : this.inputID;
            this.$parent.$data.data = Object.values(await this.$parent.getData(param));
            if (this.$parent.$data.data.length) {
                this.$parent.$data.tableHeaders = Object.keys(this.$parent.$data.data[0]);
            } else {
                this.$parent.$data.tableHeaders = ['Data is not present!'];
            }
            this.inputID = '';
        },
    },
};
</script>

<style></style>
