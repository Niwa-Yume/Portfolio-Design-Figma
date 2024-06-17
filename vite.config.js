// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';

export default defineConfig({
  base: '',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projet: resolve(__dirname, 'projet/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        service: resolve(__dirname, 'service-outil/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        dataprojet: resolve(__dirname, 'projet/projet.json'),
        jsprojet: resolve(__dirname, 'projet/js.js'),
      }
    }
  }
})
