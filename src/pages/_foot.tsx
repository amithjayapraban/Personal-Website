import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Foot() {
  var path: undefined | string;
  const [text, setText] = useState("~ portfolio$ cd  Home");
  const [rpath, setRpath] = useState("/projects");
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }
  useEffect(() => {
    if (path === "/projects") {
      setText("~ portfolio$ cd  Home");
      setRpath("/");
    }
    if (path === "/") {
      setText("~ portfolio$ cd  Projects");
      setRpath("/projects");
    }
    if (path === "/posts") {
      setText("~ portfolio$ cd  Home");
      setRpath("/");
    }
    let pattern = /[/]posts[/]/;
    if (path?.match(pattern)) {
      setText("~ portfolio$ cd  Posts");
      setRpath("/posts");
    }
  }, [path]);
  return (
    <div className="w-full absolute bottom-0   justify-center   items-center text-fontcolor font-medium   gap-3 z-40   px-4  ">
      <div className="justify-center pb-8 pt-8  bg-white   w-full h-[20px]  items-center  cursor-pointer gap-8 flex ">
        <a
          href="https://github.com/amithjayapraban"
          target="_blank"
          className=""
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 768 768"
            fill="var(--fontcolor)"
          >
            <path d="M278.816 577.344c-40.576 12.16-65.92 10.72-82.656 5.44-7.392-2.336-13.792-5.632-19.648-9.664-13.152-9.088-23.264-21.6-35.808-37.504-11.392-14.432-27.2-35.424-49.632-47.232-5.92-3.136-12.352-5.664-19.328-7.424-17.152-4.288-34.528 6.144-38.816 23.296s6.144 34.528 23.296 38.816c2.368 0.736 4.96 1.92 4.96 1.92 8.064 4.256 15.584 12.928 29.248 30.272 11.712 14.848 27.392 35.136 49.696 50.528 10.624 7.328 22.752 13.632 36.768 18.048 32.48 10.272 71.552 9.472 120.32-5.184 16.928-5.088 26.528-22.912 21.44-39.84s-22.912-26.528-39.84-21.44zM544 704v-121.344c1.664-21.888-1.792-42.976-9.344-62.144 24.864-5.472 50.016-13.664 73.504-26.336 66.656-35.968 111.872-103.744 111.872-221.536 0-48.096-16.512-92.384-44.128-127.392 11.36-43.040 7.232-87.232-9.376-125.856-3.904-9.056-11.488-15.424-20.288-18.048-11.424-3.392-55.424-9.888-139.936 43.584-72.736-17.312-145.824-16.288-212.672-0.064-84.448-53.408-128.416-46.912-139.84-43.52-9.472 2.816-16.672 9.6-20.32 18.080-17.728 41.344-19.968 85.504-9.344 125.824-29.76 37.696-44.384 83.232-44.128 128.544 0 115.904 44.448 183.136 110.112 219.488 24.064 13.312 49.92 21.92 75.424 27.744-5.92 14.976-9.152 30.752-9.728 46.592-0.16 4.512-0.096 9.056 0.16 13.568l0.032 122.816c0 17.664 14.336 32 32 32s32-14.336 32-32v-123.84c0-0.672-0.032-1.44-0.064-2.208-0.192-2.688-0.224-5.376-0.128-8.064 0.64-18.176 7.712-36.032 21.28-50.048 4.64-4.768 7.872-11.104 8.768-18.304 2.176-17.536-10.272-33.536-27.808-35.712-10.88-1.344-21.664-3.008-32.192-5.088-25.28-4.992-48.576-12.32-68.704-23.456-41.76-23.136-76.512-66.272-77.12-161.344 0.416-39.712 13.408-74.208 39.168-101.28 8.224-8.736 11.2-21.472 6.784-33.28-8.96-23.936-10.912-50.56-4.48-76.544 15.712 3.424 43.328 13.312 84.704 41.024 7.52 5.024 17.056 6.848 26.4 4.256 63.904-17.824 135.744-19.264 207.040 0.064 8.672 2.336 18.208 1.056 26.176-4.32 41.376-27.712 68.992-37.6 84.704-41.024 6.048 24.512 5.024 51.040-4.512 76.544-4.128 11.264-1.856 24.16 6.816 33.28 24.256 25.44 39.168 59.904 39.168 97.92 0 98.4-35.648 142.24-78.24 165.216-19.936 10.752-42.976 17.76-67.936 22.4-10.304 1.92-20.832 3.392-31.456 4.576-6.72 0.736-13.376 3.648-18.688 8.8-12.704 12.288-13.056 32.544-0.768 45.248 2.144 2.24 4.16 4.576 6.016 7.040 10.88 14.368 16.672 32.48 15.168 51.744 0 0.768-0.032 1.632-0.096 2.496v123.904c0 17.664 14.336 32 32 32s32-14.336 32-32z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/amithjayapraban/"
          target="_blank"
          className="link cursor-pointer rounded-[50%]  linkedin"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="none"
            fill="var(--fontcolor)"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href="https://codepen.io/amithjayapraban"
          target="_blank"
          className=""
          data-tooltip="Codepen"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="var(--fontcolor)"
            viewBox="0 0 768 768"
          >
            <title />
            <g id="icomoon-ignore" />
            <path d="M168.192 384l-72.192 50.528v-101.088zM672 434.528l-72.192-50.528 72.192-50.528zM544 423.072l102.784 71.968-230.784 149.984v-132.384zM279.808 384l104.192-72.928 104.192 72.928-104.192 72.928zM121.216 495.008l102.784-71.936 128 89.6v132.384zM401.824 37.408c-5.088-3.424-11.232-5.408-17.824-5.408s-12.736 1.984-17.824 5.408l-319.008 207.36c-3.584 2.24-6.816 5.216-9.376 8.896-4 5.696-5.888 12.256-5.792 18.72v223.232c-0.064 5.888 1.472 11.84 4.736 17.152 1.312 2.176 2.912 4.192 4.768 6.016 1.504 1.504 3.2 2.848 5.056 4.064l0.608 0.384 319.008 207.36c5.088 3.424 11.232 5.408 17.824 5.408s12.736-1.984 17.824-5.408l319.008-207.36c3.584-2.208 6.816-5.184 9.376-8.864 4-5.696 5.856-12.256 5.792-18.752v-223.232c0.064-5.888-1.472-11.84-4.736-17.152-1.312-2.144-2.912-4.192-4.768-6.016-1.504-1.504-3.2-2.848-5.056-4.064l-0.608-0.384zM416 255.328v-132.352l230.784 150.016-102.784 71.936zM352 122.976v132.384l-128 89.6-102.784-71.968z" />
          </svg>
        </a>
        <a
          href="https://instagram.com/amithjayapraban"
          target="_blank"
          className=""
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 512 512"
            fill="var(--fontcolor)"
          >
            <path d="M256 46.1c68.4 0 76.5 0.3 103.4 1.5 25 1.1 38.5 5.3 47.5 8.8 11.9 4.6 20.5 10.2 29.4 19.1 9 9 14.5 17.5 19.2 29.4 3.5 9 7.7 22.6 8.8 47.5 1.2 27 1.5 35.1 1.5 103.4s-0.3 76.5-1.5 103.4c-1.1 25-5.3 38.5-8.8 47.5-4.6 11.9-10.2 20.5-19.1 29.4-9 9-17.5 14.5-29.4 19.2-9 3.5-22.6 7.7-47.5 8.8-27 1.2-35.1 1.5-103.4 1.5s-76.5-0.3-103.4-1.5c-25-1.1-38.5-5.3-47.5-8.8-11.9-4.6-20.5-10.2-29.4-19.1-9-9-14.5-17.5-19.2-29.4-3.5-9-7.7-22.6-8.8-47.5-1.2-27-1.5-35.1-1.5-103.4s0.3-76.5 1.5-103.4c1.1-25 5.3-38.5 8.8-47.5 4.6-11.9 10.2-20.5 19.1-29.4 9-9 17.5-14.5 29.4-19.2 9-3.5 22.6-7.7 47.5-8.8 26.9-1.2 35-1.5 103.4-1.5zM256 0c-69.5 0-78.2 0.3-105.5 1.5-27.2 1.2-45.9 5.6-62.1 11.9-16.9 6.6-31.2 15.3-45.4 29.6-14.3 14.2-23 28.5-29.6 45.3-6.3 16.3-10.7 34.9-11.9 62.1-1.2 27.4-1.5 36.1-1.5 105.6s0.3 78.2 1.5 105.5c1.2 27.2 5.6 45.9 11.9 62.1 6.6 16.9 15.3 31.2 29.6 45.4 14.2 14.2 28.5 23 45.3 29.5 16.3 6.3 34.9 10.7 62.1 11.9 27.3 1.2 36 1.5 105.5 1.5s78.2-0.3 105.5-1.5c27.2-1.2 45.9-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.3-29.5s23-28.5 29.5-45.3c6.3-16.3 10.7-34.9 11.9-62.1 1.2-27.3 1.5-36 1.5-105.5s-0.3-78.2-1.5-105.5c-1.2-27.2-5.6-45.9-11.9-62.1-6.3-17-15-31.3-29.3-45.5-14.2-14.2-28.5-23-45.3-29.5-16.3-6.3-34.9-10.7-62.1-11.9-27.4-1.3-36.1-1.6-105.6-1.6v0z" />
            <path d="M256 124.5c-72.6 0-131.5 58.9-131.5 131.5s58.9 131.5 131.5 131.5 131.5-58.9 131.5-131.5c0-72.6-58.9-131.5-131.5-131.5zM256 341.3c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3z" />
            <path d="M423.4 119.3c0 16.955-13.745 30.7-30.7 30.7s-30.7-13.745-30.7-30.7c0-16.955 13.745-30.7 30.7-30.7s30.7 13.745 30.7 30.7z" />
          </svg>
        </a>
      </div>
      {/* <p className="opacity-50 cursor-default">{text}</p>
        <Link href={rpath}>
          <img src="/chevron-right-lg.svg" alt="enter" />
        </Link> */}
    </div>
  );
}
