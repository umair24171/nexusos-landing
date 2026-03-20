/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Terminal Luxury
        'nexus-dark':   '#000000',
        'nexus-darker': '#0D0D0D',
        'nexus-card':   '#0D0D0D',
        'nexus-border': '#1C1C1C',
        'nexus-muted':  '#555555',
        'nexus-text':   '#888888',
        // Accent
        'nexus-cyan':   '#00FFD1',
        'nexus-green':  '#00FF87',
        'nexus-red':    '#FF3B3B',
        'nexus-yellow': '#FFB800',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-geist)',      'system-ui',    'sans-serif'],
      },
      animation: {
        'live-blink':   'live-blink 1.5s ease-in-out infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'fade-in-up':   'fade-in-up 0.5s ease-out',
        'slide-up':     'slide-up 0.4s ease-out',
      },
      keyframes: {
        'live-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.1' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to':   { opacity: '1', transform: 'translateY(0)'    },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(12px)' },
          'to':   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      boxShadow: {
        'cyan-glow': '0 0 40px rgba(0, 255, 209, 0.15), 0 0 80px rgba(0, 255, 209, 0.06)',
        'cyan-sm':   '0 0 20px rgba(0, 255, 209, 0.12)',
      },
    },
  },
  plugins: [],
}
