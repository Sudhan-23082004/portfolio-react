
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(85 81 227)',
        'secondary' : '#2b2d77',
      }
    },
    fontFamily : {
      'hero-font' : 'Protest Revolution',
      'another-font' : 'Quicksand',
      'Acme': 'Acme',
    }
  },
  plugins: [],
}
