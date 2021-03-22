<template>
    <div>
        <h2>{{ msg }} {{ valueID }}</h2>
        <input v-model.lazy="inputID" :placeholder="message" type="number" required />
        <button @click="getID()" type="button">Go!</button>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    props: {
        msg: String,
        message: String,
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
            if(this.inputID === ''){
                window.alert('Please enter the Input ID!');
            }
            else{
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
            this.valueID = this.inputID;
            this.inputID = '';
            }
        },
    },
};
</script>

<style></style>
