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
            },
            code: {
              padding: '0.1rem',
              borderRadius: '0.85em',
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
