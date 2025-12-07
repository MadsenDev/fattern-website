/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        brandCore: {
          deep: '#0d3e51',
          base: '#2f8981',
          lift: '#67b999',
        },
        brand: {
          50: '#f0f8f5',
          100: '#e1f1eb',
          200: '#c2e3d6',
          300: '#a4d5c2',
          400: '#82b8b3',
          500: '#59a19a',
          600: '#2f8981',
          700: '#1b5c64',
          800: '#144d5b',
          900: '#0d3e51',
          950: '#041318',
        },
        ink: '#0d3e51',
        'ink-soft': '#3d6574',
        'ink-subtle': '#6e8b97',
        accent: '#2f8981',
        moss: '#67b999',
        cloud: '#f0f8f5',
        mist: '#e1f1eb',
        sand: '#d5e7e6',
        foam: '#a4d5c2',
        tide: '#82b8b3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Soehne"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(13, 62, 81, 0.12)',
      },
    },
  },
  plugins: [],
}
