/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f1f1f1',
          200: '#e2e8f0',
          300: '#d1d5db',
          400: '#Adb3bc',
          500: '#9b9b9b',
          600: '#868686',
          700: '#79747e',
          800: '#4d4d4d',
          900: '#1d1e20',
        },
        primary:{
          
          100: "#CFBCF2",
          200: "#A081D9",
          300: "#8662C7",
          400: "#724BB7",
          500: "#653CAD",
          600: "#51279B",
          700: "#421987",
          800: "#34126F",
          900: "#240754",
        }
      },
      screens: {
        '2xs': '320px',
        xs: '325px',
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
