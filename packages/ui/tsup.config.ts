import { defineConfig } from 'tsup';
import babel from 'esbuild-plugin-babel';

export default defineConfig(options => {
  return {
    entry: ['src/index.tsx'],
    dts: true,
    esbuildPlugins: [babel()],
    watch: options.watch,
    sourcemap: true,
    bundle: true,
    format: ['esm'],
    external: ['react', 'react-dom', 'react-relay'],
  };
});
