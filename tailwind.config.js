/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#00bf6d",
        perfecto: "#00bf6d",
        blueish:"#BEFBFF",
        mauv:"#1D1D35",
        header:"#00525D"
      },

        animation: {
          blob: "blob 7s infinite",
          up: "up 6s infinite"
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "tranlate(0px, 0px) scale(1)",
            },
          },
          up: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "50%": {
              transform: "translate(0px, -25px) scale(1)",
            },
            "10%": {
              transform: "translate(0px, 0px) scale(1)",
            },

          },
        },
      },
    },

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
