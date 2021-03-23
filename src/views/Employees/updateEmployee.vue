<template>
    <div v-show="start">
        <label for="EmployeeID"></label>
        <input v-model="empID" placeholder="Enter the EmployeeID" />
        <button @click="getEmpId()">Go!</button>
    </div>
    <div v-if="show">
        <h2>Update your details..</h2>
        <UpdateForm v-bind:data="data"></UpdateForm>
    </div>
</template>

<script>
import UpdateForm from '@/components/updateForm';

export default {
    name: 'UpdateEmployee',
    components: {
        UpdateForm,
    },
    data() {
        return {
            empID: '',
            data: [],
            show: false,
            start: true,
        };
    },
    methods: {
        async getEmpId() {
            if (this.empID === '') {
                return alert('Enter the employee ID');
            }
            if (isNaN(Number(this.empID))) {
                return alert('Enter valid employee ID');
            }
            this.data = await fetch(`https://fbc.exitest.com/employee/allEmployeeDetails/id=${this.empID}`);
            this.data = (await this.data.json())[0];
            this.show = true;
            this.start = false;
        },
    },
};
</script>

<style scoped>
h2 {
    background: -webkit-repeating-radial-gradient(yellow, white);
    padding: 15px;
}
</style>
