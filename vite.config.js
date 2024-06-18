import { defineConfig } from 'vite'
import { resolve } from 'path';
// Remplacer l'importation de body-parser avec require
const bodyParser = require('body-parser');

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
        jsonprojet: resolve(__dirname, 'public/projet.json'),
      }
    }
  },
  plugins: [
    {
      name: 'configure-server',
      configureServer(server) {
        // Utiliser body-parser pour traiter les requêtes JSON
        server.middlewares.use(bodyParser.json());
      }
    }
  ]
})
