import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        // Disable any experimental features that might cause issues
        serverActions: false,
    },
};

export default nextConfig;
