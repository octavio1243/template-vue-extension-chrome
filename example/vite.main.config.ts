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
    })
  ],
  build: {
    emptyOutDir: false, // Para no borrar archivos de otros builds
    watch:{},
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/pages/popup/index.html'),
        background: resolve(__dirname, 'src/pages/background/index.ts'),
        'dev-tools': resolve(__dirname, 'src/pages/dev-tools/index.html'),
        panel: resolve(__dirname, 'src/pages/panel/index.html')
      },
      output: {
        dir: 'dist',
        entryFileNames: 'src/pages/[name]/index.js',
        chunkFileNames: 'assets/js/[name].js',
        format: 'es'
      }
    }
  }
});
