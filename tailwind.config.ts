import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf5f0',
          100: '#f5eae0',
          200: '#e8d4c4',
          300: '#d4a574',
          400: '#c4885f',
          500: '#8b4513',
          600: '#6f3410',
          700: '#5c2a0d',
          800: '#3d1c08',
          900: '#2a1205',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
