/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./projet/index.html",
    "./contact/index.html",
    "./service-outil/index.html",
    "./projet/js.js",
    "./projet/projet.json",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FD853A',
        'secondary': '#FFFFFF',
        'tertariy': '#000000',
      }
    },
  },
  plugins: [

  ],
}

