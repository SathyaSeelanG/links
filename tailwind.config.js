/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'profile-load': 'profile-load 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};