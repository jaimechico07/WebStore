/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary_white: '#fff',
        primary_black: '#000000',
        primary_yellow: '#ffc700',
        primary_green: '#10a958',
        primary_lilac: '#C7B9FF',
      },

      fontFamily: {
        'sans-whyteinktrap': ['whyteinktrap', "'sans-serif'"],
      },

      fontSize: {
        'dynamic-h1': 'clamp(1rem, 0.8261rem + 0.8696vw, 1.5rem)',
        'dynamic-h2': 'clamp(1.5rem, 0.7473rem + 4.3011vw, 3.5rem)',
        'dynamic-h3': 'clamp(1rem, 0.2796rem + 2.6882vw, 2rem)',
        'dynamic-detailName': 'clamp(1rem, 0.9091rem + 1.7045vw, 1.5rem);',
        'dynamic-detailText': 'clamp(0.75rem, 0.7727rem + 1.1364vw, 1.2rem);',
        'dynamic-cardName': 'clamp(0.875rem, 0.5909rem + 1.4205vw, 1.5rem)',
        'dynamic-banner': 'clamp(0.75rem, 0.4677rem + 1.6129vw, 1.5rem)',
        'dynamic-description': 'clamp(1rem, 0.7177rem + 1.6129vw, 1.2rem)',
        'dynamic-subDescription': 'clamp(0.75rem, 0.2796rem + 2.6882vw, 2rem)',
      },
    },
  },
  plugins: [],
};
