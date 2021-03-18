import Vue from 'vue';
import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({});

createApp(App).mount('#app');
