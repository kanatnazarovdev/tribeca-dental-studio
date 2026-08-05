import type { NextConfig } from "next";

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
  return [
    {
      // Matches any single-level path (excluding standard system folders) and sends it to /blog/:path/
      source: '/:slug((?!blog|studio|api|_next|favicon.ico).*)',
      destination: '/blog/:slug/',
      permanent: true,
    },
  ];
}
};

export default nextConfig;
