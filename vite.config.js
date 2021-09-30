import { defineConfig } from 'vite';
import { createVitePlugin } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugin(),
});
