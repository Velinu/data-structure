/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'cursor': {
          '50%': { 
            borderColor: 'transparent',
          }
        },
        'typing': {
          from: { width: 0 }
        }
      },
      fontFamily: {
        'anonymous-pro': ['"Anonymous Pro"', 'monospace'],
      },
      
    },
  },
  plugins: [],
}

