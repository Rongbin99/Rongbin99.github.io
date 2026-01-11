import { PostCard } from "nextra-theme-blog";
import { getPageMap } from "nextra/page-map";
import { dateToEpochMs, normalizeFrontMatter } from "../../../lib/postMeta";

export const dynamic = "force-static";

export const metadata = {
  title: "Posts",
};

export default async function PostsPage() {
  const pageMap = await getPageMap("/posts");

  const posts = (pageMap as any[])
    .filter((item) => item && typeof item === "object")
    .filter((item) => typeof item.route === "string" && item.frontMatter)
    .filter((item) => item.route !== "/posts")
    .sort((a, b) => {
      const aTime = dateToEpochMs(a.frontMatter?.date);
      const bTime = dateToEpochMs(b.frontMatter?.date);
      return bTime - aTime;
    });

  return (
    <>
      <h1>Posts</h1>
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
