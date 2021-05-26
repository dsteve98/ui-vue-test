require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue';
import store from './store/index';
import App from './app.vue';

const app = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
console.log('yyyyyyyy');

console.log(store.state.tableBRows);
