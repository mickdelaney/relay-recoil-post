import { defineConfig, UserConfigExport } from 'vite';
import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';

export default defineConfig(({ command, mode, ssrBuild }) => {
  const config: UserConfigExport = {
    esbuild: {
      format: 'esm',
    },
    resolve: {
      dedupe: ['react', 'react-dom', 'react-router-dom'],
    },
    plugins: [react(), relay],
  };

  return config;
});
