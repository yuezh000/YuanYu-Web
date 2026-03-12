/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(53, 149, 255)',
          dark: 'rgb(30, 120, 230)',
          light: 'rgb(100, 175, 255)',
        },
      },
    },
  },
  plugins: [],
};
