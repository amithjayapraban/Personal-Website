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
    <div className="w-full absolute bottom-8  text-fontcolor font-medium flex items-end justify-end gap-3 z-40   px-4  ">
      <div className="flex justify-between  items-center rounded bg-white p-4 border w-full transition-[1] ">
        <p className="opacity-50 cursor-default">{text}</p>
        <Link href={rpath}>
          <img src="/chevron-right-lg.svg" alt="enter" />
        </Link>
      </div>
    </div>
  );
}
