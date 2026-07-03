/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
