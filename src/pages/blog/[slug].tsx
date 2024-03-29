import fs from "fs";
import matter from "gray-matter";
import path from "path";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import React from "react";
import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const postsDirectory = path.join(process.cwd(), "blog");
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
  const fileName = fs.readFileSync(`blog/${slug}.md`, "utf-8").toString();
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
    <div className=" bg-white  md:text-lg w-full flex flex-col overflow-y-scroll md:py-16 py-8 p-4 pb-24  text-fontcolor">
      <Head>
        <title>{frontmatter.title}</title>

        <meta
          name="title"
          property="og:title"
          content={`${frontmatter.title}`}
        />
        <meta
          name="image"
          property="og:image"
          content={`https://amith.vercel.app/post_img/${frontmatter.socialImage}`}
        />
        <meta
          property="og:description"
          content={`${frontmatter.description}`}
        />
        <meta name="author" content="Amith Jayapraban"></meta>
        <meta
          name="description"
          property="description"
          content={`${frontmatter.description}`}
        />
        <meta
          name="twitter:image"
          content={`https://amith.vercel.app/post_img/${frontmatter.socialImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name=" twitter:image:alt" content={`${frontmatter.title}`} />
        <meta name="twitter:creator" content="@amithjayapraban" />
        <meta name="twitter:site" content="@amith.tech" />
        <meta name="twitter:title" content={`${frontmatter.title}`} />
        <meta
          name="twitter:description"
          content={`${frontmatter.description}`}
        />
      </Head>
      <div className="w-full  flex flex-col md:gap-10 gap-8 ">
        <div className=" w-full flex flex-col md:flex-row md:items-center justify-between">
          <h1 className="  text-fontcolor  font-bold md:text-3xl text-2xl ">
            {frontmatter.title}
          </h1>
          <p className=" text-fontcolor   text-sm font-semibold ">
            {frontmatter.date}
          </p>
        </div>
        <img
          alt="hero"
          width={150}
          height={150}
          src={`/post_img/${frontmatter.socialImage}`}
          className="object-cover rounded md:hidden w-full aspect-video "
        />
        <img
          alt="hero"
          width={150}
          height={150}
          src={`/post_img/${frontmatter.socialImage}`}
          className="object-cover md:px-12 rounded hidden md:block w-full aspect-video "
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
                  {String(children).replace(/\n$/, "")}
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
