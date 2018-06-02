import { resolve } from 'path';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import typescript2 from 'rollup-plugin-typescript2';
import VuePlugin from 'rollup-plugin-vue';

export default {
	input: resolve(__dirname, './src/index.ts'),
	output: [
		{
			file: resolve(__dirname, './dist/hello.cjs.js'),
			format: 'cjs',
			sourcemap: true
		},
		{
			file: resolve(__dirname, './dist/hello.es.js'),
			format: 'es',
			sourcemap: true
		},
		{
			file: resolve(__dirname, './dist/hello.js'),
			format: 'iife',
			name: 'VueHello',
			globals: {
				vue: 'Vue'
			},
			sourcemap: true
		}
	],
	plugins: [
		nodeResolve(),
		commonjs(),
		VuePlugin({
			css: false
		}),
		typescript({
			typescript: require('typescript')
		})
		// typescript2()
	]
};
