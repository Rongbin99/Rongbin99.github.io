import { PostCard } from "nextra-theme-blog";
import { getPageMap } from "nextra/page-map";
import { dateToEpochMs, hasTag, normalizeFrontMatter } from "../lib/postMeta";

export default async function Projects() {
  const pageMap = await getPageMap("/posts");

  const posts = (Array.isArray(pageMap) ? pageMap : [])
    .filter((item) => item && typeof item === "object")
    .filter((item) => typeof (item as any).route === "string" && (item as any).frontMatter)
    .filter((item) => (item as any).route !== "/posts")
    .filter((item) => hasTag((item as any).frontMatter, "side_project"))
    .sort(
      (a, b) =>
        dateToEpochMs((b as any).frontMatter?.date) -
        dateToEpochMs((a as any).frontMatter?.date),
    );

  return (
    <>
      {posts.map((post: any) => (
        <PostCard
          key={post.route}
          post={{ route: post.route, frontMatter: normalizeFrontMatter(post.frontMatter) }}
        />
      ))}
    </>
  );
}
