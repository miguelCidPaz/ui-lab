import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
});
// https://vitejs.dev/config/
// https://vitejs.dev/guide/features.html#css-pre-processors