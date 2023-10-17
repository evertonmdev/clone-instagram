/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#000000"
      },
      textColor: {
        "primary": "#f4f4f4"
      },
      fontFamily: {
        "primary": "SanFrancisco"
      },
      padding: {
        "primaryMobileY": "1.2rem",
        "primaryDesktopY": "2rem"
      }
    },
  },
  plugins: [],
}

