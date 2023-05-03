import fs from "fs";
import matter from "gray-matter";
import path from "path";
import md from "markdown-it";
const postsDirectory = path.join(process.cwd(), "posts");
export async function getStaticPaths() {
  const files = fs.readdirSync(postsDirectory);
  const paths = files.map((files) => ({
    params: {
      slug: files.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
import React from "react";
import Head from "next/head";

export default function Post({ frontmatter, content }: any) {
  
  return (
    <div className="gap-2 flex flex-col overflow-scroll py-16 p-4 pb-24  text-fontcolor">
      <img
        src={`/${frontmatter.socialImage}`}
        className="object-cover rounded w-full aspect-video "
      />
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="">
        <h1 className="text-md flex flex-col justify-between w-full font-bold md:text-xl text-text_h">
          {frontmatter.title} 
        </h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
      </div>
    </div>
  );
}
