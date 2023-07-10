/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'scroll-pattern': "url('/public/assets/images/wallpaper-1.jpg')",
      },
    },
  },
  plugins: [],
};
