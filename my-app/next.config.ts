import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  redirects: async () => [
    {
      source: '/',
      destination: '/agents',
      permanent: true, // Use false for a 302 redirect
    },
  ],
  env: {
    token: process.env.token,
  },
};

export default nextConfig;
