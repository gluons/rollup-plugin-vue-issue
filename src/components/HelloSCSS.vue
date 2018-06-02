<template>
	<div id="hello">
		<span>{{ text }}</span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'HelloSCSS'
})
export default class HelloSCSS extends Vue {
	text: string = 'Hello, World';
}
</script>

<style lang="scss" scoped>
div {
	span {
		color: red;
	}
}
</style>
