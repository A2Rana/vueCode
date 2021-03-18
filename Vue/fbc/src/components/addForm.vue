<template>
  <form id="addEmployeeForm" method="POST" action="https://fbc.exitest.com/employee/add">
    <label for="First Name">First Name</label>
    <input id="First Name" type="text" name="FirstName" required="" placeholder="Your First Name" /><br /><label for="Middle Name">Middle Name</label>
    <input id="Middle Name" type="text" name="MiddleName" placeholder="Your Middle Name" /><br /><label for="Last Name">Last Name</label>
    <input id="Last Name" type="text" name="LastName" placeholder="Your Last Name" /><br /><label>Title</label>
    <select id="Title" required="" name="Title">
        <option value="">--Select--</option>
        <option value="Mr">Mr</option>
        <option value="Ms">Ms</option>
        <option value="Mrs">Mrs</option>
        <option value="Dr">Dr</option>
    </select>
    <br /><label>Gender</label>
    <select id="Gender" required="" name="Gender">
        <option value="">--Select--</option>
        <option value="M">Male</option>
        <option value="F">Female</option>
        <option value="O">Others</option>
    </select>
    <br />
    <label for="Email">Email</label>
    <input id="Email" type="email" name="Email" required="" placeholder="Your Email Address" /><br /><label for="Joining Date"> Joining Date</label>
    <input id="Joining Date" type="date" name="JoiningDate" required="" placeholder="" /><br /><label for="Leaving Date">Leaving Date</label>
    <input id="Leaving Date" type="date" name="LeavingDate" placeholder="" /><br /><label>Billable</label>
    <select id="Billable" required="" name="isBillable">
        <option value="">--Select--</option>
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select>
    <br />
    <label for="Street Address 1">Street Address 1</label>
    <input id="Street Address 1" type="text" name="StreetAddress1" required="" placeholder="Your Street Address1" /><br>
    <label for="Street Address 2"> Street Address 2</label>
    <input id="Street Address 2" type="text" name="StreetAddress2" placeholder="Your Street Address2"/><br>
    <label for="City">City</label>
    <input id="City" type="text" name="City" required="" placeholder="Your City" /><br>
    <label for="Postal Code">Postal Code</label>
    <input id="Postal Code" type="text" name="PostalCode" required="" placeholder="Your Postal Code" /><br>
    <label for="District">District</label>
    <input id="District" type="text" name="District" required="" placeholder="Your District" /><br>
    <label for="State">State</label>
    <input id="State" type="text" name="State" required="" placeholder="Your State" /><br />
    <label for="Country">Country</label>
    <input id="Country" type="text" name="Country" required="" placeholder="Your Country" /><br>
    <label>Is Address Permanent</label>
    <select id="Is Address Permanent" required="" name="IsPermanent">
        <option value="">--Select--</option>
        <option value="1">Yes</option>
        <option value="0">No</option></select>
    <br>
    <label for="Office Number">Office Number</label>
    <input id="Office Number" type="number" name="Office" required="" placeholder="Your Office Number" /><br /><label for="Mobile Number"> Mobile Number</label>
    <input id="Mobile Number" type="number" name="Mobile" required="" placeholder="Your Mobile Number" /><br /><label for="LandLine Number">LandLine Number</label>
    <input id="LandLine Number" type="number" name="LandLine" placeholder="Your LandLine Number" /><br /><label for="Bank Name">Bank Name</label>
    <input id="Bank Name" type="text" name="BankName" required="" placeholder="Your Bank Name" /><br /><label for="Account No.">Account No.</label>
    <input id="Account No." type="text" name="AccountNo" required="" placeholder="Your Account No." /><br /><label for="IFSC">IFSC</label>
    <input id="IFSC" type="text" name="IFSC" required="" placeholder="Your IFSC Code" /><br /><label for="Branch Name">Branch Name</label>
    <input id="Branch Name" type="text" name="BranchName" required="" placeholder="Your Branch Name" /><br /><label for="PAN">PAN</label>
    <input id="PAN" type="text" name="PAN" required="" placeholder="Your Pan Number" /><br /><label>Status</label>
    <select id="Status" required="" name="Status">
        <option value="">--Select--</option>
        <option value="Intern">Intern</option>
        <option value="Active">Active</option>
        <option value="Terminated">Terminated</option>
        <option value="On bench">On bench</option></select>
    <br>
    <br>
    <input type="submit" value="Submit"/>
    </form>
</template>

<script>
    export default {
    name: 'Form'
    };
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
