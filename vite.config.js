import { defineConfig } from 'vite';
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
        dataprojet: resolve(__dirname, 'projet/projet.json'),
        jsprojet: resolve(__dirname, 'projet/js.js'),
        jsonprojet: resolve(__dirname, 'public/projet.json'),
        datajsonprojet: resolve(__dirname, '/data/projet.json'),
      }
    }
  },
  plugins: [
    {
      name: 'configure-server',
      configureServer(server) {
        // Importer dynamiquement body-parser
        import('body-parser').then(bodyParser => {
          server.middlewares.use(bodyParser.json());
        });
      }
    }
  ]
});
