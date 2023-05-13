import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./_nav";
import Foot from "./_foot";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" md:flex md:items-center md:justify-center">
      <Head>
        <title>Amith Jayapraban</title>
        <meta
          name="description"
          content="Frontend developer from Kerala, India."
        />
        <meta property="og:site_name" content="Colby Fayock" />
        <meta property="og:title" content="Amith Jayapraban" />
        <meta
          property="og:description"
          content="Frontend developer from Kerala, India."
        />
        <meta property="og:url" content="https://amith.tech" />
        <meta property="og:image" content="/Amith.jpg" />
      </Head>
      <div className="flex h-screen  relative  self-center justify-self-center flex-col  md:w-[60%] lg:w-[50%]">
        <Nav />
        <Component {...pageProps} />
        <Foot />
      </div>
      <Analytics />
    </div>
  );
}
