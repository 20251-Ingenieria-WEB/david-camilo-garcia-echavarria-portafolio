module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        //Colores de la app
        background: '#f0f0f6',
        surface: '#ffffff',
        primary: '#ffb400',
        secondary: '#767676',
        accent: '#7eb942',
        'text-main': '#2b2b2b',
        'text-muted': '#a0a0a0',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
