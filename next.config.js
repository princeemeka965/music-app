/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.deezer.com',
            }
        ]
    },
}

module.exports = nextConfig
