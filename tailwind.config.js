/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        book: '0 1px 1px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1), 0 8px 8px rgba(0,0,0,0.1)',
        'book-side': 'inset -2px 0 5px rgba(0,0,0,0.2)',
        'book-page': '0 0 5px rgba(0,0,0,0.1)',
        'book-cover': '-5px 5px 10px rgba(0,0,0,0.2)',
      },
      backgroundImage: {
        'paper-texture':
          'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)',
        'leather-texture':
          'repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 2px, transparent 2px, transparent 4px)',
      },
      backgroundSize: {
        paper: '20px 20px',
        leather: '8px 8px',
      },
      transformOrigin: {
        'left-center': '0% 50%',
        'right-center': '100% 50%',
      },
    },
  },
  plugins: [],
}
