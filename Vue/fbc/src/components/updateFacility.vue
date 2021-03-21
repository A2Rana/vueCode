<template>
    <div>
        <form action="POST" target="http:localhost/3000/benefit/update">
            <label for="FaciltyId">Facility ID</label>
            <input type="text" v-bind:value="data.FacilityID" required readonly />
            <label for="FacilityName">Facility Name</label>
            <input type="text" v-bind:value="data.Name" required />
            <label for="Description">Facility Description</label>
            <textarea wrap="off" v-bind:value="data.Description" required cols="100" rows="10"></textarea>
            <label for="ActiveStatus">Status</label>
            <select type="text" v-bind:value="data.Status" required>
                <option value="0">Active</option>
                <option value="1">Terminated</option>
            </select>
            <input type="submit" />
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
    },
};
</script>
