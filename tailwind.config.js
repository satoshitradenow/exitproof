/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#00D1FF',
          500: '#00BFFF',
        },
      },
    },
  },
  plugins: [],
};
