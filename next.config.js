/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tcah-v2-images.s3.us-east-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
