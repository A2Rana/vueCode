<template>
    <div>
        <h2>{{ msg }}</h2>
        <input v-model.lazy="inputID" :placeholder="message" type="number" required />
        <button @click="getID()" type="button">Go!</button>
        <button v-if="showButton" @click="back()" type="button">Back</button>
    </div>
</template>

<script>
export default {
    name: 'Filter',
    props: {
        msg: String,
        message: String,
        route:String
    },
    data() {
        return {
            mainParam: '/id=',
            inputID: '',
            showButton:false,
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
            if(this.route != 'http://localhost:8080/expenseEmployee'){
                this.showButton=true;
            }
            this.inputID = '';
            }
        },
        async back(){
            this.$parent.$data.data = Object.values(await this.$parent.getData());
            this.$parent.$data.tableHeaders = Object.keys(this.$parent.$data.data[0]);
            this.showButton = false;
        }
    },
};
</script>

<style></style>
