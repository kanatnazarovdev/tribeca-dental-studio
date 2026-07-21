// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        brandon: ["var(--font-brandon)", "sans-serif"],
        ddin: ["var(--font-D-DIN)", "sans-serif"], // ✅ Case matches fonts.ts exactly!
      },
    },
  },
};

export default config;