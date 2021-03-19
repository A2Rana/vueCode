<template>
    <form id="updateEmployeeForm" method="POST" action="https://fbc.exitest.com/employee/updateEmployee">
<<<<<<< HEAD
    <label for="First Name" id="First Name" v-bind:class="required">First Name</label><br />
    <input id="First Name" type="text" required="" value="Aakash" readonly="" style="margin-top: 4px" />
    <label for="Middle Name" id="Middle Name">Middle Name</label><br />
    <input id="Middle Name" type="text" value="" readonly="" style="margin-top: 4px" />
    <label for="Last Name" id="Last Name">Last Name</label><br />
    <input id="Last Name" type="text" value="Rana" readonly="" style="margin-top: 4px" />
    <label id="Title">Title</label><br />
    <select id="Title" required="">
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
    </select><br />
    <label for="Email" id="Email">Email</label><br />
    <input id="Email" type="email" required="" value="aakash@gmail.com" readonly="" style="margin-top: 4px" />
    <label for="Joining Date" id="Joining Date">Joining Date</label><br />
    <input id="Joining Date" type="date" required="" value="2021-01-01" readonly="" style="margin-top: 4px" />
    <label for="Leaving Date" id="Leaving Date">Leaving Date</label><br />
    <input id="Leaving Date" type="date" value="2021-03-14" style="margin-top: 4px" />
    <label id="Billable">Billable</label><br />
    <select id="Billable" required="">
        <option value="false">No</option>
        <option value="0">Yes</option>
    </select><br /><label for="Street Address 1" id="Street Address 1">Street Address 1</label><br />
    <input id="Street Address 1" type="text" required="" value="Sec-4" style="margin-top: 4px" />
    <label for="Street Address 2" id="Street Address 2">Street Address 2</label><br />
    <input id="Street Address 2" type="text" value="RailwayRoad" style="margin-top: 4px" />
    <label for="City" id="City">City</label><br />
    <input id="City" type="text" required="" value="Gurugram" style="margin-top: 4px" />
    <label for="Postal Code" id="Postal Code">Postal Code</label><br />
    <input id="Postal Code" type="number" required="" value="122101" style="margin-top: 4px" />
    <label for="District" id="District">District</label><br />
    <input id="District" type="text" required="" value="Gurugram" style="margin-top: 4px" />
    <label for="State" id="State">State</label><br />
    <input id="State" type="text" required="" value="Haryana" style="margin-top: 4px" />
    <label for="Country" id="Country">Country</label>
    <br /><input id="Country" type="text" required="" value="India" style="margin-top: 4px" />
    <label id="Is Address Permanent">Is Address Permanent</label>
    <br />
    <select id="Is Address Permanent" required="">
        <option value="false">No</option>
        <option value="0">Yes</option>
    </select>
    <br />
    <label for="Office Number" id="Office Number">Office Number</label><br />
    <input id="Office Number" type="number" required="" value="9875064321" style="margin-top: 4px" />
    <label for="Mobile Number" id="Mobile Number">Mobile Number</label><br />
    <input id="Mobile Number" type="number" required="" value="100" style="margin-top: 4px" />
    <label for="LandLine Number" id="LandLine Number">LandLine Number</label>
    <br />
    <input id="LandLine Number" type="number" value="40116881" style="margin-top: 4px" />
    <label for="Bank Name" id="Bank Name">Bank Name</label>
    <br /><input id="Bank Name" type="text" required="" value="BNY" style="margin-top: 4px" />
    <label for="Account No." id="Account No.">Account No.</label><br /><input id="Account No." type="number" required="" value="100200300" style="margin-top: 4px" />
    <label for="IFSC" id="IFSC">IFSC</label><br />
    <input id="IFSC" type="text" required="" value="CNRB5056" style="margin-top: 4px" />
    <label for="Branch Name" id="Branch Name">Branch Name</label><br />
    <input id="Branch Name" type="text" required="" value="Rajendra Park" style="margin-top: 4px" />
    <label for="PAN" id="PAN">PAN</label><br />
    <input id="PAN" type="text" required="" value="" readonly="" style="margin-top: 4px" />
    <label id="Status">Status</label><br />
    <select id="Status" required="">
        <option value="Terminated">Terminated</option>
        <option value="Active">Active</option>
        <option value="Intern">Intern</option>
        <option value="On Bench">On Bench</option>
    </select><br /><input name="id" value="2" style="visibility: hidden" />
    <input type="submit" value="Submit" />
=======
        <label for="First Name" id="First Name">First Name</label>
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
>>>>>>> 9678bc0bb9aebcf2623ed034f4a29486f1ed71cf
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
