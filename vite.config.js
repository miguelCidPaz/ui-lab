import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@proyectos': path.resolve(__dirname, './Proyectos')
    }
  },
  server: {
    historyApiFallback: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
  },
});

// https://vitejs.dev/config/
// https://vitejs.dev/guide/features.html#css-pre-processors