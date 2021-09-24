import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './demo/index.ts',
  output: {
    file: './demo/dist/index.js',
  },
  format: 'iife',
  exports: 'named',
  resolve: true,
  sourcemap: false,
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
