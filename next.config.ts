import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/bharath-hegde-portfolio.github.io',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/bharath-hegde-portfolio.github.io',
  }
};

export default nextConfig;

