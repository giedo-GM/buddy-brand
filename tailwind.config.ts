import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F2EDE6',
          secondary: '#E7E1D8',
          tertiary: '#DDD7CE',
        },
        border: {
          DEFAULT: 'rgba(27,27,27,0.08)',
          hover: 'rgba(27,27,27,0.18)',
        },
        text: {
          primary: '#1B1B1B',
          secondary: '#5D5A54',
          tertiary: '#8C6239',
        },
        accent: {
          DEFAULT: '#8C6239',
          hover: '#7A5530',
        },
        success: '#2E7D5B',
      },
      fontFamily: {
        display: ['var(--font-body)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        section: 'clamp(7.5rem, 12vw, 10rem)',
      },
      borderRadius: {
        card: '20px',
        button: '999px',
        input: '16px',
      },
    },
  },
  plugins: [],
}
export default config
