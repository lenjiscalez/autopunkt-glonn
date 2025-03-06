/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E30613', // Red
          dark: '#B8050F',
          light: '#FF3341',
        },
        secondary: {
          DEFAULT: '#1C1C1C', // Almost black
          light: '#333333',
          lighter: '#666666',
        },
        accent: {
          DEFAULT: '#8A8D8F', // Metallic gray
          light: '#D1D5DB',
          dark: '#4B5563',
        },
        background: {
          DEFAULT: '#FFFFFF',
          alt: '#F9FAFB',
          dark: '#111111',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary.lighter'),
            h1: {
              color: theme('colors.secondary.DEFAULT'),
            },
            h2: {
              color: theme('colors.secondary.DEFAULT'),
            },
            h3: {
              color: theme('colors.secondary.DEFAULT'),
            },
            strong: {
              color: theme('colors.secondary.DEFAULT'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.dark'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};