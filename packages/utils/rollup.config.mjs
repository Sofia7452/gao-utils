// import { terser } from 'rollup-plugin-terser';
// import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript'


export default {
  input: './src/index.js',
  output: {
    file: 'lib/bundle.js',
    format: 'es',
    // plugins: [terser()]
    // plugins: [commonjs(), nodeResolve()]
  },
  plugins: [
    // postcss({
    //     minimize: true,
    //     extensions: ['.css'],
    //     extract: true,
    // }),
    // resolve(),
    // commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        incremental: false,
      },
    }),
  ],
};