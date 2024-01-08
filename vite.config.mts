import pkg from './package.json' assert { format: 'json' };
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  appType: 'custom',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: pkg.name,
    },
    outDir: 'lib',
  },
  plugins: [
    tsconfigPaths(),
    dts({
      tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
    }),
  ],
});
