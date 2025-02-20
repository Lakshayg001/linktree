/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        dns: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;
