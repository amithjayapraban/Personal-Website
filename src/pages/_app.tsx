import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./_nav";
import Foot from "./_foot";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen md:flex md:items-center md:justify-center">
      <Head>
        <title>Amith Jayapraban</title>
      </Head>
      <div className="md:flex relative h-full md:self-center md:justify-self-center md:flex-col  md:w-[60%] lg:w-[50%]">
        <Nav />
        <Component {...pageProps} />
        <Foot />
      </div>
    </div>
  );
}
