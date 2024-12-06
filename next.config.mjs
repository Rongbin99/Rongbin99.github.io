import nextra from 'nextra'

const withNextra = nextra({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
  latex: {
    renderer: 'mathjax'
  }
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // any configs you need
};

export default withNextra(nextConfig);
