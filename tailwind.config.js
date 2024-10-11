/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1A1A1A",
        "light-gray": "#818181",
        "dark-white": "#F2F1F0",
        "money-green": "#4BC2A3",
        "grid-gray": "#424242",
      },
      fontFamily: {
        "ibm-plex": [
          '"IBM Plex Mono"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
