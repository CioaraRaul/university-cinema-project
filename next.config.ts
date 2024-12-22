import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Enable styled-components support
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
