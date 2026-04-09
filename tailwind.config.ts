import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E8411A", // ← ajusta al color exacto del Figma
          hover: "#CC3815",
        },
      },
    },
  },
};
