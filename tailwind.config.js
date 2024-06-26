/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        herobg: "#254f1a",
        navbtn: "#eff0ec",
        herotext: "#d2e823",
        herobtn: "#e9c0e9",
        mobileMenu: "#43e660",
        createbg: "#e9c0e9",
        createtext: "#502274",
        sharebg: "#780016",
        analyzebg: "#f3f3f1",
      },
    },
  },
  plugins: [],
};
