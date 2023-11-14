/** @type {import('next').NextConfig} */

// const nextConfig = {}
// module.exports = nextConfig

module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Replace 'fs' module with an empty object in client-side bundle
        config.resolve.fallback = { fs: false };
      }
      return config;
    },
  };