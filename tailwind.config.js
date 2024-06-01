/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '375px',
        'xsm':'425px',     
        'sm': '540px',     
        'xmd': '680px',     
        'md': '768px',    
        'xxl': '900px',    
        'xl': '1024px',   
        '2xl': '1200px',
        '3xl':'1440px',   
      },
    },
  },
  plugins: [],
}

