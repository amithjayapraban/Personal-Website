import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./_nav";
import Foot from "./_foot";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" md:flex md:items-center md:justify-center">
      <div className="flex h-screen  relative  self-center justify-self-center flex-col  md:w-[75%] ">
        <Nav />
        <Component {...pageProps} />
        <Foot />
      </div>
      <Analytics />
    </div>
  );
}
