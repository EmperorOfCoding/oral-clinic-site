/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './entry-*.jsx'],
  theme: {
    extend: {
      colors: {
        // Roxo / violeta: cor de marca (extraida da logo da Oral Clinic)
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        // Lilas / orquidea suave de apoio (brilhos e realces)
        aqua: {
          50: '#fdf6ff',
          100: '#f8eaff',
          200: '#efd4ff',
          300: '#e0b3fb',
          400: '#cd8ef5',
          500: '#b566ec',
        },
        // Champagne / dourado: acento premium (uso pontual)
        champagne: {
          DEFAULT: '#c2a36b',
          light: '#e3d2ac',
          dark: '#a8884f',
        },
        // Tom de tinta para títulos (plum escuro)
        ink: '#2a1538',
        cloud: '#faf8fc',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px -24px rgba(42, 21, 56, 0.22)',
        card: '0 24px 60px -30px rgba(42, 21, 56, 0.30)',
        glow: '0 0 0 1px rgba(168, 85, 247, 0.10), 0 20px 60px -28px rgba(147, 51, 234, 0.40)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      spacing: {
        4.5: '1.125rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.92)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
