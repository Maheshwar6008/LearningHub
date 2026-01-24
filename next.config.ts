import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages / Vercel deployment
  output: "export",
  
  // Set basePath for GitHub Pages (repo name)
  basePath: isProd ? "/LearningHub" : "",
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Enable trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;
