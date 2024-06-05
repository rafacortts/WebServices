/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  

  
  theme: {
    extend: {
      colors: {
        customRed: '#EA1D2C',
      },
      fontFamily: {
        sans : ["Poppins" , "Sans-serif"]

      } ,
    },
  },



  plugins: [require('flowbite/plugin')],
}