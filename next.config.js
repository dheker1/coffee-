/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingExcludes: {
    '/': ['node_modules/**/*'],
  },
}

module.exports = nextConfig
