import { Footer, Layout } from "nextra-theme-blog";
import { SocialIcon } from "react-social-icons";
import { SiteNav } from "../../components/SiteNav";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <SiteNav />

      {children}

      <Footer>
        <footer className="dark:text-white -mb-20" data-pagefind-ignore="all">
          <small className="site-footer-text">
            Made by Rongbin Gu. © <time>{new Date().getFullYear()}</time>

            <SocialIcon
              network="rss"
              url="/feed.xml"
              style={{
                float: "right",
                marginRight: "10px",
                width: "30px",
                height: "30px",
              }}
            />
            <SocialIcon
              url="https://github.com/Rongbin99/"
              style={{
                float: "right",
                marginRight: "10px",
                width: "30px",
                height: "30px",
              }}
            />
            <SocialIcon
              url="https://www.instagram.com/rongbin99/"
              style={{
                float: "right",
                marginRight: "10px",
                width: "30px",
                height: "30px",
              }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/rongbin99/"
              style={{
                float: "right",
                marginRight: "10px",
                width: "30px",
                height: "30px",
              }}
            />
          </small>
        </footer>
      </Footer>
    </Layout>
  );
}
