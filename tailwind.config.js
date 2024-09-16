// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure the paths match your project structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
