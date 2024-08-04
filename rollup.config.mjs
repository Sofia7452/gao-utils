import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import typescript from 'rollup-plugin-typescript2';

const output = [
  {
    name: 'utils',
    format: 'esm',
    file: 'dist/index.esm.js',
    // sourcemap: true,
  },
  {
    name: 'utils',
    format: 'umd',
    file: 'dist/index.umd.js',
    // sourcemap: true,
  },
  {
    name: 'utils',
    format: 'iife',
    file: 'dist/index.iife.js',
    // sourcemap: true,
  },
  {
    name: 'utils',
    format: 'cjs',
    file: 'dist/index.cjs.js',
    // sourcemap: true,
  },
  {
    name: 'utils',
    format: 'esm',
    file: 'dist/index.esm.min.js',
    // plugins: [terser()]
  },
  {
    name: 'utils',
    format: 'umd',
    file: 'dist/index.umd.min.js',
    // plugins: [terser()]
  },
  {
    name: 'utils',
    format: 'iife',
    file: 'dist/index.iife.min.js',
    // plugins: [terser()]
  },
  {
    name: 'utils',
    format: 'cjs',
    file: 'dist/index.cjs.min.js',
    // plugins: [terser()]
  }
]

export default {
  input: './src/index.ts',
  output,
  plugins: [
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
