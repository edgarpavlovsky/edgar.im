/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use static export for production
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  // Fix marked dependencies
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
}

module.exports = nextConfig 