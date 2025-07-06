/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2D6FFF',
        'primary-purple': '#A933FF',
        'brand-black': '#1E1E1E',
        'brand-white': '#FFFFFF',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #2D6FFF 0%, #A933FF 100%)',
        'brand-gradient-diag': 'linear-gradient(135deg, #2D6FFF 0%, #A933FF 100%)',
      },
    },
  },
  plugins: [],
}