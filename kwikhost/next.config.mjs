/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['kwikhost.xyz', 's3.ap-south-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**', 
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:subdomain*',
  //       destination: '/subdomain', 
  //     },
  //   ];
  // },
};

export default nextConfig;
