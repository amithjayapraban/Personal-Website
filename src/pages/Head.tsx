import React from "react";
import { Link } from "react-router-dom";
import Transition from "./Transition";
import { useNavigate } from "react-router-dom";

export default function Head({ Changetheme }: any) {
  const nav = useNavigate();
  let path = window.location.pathname;

  if (path === "/about") {
    document.querySelector(".about")?.classList.add("text-link");
    document.querySelector(".about")?.classList.add("scale-[1.1]");
  }
  if (path === "/") {
    document.querySelector(".about")?.classList.remove("text-link");
    document.querySelector(".about")?.classList.remove("scale-[1.1]");
  }
  return (
    <div className="head  p-7 md:p-10 md:px-[160px] md:py-[30px]  ">
      <p className="name self-start text-1xl  md:text-xl">
        {" "}
        <Link to="/"> AMITH JAYAPRABAN</Link>{" "}
      </p>
      <a
        className="about transition-[1] self-center md:hover:text-link md:hover:scale-[1.1] text-sm md:text-lg cursor-pointer"
        onClick={() => {
          nav("/about");
        }}
      >
        About{" "}
      </a>
      <p
        onClick={Changetheme}
        className="toggle self-center scale-[.8] hover:scale-[.9] md:hover:scale-[1.1] md:scale-[1] md:ml-[2rem] md:mr-2"
      >
        <svg
          id="sun"
          className="tog sun   "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
        </svg>
        <svg
          id="moon"
          className="tog moon  "
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M22 12c0 5.514-4.486 10-10 10-4.826 0-8.864-3.436-9.797-7.99 3.573.142 6.903-1.818 8.644-5.013 1.202-2.206 1.473-4.679.83-6.992 5.608-.194 10.323 4.338 10.323 9.995zm-10-12c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z" />
        </svg>
      </p>
    </div>
  );
}
