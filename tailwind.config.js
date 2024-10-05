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
        primary: "#131118", // Custom primary color
        dark: "#1B2559",    // Custom dark color
        light: "#68769F",   // Custom light color
      },
      // You can uncomment font settings if needed
      fontFamily: {
        Jost: ['Jost', 'sans-serif'],
      },
    },
  },

  // Uncomment if you're using plugins like Flowbite
  // plugins: [
  //   require('flowbite/plugin')
  // ],
};
