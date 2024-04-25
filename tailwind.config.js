/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGreen: '#ACE4A8',
        bgGreenAccent: '#ACE4A880',
        primary: '#00650A',
        secondary: '#A2D69E',
      }
    },
  },
  plugins: [],
}

