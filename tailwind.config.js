/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line tells Tailwind to look for class names in all JS, JSX, TS, and TSX files in the src directory
  ],
  ttheme: {
  extend: {
    colors: {
      customGreen: '#32a852',
    },
  },
},
  plugins: [
  require('@tailwindcss/forms'),
  require('@tailwindcss/typography'),
],
};
