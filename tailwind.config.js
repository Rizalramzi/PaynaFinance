/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens : {
        md : "834px",
        lg : "1512px" 
      }
    },
  },
  plugins: [],
}

