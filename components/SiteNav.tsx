"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem =
  | { label: string; href: string; external?: false }
  | { label: string; href: string; external: true };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Side Projects", href: "/projects" },
  { label: "Creative Portfolio", href: "/creative" },
  { label: "Posts", href: "/posts" },
  { label: "Resume →", href: "https://rongbin99.github.io/resume/", external: true },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="site-nav" data-pagefind-ignore="all">
      {NAV.map((item) => {
        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          );
        }

        const isActive = item.href === pathname;
        return (
          <Link key={item.href} href={item.href} aria-current={isActive}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
}
