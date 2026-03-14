/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d0d0d',
          secondary: '#111111',
          card: '#161616',
          hover: '#1c1c1c',
        },
        accent: {
          primary: '#f5e642',
          secondary: '#d4c535',
          dim: 'rgba(245,230,66,0.08)',
        },
        py: {
          blue: '#3776ab',
          yellow: '#f5e642',
        },
        text: {
          primary: '#e8e8e8',
          secondary: '#8b8b8b',
          muted: '#555555',
        },
        border: {
          subtle: 'rgba(255,255,255,0.05)',
          accent: 'rgba(245,230,66,0.25)',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'scroll-down': 'scrollDown 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scrollDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' },
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
