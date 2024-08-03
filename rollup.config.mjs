import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
// import commonjs from '@rollup/plugin-commonjs';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';


export default {
  input: './src/index.ts',
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
    visualizer({
      gzipSize: true,
      brotliSize: true
    }),
    terser(),
    typescript({
      tsconfig: './tsconfig.json',
      compilerOptions: {
        incremental: false,
      },
    }),
  ],
};
