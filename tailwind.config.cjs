/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,svelte}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',

      'red': '#f65351',
      'blue': '#0a317b',

      'white': '#ffffff',
      'very-light-grayish-blue': '#f7fafd',
      'lighter-grayish-blue': '#e5effa',
      'light-grayish-blue': '#dde7ee',
      'grayish-blue': '#939dae',
      'dark-grayish-blue': '#5e6778',
      'very-dark-blue': '#1c202b',
    },
    fontFamily: {
      'jakarta': ['Plus Jakarta', 'sans'],
      'jakarta-variable': ['Plus Jakarta Variable', 'sans'],
    },
  },
  plugins: [],
};
