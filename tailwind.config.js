/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1600px',
      '3xl': '2160px',
      '4xl': '2560'
    },
    colors: {
    orange: '#FFA500',
    white: '#FFFFFF',
    black: '#000000'
  },
    extend: {},
  },
  plugins: [],
}