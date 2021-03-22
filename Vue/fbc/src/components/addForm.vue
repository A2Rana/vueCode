<template>
        <form method="POST" action="https://fbc.exitest.com/employee/add">
            <label for="First Name" v-bind:class="{required : true}">First Name</label>
            <input id="First Name" type="text" name="FirstName" required="" placeholder="Your First Name" /><br />
            <label for="Middle Name"> Middle Name </label>
            <input id="Middle Name" type="text" name="MiddleName" placeholder="Your Middle Name" /><br /><label for="Last Name">Last Name</label>
            <input id="Last Name" type="text" name="LastName" placeholder="Your Last Name" /><br /><label v-bind:class="{required : true}">Title</label>
            <select id="Title" required="" name="Title">
                <option value="">--Select--</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Dr">Dr</option>
            </select>
            <br /><label v-bind:class="{required : true}">Gender</label>
            <select id="Gender"  name="Gender">
                <option value="">--Select--</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="O">Others</option>
            </select>
            <br />
            <label for="Email" v-bind:class="{required : true}">Email</label>
            <input id="Email" type="email" name="Email" placeholder="Your Email Address" required=""/><br />
            <label for="Joining Date" v-bind:class="{required : true}"> Joining Date </label>
            <input id="Joining Date" type="date" name="JoiningDate"  placeholder="" required=""/><br />
            <label for="Leaving Date" >Leaving Date</label>
            <input id="Leaving Date" type="date" name="LeavingDate" placeholder="" /><br />
            <label v-bind:class="{required : true}">Billable</label>
            <select id="Billable" required="" name="isBillable">
                <option value="">--Select--</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <br />
            <label for="Street Address 1"  v-bind:class="{required : true}">Street Address 1</label>
            <input id="Street Address 1" type="text" name="StreetAddress1" required="" placeholder="Your Street Address1" /><br />
            <label for="Street Address 2" v-bind:class="{required : true}"> Street Address 2</label>
            <input id="Street Address 2" type="text" name="StreetAddress2" placeholder="Your Street Address2" required=""/><br />
            <label for="City" v-bind:class="{required : true}">City</label>
            <input id="City" type="text" name="City"  placeholder="Your City" required=""/><br />
            <label for="Postal Code" v-bind:class="{required : true}">Postal Code</label>
            <input id="Postal Code" type="text" name="PostalCode" required="" placeholder="Your Postal Code" /><br />
            <label for="District" v-bind:class="{required : true}">District</label>
            <input id="District" type="text" name="District"  required="" placeholder="Your District" /><br />
            <label for="State" v-bind:class="{required : true}">State</label>
            <input id="State" type="text" name="State" required="" placeholder="Your State" /><br />
            <label for="Country" v-bind:class="{required : true}">Country</label>
            <input id="Country" type="text" name="Country" required="" placeholder="Your Country" /><br />
            <label v-bind:class="{required : true}">Is Address Permanent</label>
            <select id="Is Address Permanent" required="" name="IsPermanent">
                <option value="">--Select--</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <br />
            <label for="Office Number" v-bind:class="{required : true}">Office Number</label>
            <input id="Office Number" type="number" name="Office" required="" placeholder="Your Office Number" /><br /><label for="Mobile Number" v-bind:class="{required : true}">
                Mobile Number
            </label>
            <input id="Mobile Number" type="number" name="Mobile" required="" placeholder="Your Mobile Number" /><br /><label for="LandLine Number">
                LandLine Number
            </label>
            <input id="LandLine Number" type="number" name="LandLine" placeholder="Your LandLine Number" /><br /><label for="Bank Name" v-bind:class="{required : true}"
                >Bank Name
            </label>
            <input id="Bank Name" type="text" name="BankName" required="" placeholder="Your Bank Name" /><br /><label for="Account No." v-bind:class="{required : true}">
                Account No.
            </label>
            <input id="Account No." type="text" name="AccountNo" required="" placeholder="Your Account No." /><br /><label for="IFSC" v-bind:class="{required : true}">IFSC</label>
            <input id="IFSC" type="text" name="IFSC" required="" placeholder="Your IFSC Code" /><br /><label for="Branch Name" v-bind:class="{required : true}">Branch Name</label>
            <input id="Branch Name" type="text" name="BranchName" required="" placeholder="Your Branch Name" /><br /><label for="PAN" v-bind:class="{required : true}">PAN</label>
            <input id="PAN" type="text" name="PAN" required="" placeholder="Your Pan Number" /><br /><label v-bind:class="{required : true}">Status</label>
            <select id="Status" required="" name="Status">
                <option value="">--Select--</option>
                <option value="Intern">Intern</option>
                <option value="Active">Active</option>
                <option value="Terminated">Terminated</option>
                <option value="On bench">On bench</option>
            </select>
            <br />
            <br />
            <input type="submit" value="Submit" />
        </form>
</template>

<script>
export default {
    name: 'Form',
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
