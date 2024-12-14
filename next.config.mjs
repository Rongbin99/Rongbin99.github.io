import nextra from 'nextra';

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  latex: {
    renderer: 'mathjax',
  },
});

const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for GitHub Pages to handle images
  },
  // any configs you need
};

export default withNextra(nextConfig);
