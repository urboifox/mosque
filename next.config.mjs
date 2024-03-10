import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mohammed50500-001-site1.jtempurl.com",
        pathname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
