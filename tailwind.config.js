// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,jsx,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary-dark': '#1EFCF1',
        'primary-60': '#00A299',
        'primary-light': 'var(--pimary-light-green-color)',

        // archive 
        'archive-teal-400': '#16FBF0',
        'archive-Neutral-Variant70': '#A2ADAB',
        'archive-Neutral-Variant80': '#BEC9C7',

        //Secondary
        'secondary-container': '#8F1115',
        'secondary-20': '#680005',
        'secondary-50': '#D3453F',
        'secondary-60': '#F55E55',
        'secondary-70': '#FF897E',
        'on-secondary-container': '#FFDAD5',

        // error 
        'error-70': '#FF897A',

        // background 
        'background-dark-300': '#5A617D',
        'background-dark-400': '#4B526A',
        'background-dark-600': '#3E3F4D',
        'background-dark-700': 'var(--background-700-dark)',
        'background-dark-800': 'var(--background-800-dark)',
        'background-dark-900': '#1D1C29',
        'background-dark': 'var(--background-900-dark)',

        // outlined button 
        'outlined-normal': 'var(--outlined-normal)',
        'gray-c4': '#C4C4C4'

      },
      boxShadow: {
        // ELEVATION DARK 
        'elevation-dark-1': 'var(--elevation-dark-1)',
        'elevation-dark-2': 'var(--elevation-dark-2)',
        'elevation-dark-3': 'var(--elevation-dark-3)',
        'elevation-dark-4': 'var(--elevation-dark-4)',
        'elevation-dark-5': 'var(--elevation-dark-5)',
        // ELEVATION light 
        'elevation-light-1': 'var(--elevation-light-1)',
        'elevation-light-2': 'var(--elevation-light-2)',
        'elevation-light-3': 'var(--elevation-light-3)',
        'elevation-light-4': 'var(--elevation-light-4)',
        'elevation-light-5': 'var(--elevation-light-5)',
      }
    }
  },
  plugins: [],
}