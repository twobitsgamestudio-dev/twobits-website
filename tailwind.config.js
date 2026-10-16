export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: '#0b0b10',
        accent: {
          DEFAULT: '#7a1fff',
          soft: '#f1eaff',
        },
        line: '#ebebf0',
        field: '#dcdce4',
        danger: '#b42318',
        canvas: '#eef1f5',
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
