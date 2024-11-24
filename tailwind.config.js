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
        'F5': '#F5F7FF',
        'color-5': '#A2A6B0',
        'color-6': '#CACDD8',
        'color-8': '#C94D3F',
        'color-9': '#78A962',
        'color-10': '#666666',


      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}