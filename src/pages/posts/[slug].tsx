import fs from "fs";
import matter from "gray-matter";
import path from "path";
import md from "markdown-it";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";

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
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8").toString();
  const { data: frontmatter, content: content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content: content,
    },
  };
}

export default function Post({ frontmatter, content }: any) {
  return (
    <div className=" bg-white  md:text-lg w-full flex flex-col overflow-y-scroll py-16 p-4 pb-24  text-fontcolor">
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="w-full flex flex-col md:gap-16 gap-8 ">
        <div className=" w-full flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="  text-fontcolor  font-extrabold md:text-5xl text-2xl ">
            {frontmatter.title}
          </h1>
          <p className=" text-fontcolor   text-sm font-semibold ">
            {frontmatter.date}
          </p>
        </div>
        <Image
          alt="hero"
          width={150}
          height={150}
          src={`/post_img/${frontmatter.socialImage}`}
          className="object-cover rounded md:hidden w-full aspect-video "
        />
        <Image
          alt="hero"
          width={300}
          height={300}
          src={`/post_img/${frontmatter.socialImage}`}
          className="object-cover rounded hidden md:block w-full aspect-[16/6] "
        />
        <ReactMarkdown
          className="markdown-body md:px-12"
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={tomorrowNight}
                  language={match[1]}
                  PreTag="div"
                >
                  children={String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
