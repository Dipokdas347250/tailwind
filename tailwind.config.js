

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      container:"1320px"
    },
    fontFamily: {
      'pops': ["Poppins", "sans-serif", ],
      
    },
    backgroundImage :{
      'ban':"url('/src/assets/banner.png')" ,
      'our':"url('/src/assets/Services1.png')" ,
      'our01':"url('/src/assets/Services2.png')" ,
      'our02':"url('/src/assets/Services3.png')" ,
      'ab':"url('/src/assets/about.png')" ,
      'bl01':"url('/src/assets/blog01.png')" ,
      'bl02':"url('/src/assets/blog02.png')" ,
      'bl03':"url('/src/assets/blog03.png')" ,
      
    },
    
  },
  plugins: [],
}