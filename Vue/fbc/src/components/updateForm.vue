<template>
    <form id="updateEmployeeForm" method="POST" action="https://fbc.exitest.com/employee/updateEmployee">
    <label for="First Name" id="First Name">First Name</label><br />
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
