<template>
    <form id="updateVendorForm" method="POST" action="https://fbc.exitest.com/vendor/updateVendor">
        <label for="Vendor Company">Vendor Company</label>
        <input id="Vendor Company" type="text" required="" v-bind:value="data.VendorCompany" readonly="" /><br />
        <label for="First Name"> First Name </label>
        <input id="First Name" type="text" required="" v-bind:value="data.FirstName" readonly="" /><br />
        <label for="Middle Name">Middle Name</label>
        <input id="Middle Name" type="text" v-bind:value="data.MiddleName" readonly="" /><br />
        <label for="Last Name">Last Name</label>
        <input id="Last Name" type="text" v-bind:value="data.LastName" readonly="" /><br />
        <label>Title</label>
        <select id="Title" required="" v-bind:value="data.Title">
            <option value="Ms">Ms</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
        </select>
        <br />
        <label for="Joining Date">Joining Date</label>
        <input id="Joining Date" type="date" v-bind:value="data.StartDate.slice(0, 10)" readonly="" /><br />
        <label for="Leaving Date">Leaving Date </label>
        <input id="Leaving Date" type="date" v-bind:value="data.EndDate === null ? null : data.EndDate.slice(0, 10)" /><br />
        <label for="Street Address 1">Street Address 1</label>
        <input id="Street Address 1" type="text" required="" v-bind:value="data.StreetAddress1" /><br />
        <label for="Street Address 2"> Street Address 2 </label>
        <input id="Street Address 2" type="text" v-bind:value="data.StreetAddress2" /><br />
        <label for="City">City</label>
        <input id="City" type="text" required="" v-bind:value="data.City" /><br />
        <label for="Postal Code">Postal Code</label>
        <input id="Postal Code" type="number" required="" v-bind:value="data.PostalCode" /><br />
        <label for="District">District</label>
        <input id="District" type="text" required="" v-bind:value="data.District" /><br />
        <label for="State">State</label>
        <input id="State" type="text" required="" v-bind:value="data.State" /><br />
        <label for="Country">Country</label>
        <input id="Country" type="text" required="" v-bind:value="data.Country" /><br />
        <label for="Mobile Number">Mobile Number</label>
        <input id="Mobile Number" type="number" required="" v-bind:value="data.PrimaryMobile" /><br />
        <label for="LandLine Number"> LandLine Number </label>
        <input id="LandLine Number" type="number" v-bind:value="data.Landline" /><br />
        <label for="Alternate Mobile NUmber">Alternate Mobile NUmber</label>
        <input id="Alternate Mobile NUmber" type="number" v-bind:value="data.AlternateMobile" /><br />
        <label for="Bank Name">Bank Name</label>
        <input id="Bank Name" type="text" required="" v-bind:value="data.BankName" /><br />
        <label for="Account No.">Account No.</label>
        <input id="Account No." type="number" required="" v-bind:value="data.AccountNumber" /><br />
        <label for="IFSC">IFSC</label>
        <input id="IFSC" type="text" required="" v-bind:value="data.IFSC" /><br />
        <label for="Branch Name">Branch Name</label>
        <input id="Branch Name" type="text" required="" v-bind:value="data.BranchName" /><br />
        <label for="PAN">PAN</label>
        <input id="PAN" type="text" required="" v-bind:value="data.PAN" readonly="" /><br />
        <input type="submit" value="Submit" />
    </form>
</template>

<script>
export default {
    name: 'UpdateVendorForm',
    props: {
        data: Object,
    },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
