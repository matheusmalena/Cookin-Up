import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/cookin-up/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Cookin-Up/'
    : '/'
});
