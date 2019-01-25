<template>
	<div id="app">
		<header id="header" ref="header">
			<div class="container-fluid">
				<div toggleable="md" class="d-flex flex-row align-items-end justify-content-between">
					<router-link to="/" id="site-logo" class="d-block">
						<img src="/static/img/logo.png" width="123" height="120" class="img-fluid">
					</router-link>
					<h1 id="site-title" class="mt-3 montserratregular">
						Fmu Client
					</h1>
				</div>
			</div>
		</header>
		<main id="main" ref="main">
		</main>
		<modal-root />
	</div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex';

const debounce = require('lodash.debounce');

export default {
	name: 'app',
	components: {
	},
	computed: {
	},
	methods: {
	},
	mounted: function() {
	},
}
</script>

<style lang="scss">
@import "../assets/scss/app.scss";
</style>
