import * as fs from 'fs'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'app.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		svelte({
			include: 'components/**/*.svelte',
			css(css) {
				css.write('dist/main.css')
			},
			onwarn: (warning, handler) => {
				if (warning.code === 'a11y-distracting-elements') {
					return
				}

				handler(warning)
			},
		}),
		resolve(),
	],
}