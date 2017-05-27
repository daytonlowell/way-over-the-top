import babel from 'rollup-plugin-babel'
import svelte from 'rollup-plugin-svelte'

export default {
	format: 'iife',
	entry: 'app.js',
	dest: './bundle.js',
	plugins: [
		svelte(),
		babel({
			exclude: 'node_modules/**',
			presets: [
				[
					'es2015',
					{
						modules: false
					}
				]
			],
			plugins: [
				'external-helpers'
			]
		}),
	]
}
