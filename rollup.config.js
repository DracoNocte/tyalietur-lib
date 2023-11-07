import pkg from './package.json' assert { type: 'json' };
import typescriptPlugin from 'rollup-plugin-typescript2';
import { nodeResolve as nodeResolvePlugin } from '@rollup/plugin-node-resolve';
import commonjsPlugin from '@rollup/plugin-commonjs';

const input = 'src/main.ts';

const plugins = [
  nodeResolvePlugin({
    customResolveOptions: {
      moduleDirectories: ['node_modules'],
    },
  }),
  commonjsPlugin({
    include: 'node_modules/**',
  }),
  typescriptPlugin({
    typescript: require('typescript'), // eslint-disable-line no-undef
    tsconfig: 'tsconfig.json',
  }),
];

// Note: add here any additional dependency that should not be included in the bundle.
const external = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

/**
 * @param {string} file
 * @param {import('rollup').ModuleFormat} format
 * @return {import('rollup').OutputOptions}
 */
const outputOptions = (file, format) => ({
  input,
  output: {
    file,
    format,
  },
  plugins,
  external,
});

const ecmascriptOutput = outputOptions(pkg.module, 'esm');
const commonjsOutput = outputOptions(pkg.main, 'cjs');

export default [ecmascriptOutput, commonjsOutput];
