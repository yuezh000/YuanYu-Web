/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/yuanyu-web',
  images: { unoptimized: true },
  trailingSlash: true,
};

module.exports = nextConfig;
