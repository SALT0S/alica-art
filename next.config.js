/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';  
`;
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(); battery=(self); geolocation=(); microphone=('https://somewhere.com')",
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ["www.artic.edu"],
    formats: ["image/avif", "image/webp"],
    ContentSecurityPolicy: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
};

module.exports = nextConfig;
