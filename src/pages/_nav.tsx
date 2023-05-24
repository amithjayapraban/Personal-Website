
import Link from "next/link";

export default function Nav() {

  return (
    <div className="text-fontcolor font-semibold flex items-end justify-end gap-3 md:gap-8 w-full pt-8 pb-1 px-4  ">
      <Link href="/" className="home ">
        Home
      </Link>
      <Link href="/projects" className="projects  ">
        Projects
      </Link>
      <Link href="/blog" className="posts">
        Blog
      </Link>
    </div>
  );
}
