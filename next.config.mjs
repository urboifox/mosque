import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mohammed50500-001-site1.jtempurl.com"],
  },
};

export default withNextIntl(nextConfig);
