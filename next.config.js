/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: '/**'
      }
    ]
  }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
