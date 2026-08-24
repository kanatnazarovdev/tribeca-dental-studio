// src/app/fonts.ts
import localFont from "next/font/local";

export const brandonGrotesque = localFont({
  src: [
    {
      path: "./fonts/Brandon_Grotesque_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Brandon_Grotesque_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Brandon_Grotesque_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-brandon",
  display: "swap", // Ensures instant text render using fallback while font loads
});

export const dDin = localFont({
  src: [
    {
      path: "./fonts/D-DIN-Bold.woff",
      weight: "400 700",
      style: "normal",
    },
  ],
  variable: "--font-D-DIN",
  display: "swap", // Eliminates render-blocking font delays
});