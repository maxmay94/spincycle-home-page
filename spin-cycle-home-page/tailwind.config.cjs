/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gloock': ['Gloock', 'serif'],
        'vollkorn': ['Vollkorn', 'serif'],
      },
      backgroundImage: {
        'shallow-depth-cover': "url(../images/shallow-depth-cover.jpeg)"
      }
    },
  },
  plugins: [],
}