import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'energy-flow': 'energyFlow 3s ease-in-out infinite',
        'power-up': 'powerUp 1s ease-out forwards',
        'kamehameha': 'kamehameha 2s ease-in-out infinite',
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
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#3b82f6' }
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 200, 0, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(255, 200, 0, 1)',
            transform: 'scale(1.05)'
          },
        },
        energyFlow: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
          },
          '50%': { 
            backgroundPosition: '100% 50%',
          },
        },
        powerUp: {
          '0%': { 
            transform: 'scale(0.8) rotate(0deg)',
            opacity: '0'
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)',
            opacity: '1'
          },
          '100%': { 
            transform: 'scale(1) rotate(360deg)',
            opacity: '1'
          },
        },
        kamehameha: {
          '0%, 100%': { 
            transform: 'translateX(0) scale(1)',
            filter: 'brightness(1)'
          },
          '25%': { 
            transform: 'translateX(-5px) scale(0.95)',
            filter: 'brightness(0.8)'
          },
          '50%': { 
            transform: 'translateX(0) scale(1.1)',
            filter: 'brightness(1.5)'
          },
          '75%': { 
            transform: 'translateX(5px) scale(0.95)',
            filter: 'brightness(0.8)'
          },
        }
      }
    },
  },
  plugins: [],
}
export default config