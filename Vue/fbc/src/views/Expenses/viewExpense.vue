<template>
    <Table v-bind:tableHeaders="tableHeaders" v-bind:data="data"></Table>
    <div>
        <select @change="changeYear($event)">
            <option value="" selected disabled>Select the year</option>
            <option v-for="Year in yearArray" :value="Year" :key="Year">{{ Year }}</option>
        </select>
    </div>
</template>

<script>
    import Table from '@/components/Table.vue';
    export default {
    name: 'View Expense',
    components: {
        Table
    },
    data() {
        return {
        data: [],
        tableHeaders:[],
        yearArray:[],
        selectedYear:null
        };
    },
    methods: {
        async getData(param='') {
            const response = await fetch('https://fbc.exitest.com/overhead' + param);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return console.log('HTTP-Error: ' + response.status);
            }
        },
        async viewExpense() {
        this.data = Object.values(await this.getData(this.url));
        this.tableHeaders = Object.keys(this.data[0]);
        this.data.forEach(item => this.yearArray.push(item.Year));
        }
    }
    };
</script>
