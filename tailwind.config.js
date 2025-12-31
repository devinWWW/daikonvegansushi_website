/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2D5016',
        'secondary-coral': '#D33A05',
        'secondary-coral-dark': '#A02A00',
        'accent-gold': '#D4AF37',
        'neutral-cream': '#FEF7ED',
        'dark-green': '#1A3409',
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
