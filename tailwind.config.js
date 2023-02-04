/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./src/components/**/*.{html,js,ts,jsx,tsx}", "./src/pages/**/*.{html,js,ts,jsx,tsx}", "./src/dist/**/*.{html,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      body: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'logo': "url('/src/assets/image-logo.png')"
      },
      colors: {
        'pink': '#FF4E60'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    "postcss-import",
    "tailwindcss",
    "autoprefixer"],
}