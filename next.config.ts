import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Enable styled-components support
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external HTTPS hosts
      },
      {
        protocol: "http",
        hostname: "**", // Allow all external HTTP hosts (if necessary)
      },
      // Add custom patterns as needed
    ],
    domains: ["example.com"], // Replace with domains hosting your images, e.g., 'example.com'
    unoptimized: true, // Allow unoptimized image loading (useful for dynamic or user-uploaded images)
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match all SVG files
      use: [
        {
          loader: "@svgr/webpack", // Use SVGR to transform SVGs into React components
          options: {
            icon: true, // Optimize SVG for icon usage
          },
        },
      ],
    });

    return config; // Return the updated configuration
  },
};

export default nextConfig;
