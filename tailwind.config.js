/** @type {import('tailwindcss').Config} */


module.exports ={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add any additional paths if necessary
    // "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],

  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      '2xl': '1140px', // Custom screen breakpoint
    },

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



