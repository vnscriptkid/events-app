/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // https://yoloeventcompany.sg/wp-content/uploads/2023/07/One-EY-Fest-Main-homepage.jpg
    remotePatterns: [
      {
        protocol: "https",
        // host: "yoloeventcompany.sg",
        // path: "/wp-content/uploads/**",
        hostname: "yoloeventcompany.sg",
      },
    ],
  },
};

module.exports = nextConfig;
