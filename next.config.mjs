/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true, // optional but recommended
  swcMinify: true,       // enable SWC minification for faster builds
  images: {
    domains: ["images.unsplash.com"], // allow Unsplash images
  },
  experimental: {
    appDir: true,        // if using /app directory
  },
};

export default nextConfig;
