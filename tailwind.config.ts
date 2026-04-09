import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        gray: {
          10: "#F6F6F9",
          20: "#EFF0F6",
          21: "#EEEDED",
          25: "#E0E0E0",
          40: "#A7A7A7",
          60: "#686868",
          white: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#00E3C2",
          ultraLight: "#B2E7DF",
        },
        secondary: {
          DEFAULT: "#060F26",
          light: "#2D313D",
          lighter: "#606B89",
        },
        green: {
          DEFAULT: "#05BE50",
          lighter: "#D9FFE8",
        },
        destructive: {
          DEFAULT: "#FF3D4A",
          lighter: "#F1E1E4",
        },
        blue: {
          DEFAULT: "#456DD3",
          lighter: "#D2E9FF",
          ultraLight: "#E8EEF4",
        },
      },
    },
  },
};
