/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1140px',
      '2xl': '1140px'
    },
    // fontFamily: {
    //   'Jost': ['Jost', 'sans-serif'],
     
    // },
    extend: {
      colors: {
        primary: "#FFA600",
        dark: "#1B2559",
        light: "#68769F"
      }
    },
  },  
  plugins: [],
}



