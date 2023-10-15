/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      rotate: {
        '90': '270deg',
      },
      backgroundImage: {
        'hero': "url('https://www.wallpapers.net/cool-pokemon-hd-wallpaper/download/3840x2160.jpg')",
      },
    },
  },
  plugins: [],
}

