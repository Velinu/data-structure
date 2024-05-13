/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'banner': `background: rgb(42,0,72);
                  background: -moz-linear-gradient(180deg, rgba(42,0,72,1) 21%, rgba(0,0,0,1) 70%);
                  background: -webkit-linear-gradient(180deg, rgba(42,0,72,1) 21%, rgba(0,0,0,1) 70%);
                  background: linear-gradient(180deg, rgba(42,0,72,1) 21%, rgba(0,0,0,1) 70%);
                  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2a0048",endColorstr="#000000",GradientType=1);`
      },
      backgroundImage:{
        'banner': 'url("assets/banner.svg")'
      },
      fontFamily: {
        'anonymous-pro': ['Anonymous Pro', 'monospace'],
      },
      colors: {
        'primary': '#00C2FF',
        'secondary': '#008F11',
        'tertiary': '#00FF41',
      }
    },
  },
  plugins: [],
}

