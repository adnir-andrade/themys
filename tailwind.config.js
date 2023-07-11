/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'scroll-pattern': "url('/public/assets/images/wallpaper-1.jpg')",
      },
      width: {
        248: '248px',
      },
      height: {
        90: '90px',
      },
      colors: {
        'almost-black': '#3B3634',
        'dark-sepia': '#cfbe86',
      },
      borderRadius: {
        60: '60px',
        20: '20px',
      },
      boxShadow: {
        4: '0px 4px 4px rgba(0, 0, 0, 0.5)',
      },
      fontSize: {
        '4v': '4vmin',
      },
      dropShadow: {
        font: '1px 2px 1px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
