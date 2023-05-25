import React from "react";
import Image from "next/image";
import Card from "../components/Card";
import Head from "next/head";
export default function Home() {
  let skills: any = [
    "HTML",
    "CSS",
    " Tailwind ",
    "JavaScript",
    " React JS",
    "Next JS",
    "Python",
    "Figma",
  ];
  return (
    <>
      <Head>
        <title>Amith Jayapraban</title>
        <meta
          name="description"
          content="Frontend developer from Kerala, India 🇮🇳"
        />
        <meta name="title" property="og:title" content="Amith Jayapraban" />
        <meta
          name="description"
          property="og:description"
          content="Frontend developer from Kerala, India."
        />
        <meta name="image" property="og:image" content="/Amith.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@amithjayapraban" />
        <meta name="twitter:site" content="@amith.tech" />
        <meta name="twitter:title" content="Amith Jayapraban" />
        <meta
          name="twitter:description"
          content="Frontend developer from Kerala, India."
        />
        <meta name="twitter:image" content="/Amith.jpg" />
      </Head>
      <main className=" p-4 py-16 flex overflow-scroll  flex-col gap-6 items-center text-fontcolor">
        {/* <Card p={"p-4"} w={"w-auto"}>
        <Image
          src="/Amith.jpg"
          width="128"
          className="rounded grayscale"
          height="128"
          alt="Amith's photo"
          priority
        />
      </Card> */}{" "}
        <Image
          src="/Amith.jpg"
          width="128"
          className="rounded-3xl border-2 border-fontcolor grayscale self-start "
          height="128"
          alt="Amith Jayapraban"
          priority
        />
        <Card p={"p-4"} w={"w-auto font-semibold  bg-text_h"}>
          <h1 className="grad tracking-wide md:text-xl  ">
            👋 &nbsp;Hey, I&apos;m Amith Jayapraban
          </h1>
          {/* <p className="text-sm md:text-[.8rem] tracking-wide  title   ">
          Frontend developer from Kerala, India 🇮🇳
        </p> */}
        </Card>
        <p className="text-sm self-start tracking-wide  leading-6 font-semibold">
          Currently pursuing MCA from College of Engineering, Trivandrum.
          <br />
          Passionate about Web and Photography. <br />
          Loves minimalistic designs.
        </p>
      </main>
    </>
  );
}
