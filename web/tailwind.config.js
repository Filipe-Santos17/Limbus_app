const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./screens/**/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        "black-10":"#00070F",
        "black-20":"#1C1309",
        "neutral-10":"#E9ECEF",
        "neutral-20":"#61686D",
        "white-bg":"#FAFAFA",
        "yellow-limbus-dark":"#F4801F",
        "yellow-limbus-white":"#FF9B32",
      },
      screens: {
        xl: { max: '1920px' },
        lg: { max: '1440px' },
        md2: { max: '1280px' },
        md: { max: '1024px' },
        sm: { max: '600px' },
      },
      width:{
        "sidebar-width":"5.5rem",
        "sidebar-width-open":"21.25rem"
      }
    },
  },
  plugins: []
}