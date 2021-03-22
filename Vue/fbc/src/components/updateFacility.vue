<template>
    <div>
        <form method="POST" action="http://localhost:3000/benefit/update">
            <label for="FaciltyId">Facility ID</label>
            <input type="text" name="FacilityId" v-bind:value="data.FacilityID" required readonly />
            <label for="FacilityName">Facility Name</label>
            <input type="text" name="FacilityName" v-bind:value="data.Name" required />
            <label for="Description">Facility Description</label>
            <textarea name="FacilityDescription" wrap="off" v-bind:value="data.Description" required cols="100" rows="10"></textarea>
            <label for="ActiveStatus">Status</label>
            <select type="text" name="IsActive" v-bind:value="data.ActiveStatus ? 1 : 0" required>
                <option value="1">Active</option>
                <option value="0">Terminated</option>
            </select>
            <input type="submit" value="Submit" /><br />
        </form>
    </div>
</template>

<script>
export default {
    name: 'UpdateFacility',
    props: {
        data: Array,
    },
    mounted() {
        console.log(this.data);
        console.log(this.data.ActiveStatus);
    },
};
</script>
