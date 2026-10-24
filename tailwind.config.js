/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#FAF0F2',
          100: '#F5DEE3',
          200: '#EABDC6',
          300: '#DC96A4',
          400: '#C7677C',
          500: '#7B1935',
          600: '#681D32',
          700: '#561628',
          800: '#4A1427',
          900: '#380D1D',
          DEFAULT: '#681D32',
          dark: '#7B1935',
          wine: '#4A1427',
        },
        rose: {
          muted: '#A76B70',
          blush: '#D6AAA2',
          soft: '#F1E2DE',
          border: '#E7D5D0',
        },
        gold: {
          50: '#FAF7EE',
          100: '#F5EDD7',
          200: '#EBDCB0',
          300: '#DEC788',
          400: '#DCC58D',
          500: '#C8AA68',
          600: '#B8974E',
          700: '#9B7C37',
          800: '#7F6429',
          900: '#5F4A1C',
          DEFAULT: '#C8AA68',
          champagne: '#C8AA68',
          soft: '#DCC58D',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FFF9F3',
          200: '#F7F0E8',
          300: '#E7D5D0',
          400: '#D6AAA2',
          DEFAULT: '#FFF9F3',
        },
        cream: {
          DEFAULT: '#F7F0E8',
        },
        blush: {
          DEFAULT: '#F1E2DE',
          dusty: '#D6AAA2',
          border: '#E7D5D0',
        },
        charcoal: {
          DEFAULT: '#30242A',
          light: '#76666B',
          secondary: '#76666B',
        },
        taupe: {
          DEFAULT: '#76666B',
          light: '#A76B70',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C8AA68 0%, #DCC58D 50%, #C8AA68 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #681D32 0%, #4A1427 100%)',
        'hero-overlay': 'linear-gradient(105deg, rgba(74,20,39,0.88) 0%, rgba(104,29,50,0.70) 45%, rgba(167,107,112,0.28) 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(200, 170, 104, 0.25)',
        'burgundy': '0 4px 20px rgba(104, 29, 50, 0.25)',
        'luxury': '0 8px 30px rgba(74, 20, 39, 0.08)',
        'card': '0 2px 16px rgba(74, 20, 39, 0.05)',
      },
    },
  },
  plugins: [],
}
