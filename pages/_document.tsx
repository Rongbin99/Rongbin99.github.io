import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Rongbin Fan Club",
    description: "Rongbin's Personal Website Portfolio",
    image: "https://github.com/Rongbin99/Rongbin99/blob/main/assets/Wallpaper2-01.svg",
  };

  return (
    <Html lang="en" class="dark">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rongbin99" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
