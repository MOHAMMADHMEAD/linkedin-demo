module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "sub": "rgba(0, 0, 0, 0.6)",
      },
      screens: {
        mobile: {
          max: "600px"
        },
      }
    },
  },
  plugins: [],
}
