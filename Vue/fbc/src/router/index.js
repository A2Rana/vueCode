import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/employee',
        name: 'Employee',
        component: () => import('../views/Employee.vue'),
    },
    {
        path: '/viewEmployee',
        name: 'View Employee Details',
        component: () => import('../views/Employees/viewEmployee.vue'),
    },
    {
        path: '/addEmployee',
        name: 'Add New Employee',
        component: () => import('../views/Employees/addEmployee.vue'),
    },
    {
        path: '/updateEmployee',
        name: 'Update Employee Details',
        component: () => import('../views/Employees/updateEmployee.vue'),
    },
    {
        path: '/expenseEmployee',
        name: 'Employee Expense Details',
        component: () => import('../views/Employees/expenseEmployee.vue'),
    },
    {
        path: '/vendor',
        name: 'Vendor',
        component: () => import('../views/Vendor.vue'),
    },
    {
        path: '/viewVendor',
        name: 'View Vendor Details',
        component: () => import('../views/Vendors/viewVendor.vue'),
    },
    {
        path: '/addVendor',
        name: 'Add New Vendor',
        component: () => import('../views/Vendors/addVendor.vue'),
    },
    {
        path: '/updateVendor',
        name: 'Update Vendor Details',
        component: () => import('../views/Vendors/updateVendor.vue'),
    },
    {
        path: '/expenseVendor',
        name: 'Vendor Expense Details',
        component: () => import('../views/Vendors/expenseVendor.vue'),
    },
    {
        path: '/benefit',
        name: 'Benefit',
        component: () => import('../views/Benefit.vue'),
    },
    {
        path: '/viewBenefit',
        name: 'View Benefit Details',
        component: () => import('../views/Benefits/viewBenefit.vue'),
    },
    {
        path: '/addBenefit',
        name: 'Add New Benefit',
        component: () => import('../views/Benefits/addBenefit.vue'),
    },
    {
        path: '/updateBenefit',
        name: 'Update Benefit Details',
        component: () => import('../views/Benefits/updateBenefit.vue'),
    },
    {
        path: '/expenseBenefit',
        name: 'Benefit Expense Details',
        component: () => import('../views/Benefits/expenseBenefit.vue'),
    },
    {
        path: '/overhead',
        name: 'Overhead',
        component: () => import('../views/Overhead.vue'),
    },
    {
        path: '/viewOverhead',
        name: 'View Overhead Details',
        component: () => import('../views/Overheads/viewOverhead.vue'),
    },
    {
        path: '/addOverhead',
        name: 'Add New Overhead',
        component: () => import('../views/Overheads/addOverhead.vue'),
    },
    {
        path: '/updateOverhead',
        name: 'Update Overhead Details',
        component: () => import('../views/Overheads/updateOverhead.vue'),
    },
    {
        path: '/expenseOverhead',
        name: 'Overhead Expense Details',
        component: () => import('../views/Overheads/expenseOverhead.vue'),
    },
    {
        path: '/expense',
        name: 'Expense',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Expense.vue'),
    },
    {
        path: '/viewExpense',
        name: 'View Expense Details',
        component: () => import('../views/Expenses/viewExpense.vue'),
    },
    {
        path: '/calculateExpense',
        name: 'Calculate Expense',
        component: () => import('../views/Expenses/calculateExpense.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
