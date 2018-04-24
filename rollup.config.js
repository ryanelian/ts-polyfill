import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './lib/index.js',
    output: {
        file: './dist/ts-polyfill.js',
        format: 'iife',
        name: 'tsPolyfill'
    },
    plugins: [
        resolve({

        }),
        commonjs({
            sourceMap: false
        })
    ]
}
