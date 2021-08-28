module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mitra: ["Mitra", "sens"],
        titr: ["Titr", "sens"],
        homa: ["Homa", "sens"],
        yekan: ["Yekan", "sens"],
        bahman: ["Bahman", "sens"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
