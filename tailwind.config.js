/** @type {import('tailwindcss').Config} */
const colors = require('./src/colors');
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [
        ...generateSafelist('bg-gradient-to-tr', 'from', '400/90'),
        ...generateSafelist('bg-gradient-to-tr', 'to', '800/90'),
        ...generateSafelist('bg-gradient-to-tr', 'dark:from', '600/90'),
        ...generateSafelist('bg-gradient-to-tr', 'dark:to', '900/90'),
        ...generateSafelist('bg-gradient-to-tr', 'from', '600'),
        ...generateSafelist('bg-gradient-to-tr', 'from', '700'),
        ...generateSafelist('bg-gradient-to-tr', 'to', '900'),
        ...generateSafelist('', 'dark:border', '500'),
        ...generateSafelist('', 'border', '800'),
        ...generateSafelist('', 'hover:border', '800'),
        ...generateSafelist('', 'dark:hover:border', '500'),
        ...generateSafelist('', 'text', '800'),
        ...generateSafelist('', 'dark:text', '500'),
      ],
    },
  },
  content: [],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],

}

function generateSafelist(prefix, infix, suffix) {
  return colors.map(color => `${prefix} ${infix}-${color}-${suffix}`);
}