/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // colors: {
      //   primary: "#FF6363",
      //   secondary: {
      //     100: "#E2E2D5",
      //     200: "#888883",
      //   },
      // },
      fontFamily: {
        baskerville: ['"Libre Baskerville"', "serif"],
        fjalla: ['"Fjalla One"', "sans-serif"],
      },
      // backgroundImage: (theme) => ({
      //   "hero-pattern": "url('/images/hero-pattern.svg')",
      //   "footer-texture": "url('/images/footer-texture.svg')",
      // }),
    },
  },
  plugins: [],
};
