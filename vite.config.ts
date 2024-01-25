import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/cookin-up/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Cookin-Up/'
    : '/'
});
