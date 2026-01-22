import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/lander",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
