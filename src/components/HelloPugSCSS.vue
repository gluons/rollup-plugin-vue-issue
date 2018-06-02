<template lang="pug">
div
	span {{ text }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'HelloPugSCSS'
})
export default class HelloPugSCSS extends Vue {
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
