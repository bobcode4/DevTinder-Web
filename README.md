# DEVTINDER-WEB


- created a (vite + react) application
- remove unnecessary code and write hello world


- Install Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

* tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

* index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

- Install daisyui
npm i -D daisyui@latest

* tailwind.config.js
module.exports = {
  //...
  plugins: [
    require('daisyui'),
  ],
}