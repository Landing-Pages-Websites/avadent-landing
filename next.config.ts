import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires explicit allowlist for non-default quality values.
    // Without this, <Image quality={90} /> is rejected by Vercel image
    // optimizer with HTTP 400 and no image renders.
    qualities: [75, 85, 90, 92, 95],
  },
};

export default nextConfig;
