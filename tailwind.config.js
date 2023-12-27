/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'translate-x-[-500%]',
    'translate-x-[-400%]',
    'translate-x-[-300%]',
    'translate-x-[-200%]',
    'translate-x-[-100%]',
    'translate-x-[0%]',
    'translate-x-[100%]',
    'translate-x-[200%]',
    'translate-x-[300%]',
    'translate-x-[400%]',
    'translate-x-[500%]',
    'h-[5rem]',
    'h-[10rem]',
    'w-[5rem]',
    'w-[10rem]',
    'translate-x-[0rem]',
    'translate-x-[-6.5rem]',
    'translate-x-[6.5rem]',
    'translate-y-[-3.75rem]',
    'translate-y-[-7.5rem]',
    'translate-y-[3.75rem]',
    'translate-y-[7.5rem]',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-click': 'spin 1.5s linear 1',
      }
    },
  },
  plugins: [],
}