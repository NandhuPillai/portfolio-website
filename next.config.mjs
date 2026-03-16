/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repo = '/portfolio-website';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? repo : '',
  assetPrefix: isGithubActions ? repo : '',
  trailingSlash: true,
}

export default nextConfig
