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
      },
    },

    colors: {
      "ocean": {
        50: '#e8f7ff',
        100: '#d5f0ff',
        200: '#b3e1ff',
        300: '#85caff',
        400: '#56a5ff',
        500: '#2f7fff',
        600: '#0c52ff',
        700: '#0047ff',
        800: '#0640cd',
        900: '#103e9f',
        950: '#0a225c',
      },
    }

  },
  plugins: [],

}

