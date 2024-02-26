const REPO_NAME = "calendar-lib-playground";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: `/${REPO_NAME}/`,
  basePath: `/${REPO_NAME}`,
  trailingSlash: true,
};

export default nextConfig;
