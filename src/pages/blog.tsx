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
import Image from "next/image";

export default function Directory({ allPostsData }: any) {
  allPostsData = allPostsData.filter((post: any) => post.publish === true);

  return (
    <section className="gap-2 overflow-scroll flex flex-col py-16 p-4 text-fontcolor">
      <Card p={"p-4 bg-text_h"}>
        <h1 className="text-md font-bold md:text-xl ">Blog</h1>
      </Card>
      <ul className="flex flex-col p-4 h-full gap-8">
        {allPostsData &&
          allPostsData.length > 0 &&
          allPostsData.map(({ slug, date, title, socialImage }: any) => (
            <Link
              href={`/posts/${slug}`}
              key={slug}
              className="flex flex-col bg-white rounded-3xl md:w-[60%] text-fontcolor  gap-2 font-semibold items-start  justify-between"
            >
              {/* <div className="flex text-fontcolor self-end font-semibold items-start flex-col "> */}
                <span className=" md:text-[1.2rem]  font-bold mb-[.1rem]">
                  {title}
                </span>

                <span className="opacity-[60%] text-xs">{date}</span>
              {/* </div> */}
              {/* <Image
                alt="hero"
                width={100}
                height={100}
                src={`/post_img/${socialImage}`}
                className="object-cover rounded-3xl  aspect-[1] "
              /> */}
            </Link>
          ))}
      </ul>
      {allPostsData && allPostsData.length == 0 && (
        <section className="gap-2 flex flex-col items-center py-16 p-4 text-fontcolor">
          <h1 className="">😕</h1>
        </section>
      )}
    </section>
  );
}
