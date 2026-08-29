import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve = config.resolve || {}
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      fs: false,
      path: false,
    }
    return config
  },
  async redirects() {
    return [
      { source: '/archivements', destination: '/about', statusCode: 301 },
      { source: '/work_experience', destination: '/about', statusCode: 301 },
      { source: '/projects', destination: '/work', statusCode: 301 },
      { source: '/learning_notes', destination: '/learning', statusCode: 301 },
      { source: '/learning_recomendations', destination: '/learning', statusCode: 301 },
      { source: '/learning_recomendations/:slug', destination: '/learning/:slug', statusCode: 301 },
      { source: '/cv', destination: '/about', statusCode: 301 },
      { source: '/book', destination: '/learning', statusCode: 301 },
      { source: '/lab', destination: '/learning', statusCode: 301 },
      { source: '/blog/en', destination: '/blog', statusCode: 301 },
      { source: '/blog/es', destination: '/blog', statusCode: 301 },
      { source: '/blog/en/:slug', destination: '/blog/:slug', statusCode: 301 },
      { source: '/blog/es/:slug', destination: '/blog', statusCode: 301 },
    ]
  },
}

export default nextConfig
