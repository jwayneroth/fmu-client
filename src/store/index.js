import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

window.axios = require('axios');

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

let plugins;

// create localStorage plugin in try statement
// allows for Safari Private Mode usage
try {
	plugins = [
		createPersistedState({
			key: 'fmuclient',
			paths: [
				
			],
			//storage: window.localStorage,
		}),
	];
} catch (err) {
	plugins = [];
}

export default new Vuex.Store({
	modules: {
		
	},
	strict: debug,
	plugins,
})
