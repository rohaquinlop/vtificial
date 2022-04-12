module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    letterSpacing: {
      tight: '-.015em',
    },
    extend: {
      heigth: {
        'half-screen': '50vh'
      }
    }
  },
  plugins: []
}