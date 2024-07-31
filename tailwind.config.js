/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors:{
            primaria: ' #3b82f6',
            fundo: '#bfdbfe',
            hover: '#708FCC',
            hoverb: '#46597F'
            },
           fontFamily: {
            poppins: ['Poppins', 'sans-serif'],
            'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
            'satoshi-Regular': ['Satoshi-Regular', 'sans-serif']
           }

    },
  },
  plugins: [],
}