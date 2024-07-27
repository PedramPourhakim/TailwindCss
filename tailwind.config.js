/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors:{
        testColor: {
          100:"#49e659",
          932:"#434252"
        }
      }
    },
  },
  plugins: [],
}

