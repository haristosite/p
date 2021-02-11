const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
      mode:'layers',
      content:['index.html'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
            rose: colors.rose,
            teal: colors.teal,
            skyGreen:{
                100:'#D5FFDD',
                200:'#ACFFBE',
                300:'#85FFA4',
                400:'#11FFAA',
                500:'#2AF2AA',
                600:'#16CDA1',
                700:'#00AFAA',
                800:'#3588AA',
                900:'#4F7091',
            },
            metalGray:{
                100:'#D0FFFF',
                200:'#9EF1FF',
                300:'#19F2DF',
                400:'#71FFEE',
                500:'#44D1DF',
                550:'#11AFDF',
                600:'#4699CC',
                700:'#4177AA',
                800:'#355581',
                900:'#022B3A',
            }
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
