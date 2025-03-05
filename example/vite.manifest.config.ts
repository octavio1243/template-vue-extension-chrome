import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue';
import hotReloadExtension from 'hot-reload-extension-vite';

export default defineConfig({
  plugins: [
    vue(),
    hotReloadExtension({
      log: true,
      backgroundPath: 'src/pages/background/index.ts'
    }),
    viteStaticCopy({
      targets: [{ src: 'manifest.json', dest: '.' }] // Copia el manifest a `dist/`
    })
  ],
  build: {
    watch:{},
    lib: { entry: 'manifest.json', formats: ['es'] } // Define un archivo "falso" para evitar errores
  }
});
