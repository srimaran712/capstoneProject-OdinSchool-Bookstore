/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors:{
        'primary-color':'#5F6FFF',
        'font-color':'#1F2937;',
        'white-color':'#FFFFFF',
        'grey-color':"#ADADAD"
    },
    backgroundColor:{
      'primary-color':'#5F6FFF',
      
    },
    fontFamily:{
      Montserrat:['Montserrat','sans-serif'],
      Roboto:["Roboto",'sans-serif'],
      Poppins:['Poppins','sans-serif']
    },
    padding:{
        '20p':'20%'
    },
    width:{
       '20w':'20%'
    }
    },
  },
  plugins: [],
}

