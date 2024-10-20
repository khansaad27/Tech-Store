/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'Poppins': ['Poppins', 'serif'],
      // font-family: "Poppins", serif;
    },
    extend: {
      colors: {
        'blue': '#0156FF',
        'blueLight': '#01A4FF',

        'black': '#000000',
        'primary': '#A2A6B0',
      },
    },
  },
  plugins: [],
}