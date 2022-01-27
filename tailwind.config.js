const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      cyan: colors.cyan,
      white: colors.white,
    },
    extend: {
      gridTemplateColumns: {
        main: '300px 1fr',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
