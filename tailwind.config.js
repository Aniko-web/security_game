/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#070B14',
          navy: '#0B1222',
          surface: '#0F172A',
          card: 'rgba(15, 23, 42, 0.75)',
          gold: '#D4AF37',
          goldLight: '#F59E0B',
          emerald: '#10B981',
          danger: '#EF4444',
          cyan: '#06B6D4',
          border: 'rgba(51, 65, 85, 0.45)',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace', 'ui-monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyber-gold': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'cyber-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'cyber-danger': '0 0 25px -5px rgba(239, 68, 68, 0.3)',
        'card-depth': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
