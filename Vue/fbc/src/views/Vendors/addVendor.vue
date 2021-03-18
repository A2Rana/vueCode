<template>
    <h1>Please fill the form to add a Vendor..</h1>
    <Form></Form>
</template>

<script>
import Form from '@/components/addForm';

export default {
    name: 'AddVendor',
    components: {
        Form,
    },
};
</script>

<style scoped>
h1 {
    background: -webkit-repeating-radial-gradient(yellow, white);
    padding: 15px;
}
</style>
