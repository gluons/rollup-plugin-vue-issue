<template>
	<div id="hello">
		<span>{{ text }}</span>
	</div>
</template>

<script>
export default {
	name: 'PlainHello',
	data() {
		return {
			text: 'Hello, World'
		};
	}
};
</script>

<style scoped>
div span {
	color: red;
}
</style>
