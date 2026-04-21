/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        background: "#fff9e3",
        foreground: "#081126",
        card: "#fff8e7",
        muted: "#f6eecf",
        primary: "#081126",
        accent: "#ea7a53",
        success: "#16a34a",
        destructive: "#dc2626",
        subscription: "#8fd1bd;"
      },
      fontFamily:{
        'sans-regular': ['sans-regular'],
        'sans-bold': ['sans-bold'],
        'sans-medium': ['sans-medium'],
        'sans-semibold': ['sans-semibold'],
        'sans-extrabold': ['sans-extrabold'],
        'sans-light': ['sans-light'],
      }
    },
  },
  plugins: [],
}

