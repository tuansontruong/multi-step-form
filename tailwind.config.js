/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#fc6c4b',
        'gray': '#6a7280',
        'gray-light': '#d1d5db'
      },
    },
  },
  plugins: [],
}