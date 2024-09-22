/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
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
      }
    },
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-brown':"#D98750"
    
    },
  },
  plugins: [],
}

