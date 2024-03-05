/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/Icons/bg-image.jpg')",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
};
