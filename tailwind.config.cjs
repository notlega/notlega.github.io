/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        text: {
          light: '#07090e',
          dark: '#f1f3f8'
        },
        background: {
          light: '#f9fafc',
          dark: '#0f141a'
        },
        primary: {
          light: '#5c6fa6',
          dark: '#596ba1'
        },
        secondary: {
          light: '#cda6ce',
          dark: '#583159'
        },
        accent: {
          light: '#bc86a5',
          dark: '#7a4362'
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
