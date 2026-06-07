/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'paper': '#F7F4ED',
        'paper-dark': '#1A1A1A',
        'ink': '#2C2C2C',
        'ink-light': '#E8E4DC',
        'cinnabar': '#C23A30',
        'cinnabar-light': '#D9534F',
        'indigo-custom': '#2E5C6E',
        'indigo-light': '#5A9AA8',
        'ink-gray-1': '#E8E4DC',
        'ink-gray-2': '#D4CFC4',
        'ink-gray-3': '#9E9A8E',
        'ink-gray-1-dark': '#333333',
        'ink-gray-2-dark': '#444444',
        'ink-gray-3-dark': '#666666',
      },
      fontFamily: {
        'serif-zh': ['Noto Serif SC', 'Songti SC', 'serif'],
        'wenkai': ['LXGW WenKai', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
