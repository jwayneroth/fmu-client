// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import store from './store';
import router from './router';

import App from './components/App.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#root',
	store,
	router,
	render: h => h(App)
});
