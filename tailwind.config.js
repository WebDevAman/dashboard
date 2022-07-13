/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeLightBlue': '#E3F2FD',
        'themeBorderBlue': '#b3ddfc',
        'themeDarkBlue': '#1E88E5',
        'themeDarkPurple': '#1E88E5',
        'themePurple': '#5E35B1',
        'themeLightPurple': '#7d4ede',
        'themeDarkPurple': '#4527A0',
        'themeBlue': '#1E88E5',
        'themeDarkBlue': "#1565C0",
        'themeLightGolden': '#FFF8E1',
        'themeGolden': '#FFC107'
      }
    },
  },
  plugins: [],
}
