/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "rgb(42, 42, 42)",
      },
      boxShadow: {
        'custom-light': '0 2px 4px rgba(0, 0, 0, 0.1', 
      },
      backgroundImage: {
        'custom-image': "url('')",
      },
    },
  },
  plugins: [],
};

