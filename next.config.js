const nextra = require("nextra").default;
const withNextra = nextra({
  staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // any configs you need
};

module.exports = withNextra(nextConfig);
