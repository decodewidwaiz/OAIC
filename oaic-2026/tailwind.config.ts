import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50:  '#fdf6ee',
          100: '#f7e4c8',
          200: '#edc48a',
          300: '#e0a050',
          400: '#c97c2e',
          500: '#a85e1a',
          600: '#7c3f0e',
          700: '#5a2d09',
          800: '#3b1c05',
          900: '#1e0e02',
        },
        forest: {
          300: '#7db88a',
          400: '#4e9460',
          500: '#2e7044',
          600: '#1a5230',
          700: '#0e3620',
        },
        glow: {
          amber:  '#ffb347',
          gold:   '#ffd700',
          teal:   '#00e5c0',
          indigo: '#7b5ea7',
        },
        dark: {
          900: '#0d0d0d',
          800: '#141414',
          700: '#1c1c1c',
          600: '#252525',
          500: '#2f2f2f',
        },
        surface: '#1a1610',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['"Nunito"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-amber': '0 0 20px rgba(255, 179, 71, 0.4), 0 0 40px rgba(255, 179, 71, 0.15)',
        'glow-amber-sm': '0 0 10px rgba(255, 179, 71, 0.3)',
        'glow-teal': '0 0 20px rgba(0, 229, 192, 0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.7), 0 0 20px rgba(255, 179, 71, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('/textures/noise.png')",
        'earth-gradient': 'linear-gradient(135deg, #1e0e02 0%, #3b1c05 50%, #0d0d0d 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.7) 60%, #0d0d0d 100%)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 179, 71, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 179, 71, 0.8), 0 0 60px rgba(255, 179, 71, 0.3)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
