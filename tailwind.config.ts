import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#fad1d9',
          300: '#f7a8b8',
          400: '#f27591',
          500: '#C41102',
          600: '#C41102',
          700: '#9D0D01',
          800: '#7A0A01',
          900: '#5C0801',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#00A8E8',
          600: '#00A8E8',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
