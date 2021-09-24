import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: [
    {
      name: 'Foo',
      file: './dist/index.umd.js',
      format: 'umd',
    },
    {
      file: './dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
    terser(),
  ],
};
