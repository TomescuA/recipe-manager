// @type {import('next').NextConfig}
const nextConfig = {
 images: {
  domains: ['img.spoonacular.com'],
 },
 async redirects() {
  return [
   {
    source: '/',
    destination: '/recipes',
    permanent: true,
   },
  ];
 },
};

export default nextConfig;
