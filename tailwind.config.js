/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dodge-b': '#1e90ff',
        'dodge-d': '#0382ff',
        'sky-b': '#00AEF0',
        bgback: '#E4E9F7',
        blue: {
          main: '#1a6ff2',
          dark: '#11101d',
        },
        grey: {
          main: '#e5e5e5',
          dark: '#555c66',
          light: '#bdbdbd',
          bg: '#e4e9f7',
        },
        green: {
          main: '#157207',
        },
        cyan: {
          main: '#2cccc4',
        },
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'scale(.95)' } },
        fadeOut: { to: { opacity: 0, transform: 'scale(.95)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.1s ease-out',
        fadeOut: 'fadeOut 0.15s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
