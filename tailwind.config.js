/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs:  '480px',
      sm:  '640px',
      md:  '768px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        espresso: {
          950: '#0d0805',
          900: '#1a1008',
          800: '#2c1a0e',
          700: '#3d2514',
          600: '#4f311b',
        },
        // pulled directly from Fat Cat Bakery logo colours
        brand: {
          orange: '#e07b39',   // logo cat outline
          'orange-light': '#f4a262',
          'orange-dark':  '#b85e1a',
          mint:   '#a8d5c8',   // "Fat Cat" script text in logo
          'mint-light': '#c8e8e0',
          grey:   '#585858',   // logo background square
        },
        caramel: {
          100: '#fef3e2',
          200: '#fde0b0',
          300: '#f9c06a',
          400: '#e07b39',   // synced to brand orange
          500: '#c5651a',
          600: '#9e4a0e',
        },
        cream: {
          50:  '#fffdf7',
          100: '#fdf8ed',
          200: '#f8efd6',
        },
        sage: {
          400: '#a8d5c8',   // synced to brand mint
          500: '#7ab8ab',
          600: '#4d9688',
          900: '#1a3330',
        },
        dust: '#c4a882',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.8rem,8vw,6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,5vw,3.75rem)',  { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem,4vw,2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        glow:   '0 0 40px 0 rgba(224,123,57,0.30)',
        'glow-sm': '0 0 16px 0 rgba(224,123,57,0.20)',
        glass:  '0 8px 32px 0 rgba(0,0,0,0.45)',
        lift:   '0 20px 60px 0 rgba(0,0,0,0.4)',
        inset:  'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        'radial-warm': 'radial-gradient(ellipse at 60% 0%, rgba(224,123,57,0.14) 0%, transparent 60%)',
        'radial-amber': 'radial-gradient(ellipse at 30% 100%, rgba(168,213,200,0.08) 0%, transparent 55%)',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'shimmer':   'shimmer 2.2s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'pulse-glow':'pulseGlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: 0, transform: 'translateY(24px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        shimmer:   { from: { backgroundPosition: '-200% 0' }, to: { backgroundPosition: '200% 0' } },
        float:     { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(224,123,57,0.2)' }, '50%': { boxShadow: '0 0 40px rgba(224,123,57,0.5)' } },
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
    },
  },
  plugins: [],
}
