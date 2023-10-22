/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.jsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        "primary": "#000000",
        "primaryWhiteMode": "#FFFFFF"
      },
      textColor: {
        "primary": "#f4f4f4",
        "primaryWhiteMode": "#000000"
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

