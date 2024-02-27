const REPO_NAME = "calendar-lib-playground";
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MUI_LICENSE_KEY: process.env.MUI_LICENSE_KEY,
    KENDO_UI_LICENSE: process.env.KENDO_UI_LICENSE,
  },
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
