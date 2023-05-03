import { useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  var path: undefined | string;
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }
  useEffect(() => {
    let all = document.querySelectorAll(".active");
    all &&
      all.forEach((e: any) => {
        e.classList.remove("active");
      });
    if (path === "/projects") {
      document.querySelector(".projects")?.classList.add("active");
    }
    if (path === "/") {
      document.querySelector(".home")?.classList.add("active");
    }
    if (path === "/posts") {
      document.querySelector(".posts")?.classList.add("active");
    }
  }, [path]);

  return (
    <div className="text-fontcolor font-semibold flex items-end justify-end gap-3 md:gap-6 w-full pt-8 pb-1 px-4  ">
      <Link href="/" className="home">
        Home
      </Link>
      <Link href="/projects" className="projects">
        Projects
      </Link>
      <Link href="/posts" className="posts">
        Posts
      </Link>
    </div>
  );
}
