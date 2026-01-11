import { notFound } from "next/navigation";
import { PostCard } from "nextra-theme-blog";
import { getPageMap } from "nextra/page-map";
import matter from "gray-matter";
import { promises as fs } from "fs";
import path from "path";
import { hasTag, normalizeFrontMatter, splitTags } from "../../../../lib/postMeta";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const names = await fs.readdir(postsDir);

  const tags = new Set<string>(["side_project"]);

  await Promise.all(
    names
      .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
      .map(async (name) => {
        const raw = await fs.readFile(path.join(postsDir, name), "utf8");
        const { data } = matter(raw);
        for (const t of splitTags(data?.tags ?? data?.tag)) tags.add(t);
      }),
  );

  return Array.from(tags).map((tag) => ({ tag }));
}

export default async function TagPage(props: {
  params: Promise<{ tag?: string }>;
}) {
  const { tag } = await props.params;
  if (!tag) notFound();

  const title =
    tag === "side_project" ? "Side Projects" : `Posts Tagged with "${tag}"`;

  const pageMap = await getPageMap("/posts");
  const posts = (pageMap as any[])
    .filter((item) => item && typeof item === "object")
    .filter((item) => typeof item.route === "string" && item.frontMatter)
    .filter((item) => item.route !== "/posts")
    .filter((item) => hasTag(item.frontMatter, tag));

  return (
    <>
      <h1>{title}</h1>
      {posts.map((post) => (
        <PostCard
          key={post.route}
          post={{
            route: post.route,
            frontMatter: normalizeFrontMatter(post.frontMatter),
          }}
        />
      ))}
    </>
  );
}
