/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(90deg, rgba(6, 35, 73, 0.64) 16.84%, rgba(24, 141, 249, 0.00) 60.2%)",
      },
      colors: {
        primary: "#17ABFF",
      },
      borderRadius: {
        btn: "5px",
        base: "14px",
      },
    },
    boxShadow: {
      "custom-shadow": "0px 14px 34px -10px rgba(126, 126, 126, 0.35)",
    },
    screens: {
      sp: "350px",
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // 2X Extra large devices
    },
  },
  plugins: [],
};
