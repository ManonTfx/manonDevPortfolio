/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        darkMode: '#2D2A2A',
        textColor: '#413B3B',
        darkBackground: '#262020',
        pink: '#d02e86',
        orange: '#fc9700',
        green: '#0fb87b',
      },
      borderRadius: {
        default: '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
