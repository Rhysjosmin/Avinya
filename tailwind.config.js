/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily:{
      'Stoke': ['Stoke', 'serif'],
      'SuezOne': ['Suez One', 'serif']
    },
    extend:{
      animation:{
        'text-popup': 'TextPopup .4s ease-out ',
      }
    }
  },
  plugins: [],
}

