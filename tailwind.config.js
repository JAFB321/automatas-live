/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGray': '#222222'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
