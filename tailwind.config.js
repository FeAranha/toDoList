/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray700: '#0D0D0D',
        gray600: '#1A1A1A',
        gray500: '#262626',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',
        gray100: '#F1F2F3',
        purple: '#8284FA',
        purpleDark: '#5E60CE',
        blue: '#4EA8DE',
        blueDark: '#1E6F9F',
        danger: '#E25858',
        
      },
      fontFamily: {
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}