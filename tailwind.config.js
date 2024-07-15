/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}'],
  darkMode : 'class',
  theme: {
    letterSpacing : {
      normal : '20px'
    },
    extend: {
      backgroundImage : {
        special : "url('/img/offer.jpg')"
      }
    },
  },
  plugins: [],
}

