/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glitter: {
          "0%, 100%": {
            color: "#fff",
            filter: "blur(2px)",
            textShadow:
              "0 0 10px #FFDF00, 0 0 20px #FFDF00,0 0 10px #FFDF00,0 0 40px #FFDF00,0 0 80px #FFDF00,0 0 120px #FFDF00,0 0 200px #FFDF00,0 0 300px #FFDF00, 0 0 400px #FFDF00",
          },
          "25%, 75%": {
            color: "#000",
            filter: "blur(0px)",
            textShadow: "none",
          },
        },
      },
      keyframes: {
        mover: {
          "0%": { transform: "translateY(-35px)" },
          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        mover : 'mover 3s infinite alternate',
      },
      keyframes: {
        mover2: {
          "0%": { transform: "translateY(-30px)" },
          "100%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        mover2 : 'mover2 3s infinite alternate',
      },
    },
  },
  plugins: [],
};
