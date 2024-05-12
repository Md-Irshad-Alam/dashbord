/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      text_bold: 'Segoe UI Bold',
      text_ittelic: 'Segoe UI Italic',
      reguler: 'Segoe UI Regular',
    },
    screens: {
      mobole: '320px',
      tablet: '640px',

      laptop: '1024px',

      desktop: '1280px',
    },

    backgroundImage: {},
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
