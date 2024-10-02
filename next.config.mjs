const nextConfig = {
  images: {
    domains: ['img.spoonacular.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recipes?tab=external',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
