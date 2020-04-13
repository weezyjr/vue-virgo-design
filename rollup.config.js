import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from 'rollup-plugin-buble'; // Transpile/polyfill with reasonable browser support
import {terser} from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'virgo-design',
        exports: 'named',
    },
    plugins: [
        typescript({ module: 'CommonJS' }),
        terser(), // minifies generated bundles
        commonjs({ extensions: ['.js', '.ts'] }),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};