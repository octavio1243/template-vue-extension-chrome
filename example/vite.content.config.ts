import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import hotReloadExtension from 'hot-reload-extension-vite';

export default defineConfig({
  plugins: [
    vue(),
    hotReloadExtension({
      log: true,
      backgroundPath: 'src/pages/background/index.ts'
    })],
  build: {
    cssCodeSplit: true,
    emptyOutDir: false, // No borra archivos previos en `dist/`
    watch:{},
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/pages/content/index.ts')
      },
      output: {
        dir: 'dist',
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: 'assets/js/[name].js',
        format: 'iife'
      }
    }
  }
});
