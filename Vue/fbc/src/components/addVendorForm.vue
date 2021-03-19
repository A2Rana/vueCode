<template>
    <keep-alive>
        <form id="addVendorForm" method="POST" action="https://fbc.exitest.com/vendor/addVendor" autocomplete="off">
            <label for="Vendor Company">Vendor Company</label>
            <input id="Vendor Company" type="text" name="VendorCompany" required="" placeholder="Your Vendor Company Name" style="margin-top: 4px" />
            <label for="First Name">First Name</label>
            <input id="First Name" type="text" name="FirstName" required="" placeholder="Your First Name" style="margin-top: 4px" />
            <label for="Middle Name">Middle Name</label>

            <input id="Middle Name" type="text" name="MiddleName" placeholder="Your Middle Name" style="margin-top: 4px" />

            <label for="Last Name">Last Name</label>

            <input id="Last Name" type="text" name="LastName" placeholder="Your Last Name" style="margin-top: 4px" />

            <label>Title</label>
            <select id="Title" required="" name="Title" style="margin-left: 10px">
                <option value="">--Select--</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
            </select>

            <label for="Starting Date">Starting Date</label>

            <input id="Starting Date" type="date" name="StartDate" required="" placeholder="" style="margin-top: 4px" />

            <label for="Leaving Date">Leaving Date</label>

            <input id="Leaving Date" type="date" name="EndDate" placeholder="" style="margin-top: 4px" />

            <label for="Street Address 1">Street Address 1</label>

            <input id="Street Address 1" type="text" name="StreetAddress1" required="" placeholder="Your Street Address1" style="margin-top: 4px" />

            <label for="Street Address 2">Street Address 2</label>

            <input id="Street Address 2" type="text" name="StreetAddress2" placeholder="Your Street Address2" style="margin-top: 4px" />

            <label for="City">City</label>

            <input id="City" type="text" name="City" required="" placeholder="Your City" style="margin-top: 4px" />

            <label for="Postal Code">Postal Code</label>

            <input id="Postal Code" type="text" name="PostalCode" required="" placeholder="Your Postal Code" style="margin-top: 4px" />

            <label for="District">District</label>

            <input id="District" type="text" name="District" required="" placeholder="Your District" style="margin-top: 4px" />

            <label for="State">State</label>

            <input id="State" type="text" name="State" required="" placeholder="Your State" style="margin-top: 4px" />

            <label for="Country">Country</label>

            <input id="Country" type="text" name="Country" required="" placeholder="Your Country" style="margin-top: 4px" />

            <label for="Primary Mobile Number">Primary Mobile Number</label>

            <input id="Primary Mobile Number" type="text" name="PrimaryMobile" required="" placeholder="Your Mobile Number" style="margin-top: 4px" />

            <label for="LandLine Number">LandLine Number</label>

            <input id="LandLine Number" type="text" name="LandLine" placeholder="Your LandLine Number" style="margin-top: 4px" />

            <label for="Alternate Mobile Number">Alternate Mobile Number</label>

            <input
                id="Alternate Mobile Number"
                type="text"
                name="AlternateMobile"
                placeholder="Your Alternate Mobile Number"
                style="margin-top: 4px"
            />

            <label for="Bank Name">Bank Name</label>
            <input id="Bank Name" type="text" name="BankName" required="" placeholder="Your Bank Name" style="margin-top: 4px" />

            <label for="Account No.">Account No.</label>

            <input id="Account No." type="text" name="AccountNumber" required="" placeholder="Your Account No." style="margin-top: 4px" />

            <label for="IFSC">IFSC</label>

            <input id="IFSC" type="text" name="IFSC" required="" placeholder="Your IFSC Code" style="margin-top: 4px" />

            <label for="Branch Name">Branch Name</label>

            <input id="Branch Name" type="text" name="BranchName" required="" placeholder="Your Branch Name" style="margin-top: 4px" />

            <label for="PAN">PAN</label>

            <input id="PAN" type="text" name="PAN" required="" placeholder="Your Pan Number" style="margin-top: 4px" />

            <label>Facility Name</label>
            <select @change="changeYear($event)">
                <option value="" selected disabled>Select the Facility</option>
                <option v-for="FacilityaName in data" :value="FacilityaName" :key="FacilityaName">{{ FacilityaName }}</option>
            </select>

            <input type="submit" value="Submit" />
        </form>
    </keep-alive>
</template>

<script>
export default {
    name: 'AddVendorForm',
    props: {
        data: Array,
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
