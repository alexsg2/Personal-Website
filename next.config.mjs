/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Personal-Website' : '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
