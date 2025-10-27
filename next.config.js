/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb"
    }
  }
};

module.exports = nextConfig;
