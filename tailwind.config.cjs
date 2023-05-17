/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,astro}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ] 

}