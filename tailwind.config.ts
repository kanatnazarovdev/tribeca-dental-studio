import type { Config } from "tailwindcss";
const config:Config = {
  theme: {
    extend: {
      fontFamily: {
        brandon: ["var(--font-brandon)", "sans-serif"],
        serif: ["var(--font-brandon)", "sans-serif"],
      },
    },
  },
};
export default config;