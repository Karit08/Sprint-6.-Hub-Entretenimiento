/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1750px',
        '4xl': '1920px',// Agregamos un breakpoint personalizado
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        BaskervvilleSC: ['Baskervville SC', 'serif'],
      },
    },
  },
  plugins: [],
};
