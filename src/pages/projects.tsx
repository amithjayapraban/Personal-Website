import React from "react";
import Card from "../components/Card";
import Head from "next/head";

export default function Projects() {
  let projects: any = [
    {
      name: "iP2P",
      desc: "Peer to peer file transfer",
      tags: ["WebRTC", "React", "Tailwind CSS", "Firebase"],
      link: "https://ip2p.vercel.app",
    },
    {
      name: "Sorah",
      desc: "MERN Stack chat application",
      tags: ["React", "Express", " Socket.io", " MongoDB"],
      link: "https://sorah.vercel.app",
    },
    {
      name: "Nota",
      desc: "Note taking app",
      tags: ["React", "DraftJs", " Supabase"],
      link: "https://nota-nu.vercel.app",
    },
    {
      name: "Algo Visualiser",
      desc: "Visualiser for some common sorting algorithms",
      tags: ["React", "Tailwind CSS"],
      link: "https://sort-algorithm-visualiser.vercel.app/",
    },
  ];
  return (
    <>
      <Head>
        <title>Amith Jayapraban</title>
        <meta
          name="description"
          content="Frontend developer from Kerala, India 🇮🇳"
        />
        <link rel="icon" href="/Amith.jpg" />
        <meta name="title" property="og:title" content="Amith Jayapraban" />
        <meta name="description"
          property="og:description"
          content="Frontend developer from Kerala, India."
        />
        <meta property="og:url" content="https://amith.tech" />
        <meta name="image" property="og:image" content="/Amith.jpg" />
      </Head>
      <section className="gap-2 overflow-scroll flex flex-col py-16 p-4 text-fontcolor">
        <Card p={"p-4 bg-text_h"}>
          <h1 className="text-md font-bold md:text-xl ">Projects</h1>
        </Card>
        {projects.map((i: any) => {
          return (
            // <Card key={i.name} p={"p-4"} w={"md:w-[50%] w-full"}>
            <a
              key={i.name}
              href={`${i.link}`}
              target="_blank"
              className="w-full p-4"
            >
              <div className="text-fontcolor gap-1 flex flex-col justify-between items-start">
                <h1 className="md:text-[1.2rem]  font-bold mb-[.1rem] self-justify-start text-left">
                  {i.name}
                </h1>

                <div className="flex flex-col flex-wrap gap-2 text-right">
                  <p className="text-fontcolor font-semibold text-xs">
                    {i.desc}
                  </p>
                </div>
                <div className="flex font-semibold text-xs opacity-[60%] flex-wrap gap-2 text-left">
                  {i.tags.map((t: any) => {
                    return <p key={t}>{t}</p>;
                  })}
                </div>
              </div>
            </a>
            // </Card>
          );
        })}
      </section>
    </>
  );
}
