<template>
    <div v-show="start">
        <label for="VendorID"></label>
        <input v-model="vendorID" placeholder="Enter the VendorID" />
        <button @click="getVendorId()">Go!</button>
    </div>
    <div v-if="show">
        <h2>Update your details..</h2>
        <UpdateVendorForm v-bind:data="data"></UpdateVendorForm>
    </div>
</template>

<script>
import UpdateVendorForm from '@/components/updateVendorForm';

export default {
    name: 'UpdateEmployee',
    components: {
        UpdateVendorForm,
    },
    data() {
        return {
            vendorID: '',
            data: [],
            show: false,
            start: true,
        };
    },
    methods: {
        async getVendorId() {
            if (this.vendorID === '') {
                return alert('Enter the Vendor ID');
            }
            if (isNaN(Number(this.vendorID))) {
                return alert('Enter valid vendor ID');
            }
            this.data = await fetch(`https://fbc.exitest.com/vendor/allVendorDetails/id=${this.vendorID}`);
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
