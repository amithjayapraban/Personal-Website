import { useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  var path: undefined | string;
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }
  useEffect(() => {
    if (path === "/projects") {
      document.querySelector(".projects")?.classList.add("active");
      document.querySelector(".home")?.classList.remove("active");
    }
    if (path === "/") {
      document.querySelector(".projects")?.classList.remove("active");
      document.querySelector(".home")?.classList.add("active");
    }
  }, [path]);

  return (
    <div className="text-fontcolor font-semibold flex items-end justify-end gap-3  pt-8 pb-1 pr-4  ">
      <Link href="/" className="home">
        Home
      </Link>
      <Link href="/projects" className="projects">
        Projects
      </Link>
    </div>
  );
}
