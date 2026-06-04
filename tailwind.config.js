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
        linen:  {
          50:  '#fdfaf5',
          100: '#faf6ef',
          200: '#f3ebe0',
          300: '#e8dcd0',
          400: '#d9c9b8',
        },
        ink: {
          100: '#8c7b6e',
          200: '#6b5a4e',
          300: '#4e3d32',
          400: '#2e1f14',
          500: '#1a0f08',
        },
        orange: {
          DEFAULT: '#e07b39',
          light:   '#f4a262',
          pale:    '#fdf0e6',
          dark:    '#b85e1a',
        },
        // brand mint from logo
        mint: {
          DEFAULT: '#a8d5c8',
          dark:    '#4d9688',
        },
        sage: {
          50:  '#f4f7f4',
          100: '#e2ede2',
          500: '#5a9957',
          800: '#1e3a1e',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        hand:    ['"Caveat"', 'cursive'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'hero':  ['clamp(3.2rem,8vw,7rem)',   { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'title': ['clamp(2.2rem,5vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'sub':   ['clamp(1.4rem,3vw,2.2rem)', { lineHeight: '1.15' }],
      },
      boxShadow: {
        subtle: '0 1px 4px 0 rgba(46,31,20,0.07)',
        lifted: '0 8px 32px 0 rgba(46,31,20,0.10)',
        image:  '0 20px 60px 0 rgba(46,31,20,0.18)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
