import react from '@vitejs/plugin-react';
import relay from 'vite-plugin-relay';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), relay],
});
