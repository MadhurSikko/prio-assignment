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
};

export default nextConfig;
