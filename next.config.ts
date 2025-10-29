import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // reactCompiler: true,
  },
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "cdn.prod.website-files.com" },
      { hostname: "assets.aceternity.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
}

export default withNextIntl(nextConfig)
