import Vue, { VueConstructor } from 'vue';

// import Hello from './components/Hello.vue';
// import HelloPug from './components/HelloPug.vue';
import HelloPugSCSS from './components/HelloPugSCSS.vue';
// import HelloSCSS from './components/HelloSCSS.vue';
// import PlainHello from './components/PlainHello.vue';

declare global {
	interface Window {
		Vue: VueConstructor;
	}
}

function install(vue: VueConstructor) {
	// vue.component('Hello', Hello);
	// vue.component('Hello', HelloPug);
	vue.component('Hello', HelloPugSCSS);
	// vue.component('Hello', HelloSCSS);
	// vue.component('Hello', PlainHello);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
