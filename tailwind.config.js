/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', 'sans-serif'],
        cedarville: ['"Cedarville Cursive"', 'cursive'], 
        charm: ['"Charm"', 'cursive'], 
      },
      colors: {
        'gray-light': '#e7eaf6',
        'gray-medium': '#a2a8d3',
        'gray-dark': '#38598b',
        'gray-verydark': '#113f67',
        'blue-light': '#dbeafe', 
        'blue-medium': '#3b82f6', 
        'blue-dark': '#1e40af', 
        'blue-verydark': '#0f172a', 
      },
      cursor: {
        warning: 'url(/path-to-warning-cursor.png), pointer', // Custom warning cursor
      },
    },
  },
  plugins: [],
};



