module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['bebas-kai', 'sans-serif'],
        body: ['bebas-kai', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        black: '#0F0D0D',
        white: '#E4E5F0',
        green: '#00FFBA',
      },
    },
  },
  plugins: [],
}
