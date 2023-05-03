import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import React from "react";
import Card from "../components/Card";

export default function Directory({ allPostsData }: any) {
  console.log(allPostsData);
  return (
    <section className="gap-2 flex flex-col py-16 p-4 text-fontcolor">
      <h1 className="text-md font-bold md:text-xl text-text_h">Posts</h1>
      <ul className="flex flex-col  h-full gap-2">
        {allPostsData.length > 0 &&
          allPostsData.map(({ slug, date, title }: any) => (
            <Card key={slug} p={"p-4 py-6"} w={"w-full"}>
              <li className="flex text-xs items-center justify-between">
                <Link className="text-sm" href={`/posts/${slug}`}>
                  {title}
                </Link>
                {date}
              </li>
            </Card>
          ))}
      </ul>
      {allPostsData.length == 0 && (
        <section className="gap-2 flex flex-col items-center py-16 p-4 text-fontcolor">
          <h1 className="">😕</h1>
        </section>
      )}
    </section>
  );
}
