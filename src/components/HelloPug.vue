<template lang="pug">
div
	span {{ text }}
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'HelloPug'
})
export default class HelloPug extends Vue {
	text: string = 'Hello, World';
}
</script>

<style scoped>
div span {
	color: red;
}
</style>
