/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0b0e1a',
          secondary: '#0f1221',
          card: '#131729',
          hover: '#1a2038',
        },
        accent: {
          primary: '#ff6b35',
          secondary: '#e55a25',
          dim: 'rgba(255,107,53,0.10)',
        },
        text: {
          primary: '#e8eaf0',
          secondary: '#8892a4',
          muted: '#4a5568',
        },
        border: {
          subtle: 'rgba(255,255,255,0.06)',
          accent: 'rgba(255,107,53,0.28)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scroll-down': 'scrollDown 1.5s ease-in-out infinite',
        'bg-shift': 'bgShift 12s ease-in-out infinite alternate',
        'aurora': 'aurora 16s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' },
        },
        bgShift: {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        aurora: {
          '0%':   { transform: 'translate(-10%, -10%) scale(1)',   opacity: '0.4' },
          '33%':  { transform: 'translate(10%, 5%) scale(1.15)',   opacity: '0.6' },
          '66%':  { transform: 'translate(-5%, 15%) scale(0.95)',  opacity: '0.5' },
          '100%': { transform: 'translate(8%, -5%) scale(1.1)',    opacity: '0.4' },
        },
      },
      backgroundImage: {
        'dot-pattern': 'radial-gradient(rgba(245,230,66,0.06) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(rgba(245,230,66,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,230,66,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-sm': '28px 28px',
        'grid-sm': '40px 40px',
      },
    },
  },
  plugins: [],
};
