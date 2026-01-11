import "nextra-theme-blog/style.css";
import "../styles/main.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rongbin Gu",
  description: "Computer Engineering Student @ University of Waterloo. Based in Toronto, Canada.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
