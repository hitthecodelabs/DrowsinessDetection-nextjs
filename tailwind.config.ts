import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customBlue: '#007bff', // Example custom color
        primary: '#0056b3', // Example primary color
        secondary: '#6c757d', // Example secondary color
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Example: Using Open Sans as the primary sans-serif font
        // Add other font families as needed
      },
      spacing: {
        '72': '18rem', // Example: Adding a custom spacing value
        '84': '21rem',
        '96': '24rem',
        // Add other spacing values as needed
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        // Add or adjust breakpoints as needed
      },      
    },
  },
  plugins: [],
}
export default config
