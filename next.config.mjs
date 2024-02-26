const REPO_NAME = "calendar-lib-playground";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: process.env.GITHUB_ACTIONS &&`/${REPO_NAME}/`,
  basePath: process.env.GITHUB_ACTIONS &&`/${REPO_NAME}`,
  trailingSlash: true,
};

export default nextConfig;
