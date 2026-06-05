/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@novanode/shared", "@novanode/ui", "@novanode/database"],
};

export default nextConfig;
