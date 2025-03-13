/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
