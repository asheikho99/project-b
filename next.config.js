/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')();

const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

module.exports = nextConfig
module.exports = withMDX(nextConfig);