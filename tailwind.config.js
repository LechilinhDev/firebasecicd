/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/image/banner-website-techmaster.jpg')",
      },
      colors: {
        'primary-text': '#0C5ADB',
        'secondary-color': '#D9D9D9',
        'color-column':'#F0F3F4'
      },
      body:{
        'border-top': 'none !important'
      }
    },
  },
  plugins: [],
}

