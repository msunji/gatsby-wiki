const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      red: colors.red,
      white: colors.white,
      indigo: colors.indigo,
    },

    extend: {
      gridTemplateColumns: {
        main: '300px 1fr',
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              paddingTop: '0',
              marginTop: '3rem',
              marginBottom: '3rem',
              overflowX: 'visible',
              whiteSpace: 'pre-wrap',
            },
            code: {
              borderRadius: '0.3em',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              marginLeft: '0.2rem',
              marginRight: '0.2rem',
              paddingTop: '0.3rem',
              paddingBottom: '0.3rem',
              color: colors.indigo[700],
              backgroundColor: colors.slate[100],
              '&::before': {
                content: 'none !important',
              },
              '&::after': {
                content: 'none !important',
              },
            },
          },
        },
      },
    },
  },
  important: 'html',
  plugins: [require('@tailwindcss/typography')],
};
