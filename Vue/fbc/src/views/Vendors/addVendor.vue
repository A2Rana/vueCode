<template>
    <h1>Please fill the form to add a Vendor..</h1>
    <AddVendorForm v-bind:data="facilityArray" />
</template>

<script>
import AddVendorForm from '@/components/addVendorForm';

export default {
    name: 'AddVendor',
    components: {
        AddVendorForm,
    },
    data() {
        return {
            data: [],
            facilityArray: [],
        };
    },
    methods: {
        async getData() {
            const response = await fetch('https://fbc.exitest.com/overhead/facilities');
            if (response.ok) {
                return await response.json();
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
    },
    async mounted() {
        this.data = await this.getData();
        this.data.forEach((element) => {
            this.facilityArray.push(element.FacilityName);
        });
    },
};
</script>

<style scoped>
h1 {
    background: -webkit-repeating-radial-gradient(yellow, white);
    padding: 15px;
}
</style>
