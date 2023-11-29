/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  theme: {
    colors: {
      'blue': '#153d6c',
      'white': '#ffffff',
      'yellow': '#EFB810',
      'gray': '#EDEDED',
    }
  },
  plugins: [require("daisyui")],
}
