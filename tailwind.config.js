/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#F3EFF9',
        'text-primary': '#312E35',
        'text-secondary': '#716C7A',
        accent: '#8C6EB7',
        'accent-muted': '#ACA4BC',
      }
    },
  },
  plugins: [],
}