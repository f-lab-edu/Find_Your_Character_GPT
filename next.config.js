/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
