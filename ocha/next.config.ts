import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["127.0.0.1"],
  distDir: "out", // this is the default
  reactCompiler: true,
  devIndicators: false,
  output: "export",
  images: { unoptimized: true },
  basePath: "/ocha",
  assetPrefix: "/ocha",
};

export default nextConfig;
