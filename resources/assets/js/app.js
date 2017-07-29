/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes.js';
import App from './components/App.vue';
import components from './components'
import Velocity from "velocity-animate"
window.Velocity = window.velocity = Velocity;
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.

 Vue.component('example', require('./components/Loading.vue'));

 const app = new Vue({
    el: '#app'
});*/




const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

new Vue(Vue.util.extend({router}, App)).$mount('#app');