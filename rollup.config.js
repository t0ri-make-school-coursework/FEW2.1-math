import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
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
