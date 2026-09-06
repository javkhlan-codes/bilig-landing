import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a self-contained `.next/standalone` bundle with only the traced
  // runtime dependencies, so the production image carries no dev toolchain
  // and no full node_modules tree.
  output: "standalone",
};

export default nextConfig;
