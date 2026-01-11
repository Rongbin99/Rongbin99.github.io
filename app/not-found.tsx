import Link from "next/link";

export const metadata = {
  title: "Error 404",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow pt-12">
        <div className="text-center dark:text-white">
          <h1 className="text-3xl md:text-6xl mb-12">
            Error 404: Page Not Found
          </h1>
          <p className="text-base md:text-xl mb-16">
            erm... if only you had a{" "}
            <a
              href="https://date-a-live.fandom.com/wiki/Kurumi_Tokisaki#Time_Manipulation"
              target="_blank"
              rel="noopener noreferrer"
            >
              time machine...
            </a>
          </p>
        </div>

        <div className="text-center dark:text-white">
          <button className="text-base md:text-xl py-3 px-6 rounded-xl border-transparent bg-rose-700 hover:bg-fuchsia-700 mb-12">
            <Link href="/">Rewind to Home</Link>
          </button>
        </div>

        <div className="hover:scale-90">
          <a
            href="https://www.youtube.com/watch?v=WFrCVS76J6E"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/404_kurumi.png"
              alt="Kurumi Blanked"
              className="not-found-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
