import { generateStaticParamsFor, importPage } from "nextra/pages";
import { notFound } from "next/navigation";
import { useMDXComponents as getMDXComponents } from "../../../mdx-components";
import { normalizeFrontMatter } from "../../../lib/postMeta";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: {
  params: Promise<{ mdxPath?: string[] }>;
}) {
  const params = await props.params;
  try {
    const { metadata } = await importPage(params.mdxPath);
    return metadata;
  } catch {
    notFound();
  }
}

const Wrapper = (getMDXComponents() as any).wrapper as any;

export default async function Page(props: {
  params: Promise<{ mdxPath?: string[] }>;
}) {
  const params = await props.params;
  
  let result;
  try {
    result = await importPage(params.mdxPath);
  } catch {
    notFound();
  }
  
  const { default: MDXContent, toc, metadata } = result;
  const normalizedMetadata = normalizeFrontMatter(metadata as any);

  if (!Wrapper) return <MDXContent {...props} params={params} />;

  return (
    <Wrapper toc={toc} metadata={normalizedMetadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
