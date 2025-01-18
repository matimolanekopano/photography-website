/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        abril: ['"Abril Fatface"', 'cursive'],
        sourceSerif: ['"Source Serif 4"', 'serif'],
        cormorant: ['"Cormorant"', 'serif'],
        greatVibes: ['"Great Vibes"', 'cursive'],
        oldStandard: ['"Old Standard TT"', 'serif'],
        ballet: ['Ballet', 'serif'],
        imperialScript: ['Imperial Script', 'cursive'],
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

