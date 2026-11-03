// Palette sampled visually from the supplied Tisha Cafe logo.
// Sage-500 and coffee-500 are the closest working matches; other steps add UI contrast.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Balsamiq Sans', 'system-ui', 'sans-serif'],
        serif: ['Balsamiq Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f7f8f4', 100: '#eeefe7', 200: '#dfe1d3', 300: '#cbcebc',
          400: '#b5b9a4', 500: '#a4a893', 600: '#858a74', 700: '#686e5a',
          800: '#505545', 900: '#393d32', 950: '#23261e',
        },
        coffee: {
          50: '#faf7f3', 100: '#f1e9df', 200: '#e2d3c0', 300: '#cbb69d',
          400: '#a98e72', 500: '#79644e', 600: '#67533f', 700: '#534333',
          800: '#42362a', 900: '#30271f', 950: '#1d1712',
        },
        cream: {
          50: '#ffffff', 100: '#fffefd', 200: '#fcfaf6', 300: '#f7f3eb',
          400: '#eee7db', 500: '#e5dbca', 600: '#cfc1ac', 700: '#a99a84',
          800: '#817361', 900: '#5b5145', 950: '#363029',
        },
        // Neutral surfaces and text for the dark theme.
        night: {
          50: '#f4f4ef', 100: '#e6e6dc', 200: '#cbccbf', 300: '#a9ab9d',
          400: '#85887b', 500: '#676b60', 600: '#4e5349', 700: '#393e36',
          800: '#292e28', 900: '#1c211d', 950: '#111612',
        },
      },
    },
  },
  plugins: [],
}
