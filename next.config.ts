import type { NextConfig } from "next";
import getRedirects from "./redirects.js";
const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "tribeca-dental-studio-omega.vercel.app" },
      { protocol: "https", hostname: "scontent.cdninstagram.com" },
    ],
  },

  async redirects() {
    return await getRedirects();
  },
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/markdown; charset=utf-8",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
