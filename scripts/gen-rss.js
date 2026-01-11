const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generate() {
  const feed = new RSS({
    title: "Rongbin Gu",
    site_url: "https://rongbin99.github.io/",
    feed_url: "https://rongbin99.github.io/feed.xml",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "content", "posts"));

  await Promise.all(
    posts.map(async (name) => {
      if (name.startsWith("index.")) return;

      const content = await fs.readFile(
        path.join(__dirname, "..", "content", "posts", name),
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: "/posts/" + name.replace(/\.mdx?/, ""),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag.split(", "),
        author: frontmatter.data.author,
      });
    }),
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
