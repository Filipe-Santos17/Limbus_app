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
        "yellow-limbus":"#FF9B32",
        "neutral-10":"#E9ECEF",
      },
      screens: {
        xl: { max: '1920px' },
        lg: { max: '1440px' },
        md2: { max: '1280px' },
        md: { max: '1024px' },
        sm: { max: '600px' },
      },
    },
  },
  plugins: [],
}