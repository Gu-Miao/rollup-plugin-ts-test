import path from 'path'
import pkg from './package.json'

import clear from 'rollup-plugin-clear'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import ts from 'rollup-plugin-ts'

/** @type import('rollup').RollupOptions */
const config = {
  input: path.join(__dirname, 'src/index.ts'),
  output: [
    {
      file: pkg.module,
      format: 'esm',
      exports: 'auto',
    },
  ],
  plugins: [
    clear({
      targets: ['dist'],
    }),
    resolve(),
    commonjs(),
    ts(),
  ],

  external: 'cesium',
}

export default config
