// import { terser } from 'rollup-plugin-terser';
// import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
  input: './src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    // plugins: [terser()]
    // plugins: [commonjs(), nodeResolve()]
  }
};