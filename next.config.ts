import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages — the whole site is pre-rendered at
  // build time into the `out/` directory (no server needed).
  output: "export",
  // Static local images (logo) don't need the Next.js image optimizer on export.
  images: { unoptimized: true },
};

export default nextConfig;
