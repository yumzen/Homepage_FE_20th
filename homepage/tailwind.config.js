/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      fontFamily:{
        'pretendard':['pretendard'],
        'Salvar':['Salvar'],
        'Gotham':['Gotham'],
        'GothamBold':['Gotham bold'],
        'GothamItalic':['Gotham bold italic']
      },

      colors: {
        "ocean": '#281CFF',
      },
  
      screens: {
        'm': '1080px',
      }

    },


  },
  plugins: [],

}

