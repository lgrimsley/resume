/** @type {import('tailwindcss').Config} */
const colors = require('./src/colors');
module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [
        // Generate a safelist for bg-gradient-to-tr from-X-600 to-X-900 for each color
        ...generateSafelist('bg-gradient-to-tr', 'from', '600'),
        ...generateSafelist('bg-gradient-to-tr', 'from', '700'),
        ...generateSafelist('bg-gradient-to-tr', 'to', '900'),
        ...generateSafelist('border', 'border', '600'),
        ...generateSafelist('border', 'border', '700'),
        ...generateSafelist('', 'text', '800'),
        ...generateSafelist('', 'text', '500'),
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