import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.casethemes.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
