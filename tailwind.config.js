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
        primaryColor: "#00C2FF",
        secondColor:"#DD08FF"
      },
      fontFamily: {
        sans : ["Poppins" , "Sans-serif"]
      } ,
      container: {
        center : true,
        padding: {
          default:"1rem",
          sm:"10rem"
        }
      } 
    },
  },



  plugins: [require('flowbite/plugin')],
}