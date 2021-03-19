<template>
    <form id="updateEmployeeForm" method="POST" action="https://fbc.exitest.com/employee/updateEmployee">
    <label for="First Name" id="First Name" v-bind:class="{required : true}">First Name</label><br />
    <input id="First Name" type="text"  value="Aakash" readonly="" style="margin-top: 4px" />
    <label for="Middle Name" id="Middle Name">Middle Name</label><br />
    <input id="Middle Name" type="text" value="" readonly="" style="margin-top: 4px" />
    <label for="Last Name" id="Last Name">Last Name</label><br />
    <input id="Last Name" type="text" value="Rana" readonly="" style="margin-top: 4px" />
    <label id="Title" v-bind:class="{required : true}">Title</label><br />
    <select id="Title" >
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
    </select><br />
    <label for="Email" id="Email" v-bind:class="{required : true}">Email</label><br />
    <input id="Email" type="email"  value="aakash@gmail.com" readonly="" style="margin-top: 4px"/>
    <label for="Joining Date" id="Joining Date" v-bind:class="{required : true}">Joining Date</label><br />
    <input id="Joining Date" type="date"  value="2021-01-01" readonly="" style="margin-top: 4px" />
    <label for="Leaving Date" id="Leaving Date">Leaving Date</label><br />
    <input id="Leaving Date" type="date" value="2021-03-14" style="margin-top: 4px" />
    <label id="Billable" v-bind:class="{required : true}">Billable</label><br />
    <select id="Billable" >
        <option value="false">No</option>
        <option value="0">Yes</option>
    </select><br /><label for="Street Address 1" id="Street Address 1" v-bind:class="{required : true}">Street Address 1</label><br />
    <input id="Street Address 1" type="text"  value="Sec-4" style="margin-top: 4px" />
    <label for="Street Address 2" id="Street Address 2">Street Address 2</label><br />
    <input id="Street Address 2" type="text" value="RailwayRoad" style="margin-top: 4px" />
    <label for="City" id="City" v-bind:class="{required : true}">City</label><br />
    <input id="City" type="text"  value="Gurugram" style="margin-top: 4px" />
    <label for="Postal Code" id="Postal Code" v-bind:class="{required : true}" >Postal Code</label><br />
    <input id="Postal Code" type="number"  value="122101" style="margin-top: 4px" />
    <label for="District" id="District" v-bind:class="{required : true}">District</label><br />
    <input id="District" type="text"  value="Gurugram" style="margin-top: 4px" />
    <label for="State" id="State" v-bind:class="{required : true}">State</label><br />
    <input id="State" type="text"  value="Haryana" style="margin-top: 4px" />
    <label for="Country" id="Country" v-bind:class="{required : true}">Country</label>
    <br /><input id="Country" type="text"  value="India" style="margin-top: 4px" />
    <label id="Is Address Permanent" v-bind:class="{required : true}">Is Address Permanent</label>
    <br />
    <select id="Is Address Permanent" >
        <option value="false">No</option>
        <option value="0">Yes</option>
    </select>
    <br />
    <label for="Office Number" id="Office Number" v-bind:class="{required : true}">Office Number</label><br />
    <input id="Office Number" type="number"  value="9875064321" style="margin-top: 4px" />
    <label for="Mobile Number" id="Mobile Number" v-bind:class="{required : true}">Mobile Number</label><br />
    <input id="Mobile Number" type="number"  value="100" style="margin-top: 4px" />
    <label for="LandLine Number" id="LandLine Number">LandLine Number</label>
    <br />
    <input id="LandLine Number" type="number" value="40116881" style="margin-top: 4px" />
    <label for="Bank Name" id="Bank Name" v-bind:class="{required : true}">Bank Name</label>
    <br /><input id="Bank Name" type="text"  value="BNY" style="margin-top: 4px" />
    <label for="Account No." id="Account No." v-bind:class="{required : true}">Account No.</label><br /><input id="Account No." type="number"  value="100200300" style="margin-top: 4px" />
    <label for="IFSC" id="IFSC" v-bind:class="{required : true}">IFSC</label><br />
    <input id="IFSC" type="text"  value="CNRB5056" style="margin-top: 4px" />
    <label for="Branch Name" id="Branch Name" v-bind:class="{required : true}">Branch Name</label><br />
    <input id="Branch Name" type="text"  value="Rajendra Park" style="margin-top: 4px" />
    <label for="PAN" id="PAN" v-bind:class="{required : true}">PAN</label><br />
    <input id="PAN" type="text"  value="" readonly="" style="margin-top: 4px" />
    <label id="Status" v-bind:class="{required : true}">Status</label><br />
    <select id="Status" >
        <option value="Terminated">Terminated</option>
        <option value="Active">Active</option>
        <option value="Intern">Intern</option>
        <option value="On Bench">On Bench</option>
    </select><br /><input name="id" value="2" style="visibility: hidden" v-bind:class="{required : true}"/>
    <input type="submit" value="Submit" v-bind:class="{required : true}"/>
    </form>
</template>

<script>
    export default {
    name: 'UpdateForm'
    };
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
