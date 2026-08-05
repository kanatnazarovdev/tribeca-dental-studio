import type { NextConfig } from "next";
import getRedirects from "./redirects.js";
const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
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
};

export default nextConfig;
