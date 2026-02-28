/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#19334A',
        teal: '#568097',
        accent: '#C84824',
        background: '#F1F7FB',
      },
    },
  },
  plugins: [],
};
