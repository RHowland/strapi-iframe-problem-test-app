/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/admin/:path*',
            destination: 'http://localhost:1337/admin/:path*',
          },
        {
            source: '/api/:path*',
            destination: 'http://localhost:1337/api/:path*',
        },
        ]
      },
      images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port:  "1337",
          },
        ],
      },
};

export default nextConfig;
