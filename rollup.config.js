/* eslint-disable global-require */
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      terser(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: {
      file: 'umd/maath.js',
      format: 'umd',
      name: 'maath',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/maath.js',
      format: 'esm',
    },
  },
]
