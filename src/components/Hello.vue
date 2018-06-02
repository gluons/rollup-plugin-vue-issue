<template>
	<div id="hello">
		<span>{{ text }}</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'Hello'
})
export default class Hello extends Vue {
	text: string = 'Hello, World';
}
</script>

<style scoped>
div span {
	color: red;
}
</style>
