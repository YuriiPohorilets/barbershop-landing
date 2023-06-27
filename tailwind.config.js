/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        merri: ['Merriweather', 'serif'],
        godOfWar: ['godOfWar', 'sans-serif'],
      },
      colors: {
        accent: '#96000A',
        light: '#FFFDFD',
        dark: '#252631',
        'grey-light': '##D9D9D9',
        'grey-medium': '##B8B6B6',
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
      borderRadius: {
        xl: '4rem',
      },
      screens: {
        xs: '400px',
      },
      maxWidth: {
        '10xl': '1680px',
      },
    },
  },
  plugins: [],
};
