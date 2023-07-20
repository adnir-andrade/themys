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
        'semi-transparent-black': 'RGBA(0,0,0, 0.5)',
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
        '3v': '3vmin',
        '4v': '4vmin',
        '5v': '5vmin',
      },
      dropShadow: {
        font: '2px 2px 2px rgba(0, 0, 0, 0.75)',
        title: '3px 2px 2px rgba(0, 0, 0, 0.9)',
        glow: '0px 0px 10px rgba(255, 255, 255, 0.75)',
      },
      backgroundImage: {
        dragons: "url('/assets/images/logo.jpg')",
      },
      animation: {
        'pulse-slow': 'vanish 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
      },
      keyframes: {
        vanish: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
      screens: {
        xsm: '200px',
      },
    },
  },
  plugins: [],
};
