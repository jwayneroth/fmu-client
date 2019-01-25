<template>
	<div class="home">
		<div v-if="$route.name === '404'">
			404
		</div>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
