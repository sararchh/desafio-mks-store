/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_API_URL, 'mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
