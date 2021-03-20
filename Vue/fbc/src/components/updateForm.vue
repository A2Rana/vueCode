<template>
    <form id="updateEmployeeForm" method="POST" action="https://fbc.exitest.com/employee/updateEmployee">
        <label for="First Name" id="First Name" v-bind:class="{ required: true }">First Name</label>
        <input id="First Name" type="text" required="" v-bind:value="data.FirstName" readonly="" style="margin-top: 4px" /><br />
        <label for="Middle Name" id="Middle Name">Middle Name</label>
        <input id="Middle Name" type="text" v-bind:value="data.MiddleName" readonly="" style="margin-top: 4px" /><br />
        <label for="Last Name" id="Last Name">Last Name</label>
        <input id="Last Name" type="text" v-bind:value="data.LastName" readonly="" style="margin-top: 4px" /><br />
        <label id="Title">Title</label>
        <select id="Title" required="" v-bind:value="data.Title">
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
        </select>
        <br /><br />
        <label for="Email" id="Email">Email</label>
        <input id="Email" type="email" required="" v-bind:value="data.Email" readonly="" /><br />
        <label for="Joining Date" id="Joining Date">Joining Date</label>
        <input id="Joining Date" type="date" required="" v-bind:value="data.JoiningDate.slice(0, 10)" readonly="" style="margin-top: 4px" /><br />
        <label for="Leaving Date" id="Leaving Date">Leaving Date</label>
        <input
            id="Leaving Date"
            type="date"
            v-bind:value="data.LeavingDate === null ? null : data.LeavingDate.slice(0, 10)"
            style="margin-top: 4px"
        /><br />
        <label id="Billable">Billable</label>
        <select id="Billable" v-bind:value="data.IsBillable === true ? 'No' : 'Yes'" required="">
            <option value="0">No</option>
            <option value="1">Yes</option>
        </select>
        <br /><br /><label for="Street Address 1" id="Street Address 1">Street Address 1</label>
        <input id="Street Address 1" type="text" required="" v-bind:value="data.StreetAddress1" style="margin-top: 4px" /><br />
        <label for="Street Address 2" id="Street Address 2">Street Address 2</label>
        <input id="Street Address 2" type="text" v-bind:value="data.StreetAddress2" style="margin-top: 4px" /><br />
        <label for="City" id="City">City</label>
        <input id="City" type="text" required="" v-bind:value="data.City" style="margin-top: 4px" /><br />
        <label for="Postal Code" id="Postal Code">Postal Code</label>
        <input id="Postal Code" type="number" required="" v-bind:value="data.PostalCode" style="margin-top: 4px" /><br />
        <label for="District" id="District">District</label>
        <input id="District" type="text" required="" v-bind:value="data.District" style="margin-top: 4px" /><br />
        <label for="State" id="State">State</label>
        <input id="State" type="text" required="" v-bind:value="data.State" style="margin-top: 4px" /><br />
        <label for="Country" id="Country">Country</label>
        <br /><br /><input id="Country" type="text" required="" v-bind:value="data.Country" style="margin-top: 4px" /><br />
        <label id="Is Address Permanent">Is Address Permanent</label>
        <br /><br />
        <select id="Is Address Permanent" v-bind:value="data.IsPermanent" required="">
            <option value="0">No</option>
            <option value="1">Yes</option>
        </select>
        <br /><br />
        <label for="Office Number" id="Office Number">Office Number</label>
        <input id="Office Number" type="number" required="" v-bind:value="data.Office" style="margin-top: 4px" /><br />
        <label for="Mobile Number" id="Mobile Number">Mobile Number</label>
        <input id="Mobile Number" type="number" required="" v-bind:value="data.Mobile" style="margin-top: 4px" /><br />
        <label for="LandLine Number" id="LandLine Number">LandLine Number</label>
        <br /><br />
        <input id="LandLine Number" type="number" v-bind:value="data.LandLine" style="margin-top: 4px" /><br />
        <label for="Bank Name" id="Bank Name">Bank Name</label>
        <br /><br /><input id="Bank Name" type="text" required="" v-bind:value="data.BankName" style="margin-top: 4px" /><br />
        <label for="Account No." id="Account No.">Account No.</label
        ><input id="Account No." type="number" required="" v-bind:value="data.AccountNo" style="margin-top: 4px" /><br />
        <label for="IFSC" id="IFSC">IFSC</label>
        <input id="IFSC" type="text" required="" v-bind:value="data.IFSC" style="margin-top: 4px" /><br />
        <label for="Branch Name" id="Branch Name">Branch Name</label>
        <input id="Branch Name" type="text" required="" v-bind:value="data.BranchName" style="margin-top: 4px" /><br />
        <label for="PAN" id="PAN">PAN</label>
        <input id="PAN" type="text" required="" v-bind:value="data.PAN" readonly="" style="margin-top: 4px" /><br />
        <label id="Status">Status</label>
        <select id="Status" required="" v-bind:value="data.Status">
            <option value="Terminated">Terminated</option>
            <option value="Active">Active</option>
            <option value="Intern">Intern</option>
            <option value="On Bench">On Bench</option>
        </select>
        <br /><br />
        <input type="submit" value="Submit" /><br />
    </form>
</template>
<script>
export default {
    name: 'UpdateForm',
    props: {
        data: Array,
    },
    mounted() {
        console.log(this.data);
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
