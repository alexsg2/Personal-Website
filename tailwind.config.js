/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#987ee7',
        'brand-hover': '#5F009C',
      },
    },
  },
  plugins: [],
};
