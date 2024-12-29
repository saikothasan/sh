/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1F3C',
        secondary: '#00B4D8',
        light: '#FFFFFF',
        gray: '#F5F5F5',
      },
      spacing: {
        section: '32px',
      },
    },
  },
  plugins: [],
};