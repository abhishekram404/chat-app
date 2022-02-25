module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#592EF2",
        purple2: "#6D49F2",
        purple3: "#8466F2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
