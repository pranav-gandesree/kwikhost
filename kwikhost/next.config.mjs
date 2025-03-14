/** @type {import('next').NextConfig} */
const nextConfig = {
     
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 's3.ap-south-1.amazonaws.com',
        pathname: '/**'
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/:subdomain*',
      destination: '/:subdomain*',
    },
    {
      source: '/',
      destination: '/api/tenant',
    },
  ],
};

export default nextConfig;
