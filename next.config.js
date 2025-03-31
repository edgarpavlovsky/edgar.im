/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use export in production, allowing dynamic routes in development
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  reactStrictMode: true,
  trailingSlash: true,
  // Generate a 404 page for handling invalid routes in static export
  webpack: (config) => {
    // This is to fix ESM issues with marked dependencies
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
    };
    return config;
  },
}

module.exports = nextConfig 