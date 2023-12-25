/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'e-cdns-images.dzcdn.net',
            },
            {
                protocol: 'https',
                hostname: 'api.deezer.com'
            },
            {
                protocol: 'https',
                hostname: 'images.rapgenius.com'
            },
            {
                protocol: 'https',
                hostname: 'images.genius.com'
            }
        ]
    },
}

module.exports = nextConfig
