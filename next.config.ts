import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // Use string plugin identifiers for Turbopack compatibility
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: ["rehype-slug", "rehype-autolink-headings"],
  },
});

const nextConfig: NextConfig = {
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
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

export default withMDX(nextConfig);
