import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default {
    input: './lib/index.js',
    output: [{
        file: './dist/ts-polyfill.js',
        format: 'iife',
        name: 'tsPolyfill'
    }, {
        file: './dist/ts-polyfill.min.js',
        format: 'iife',
        name: 'tsPolyfill',
        sourcemap: true,
        plugins: [terser(), filesize()]
    }],
    plugins: [resolve(), commonjs()]
}
