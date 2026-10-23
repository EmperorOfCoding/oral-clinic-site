/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './entry-*.jsx'],
  theme: {
    extend: {
      colors: {
        // Roxo / violeta: cor de marca (extraida da logo da Oral Clinic).
        // Uso restrito a CTAs, estados ativos e detalhes. Nao e a base visual.
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
        // Lavanda palida: superficies de descanso (fundos de secao alternados).
        lavanda: {
          50: '#fbf9fd',
          100: '#f5f1f8',
          200: '#ebe4f0',
          300: '#ddd2e5',
        },
        // Champagne / dourado: acento premium, uso pontual (fios, detalhes).
        champagne: {
          DEFAULT: '#c2a36b',
          light: '#e3d2ac',
          dark: '#a8884f',
        },
        // Plum escuro: cor de titulo e texto forte.
        ink: '#2a1538',
        // Grafite suave: texto corrido.
        graphite: '#4a4550',
        // Off-white clinico: fundo principal.
        cloud: '#fbfafc',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        // Sombras contidas: profundidade sutil, sem peso de "card flutuante".
        soft: '0 1px 2px rgba(42, 21, 56, 0.04), 0 8px 24px -16px rgba(42, 21, 56, 0.16)',
        card: '0 2px 4px rgba(42, 21, 56, 0.04), 0 18px 40px -24px rgba(42, 21, 56, 0.22)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      spacing: {
        4.5: '1.125rem',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
