import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '9to5mac.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'code-projects.org',
        port: '',
        pathname: '/**',
      },

    ],
  },
};

export default nextConfig;
