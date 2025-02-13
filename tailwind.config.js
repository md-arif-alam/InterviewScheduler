/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,PNG}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Montserrat"],
      },
    },
  },
  extend: {
    animation: {
      "loop-scroll": "loop-scroll 50s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
};
