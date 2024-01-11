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
    lightorange: '#ffb833',
    lightorange1: '#FBB917',
    lightorange2 : '#ffc966',
    white: '#FFFFFF',
    darkwhite: '#f2f2f2',
    black: '#000000',
    lightblack: '#262626',
    lightblack1: '#737373'
  },
    extend: {},
  },
  plugins: [],
}