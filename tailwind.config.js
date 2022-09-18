/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      'sm': {'max':'640px'},
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }


      // sm:'480px',
      // md:'768px',
      // lg:'976px',
      // xl:'1440px'
    },
    extend: {
      colors:{
        brightRed: 'hsl(10, 85%, 55%)',
        brightRedLight: 'rgba(255, 47, 47, 0.985)',
        brightRedSupLight: 'rgba(255, 151, 151, 0.985)',
        darkBlue: 'rgba(4, 1, 106, 0.985)',
        darkGrayishBlue: 'rgba(37, 36, 55, 0.485)',
        veryDarkBlue: 'rgba(1, 1, 17, 0.985)',
        veryPaleRed: 'rgba(255, 209, 209, 0.985)',
        veryLightGray: 'rgb(249, 247, 247)'
      }
    },
  },
  plugins: [],
}
