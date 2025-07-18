/* eslint-env node */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/**/*.{ts,tsx,js,jsx}", // include UI
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
