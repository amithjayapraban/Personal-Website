import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Head({ Changetheme, theme }: any) {
  const nav = useNavigate();
  let path = window.location.pathname;
  useEffect(() => {
    if (path === "/about") {
      document.querySelector(".about")?.classList.add("text-link");
      document.querySelector(".back")?.classList.remove("hidden");
    }
    if (path === "/") {
      document.querySelector(".about")?.classList.remove("text-link");
      document.querySelector(".back")?.classList.add("hidden");
    }
  }, [path]);

  useEffect(() => {
    if (theme) {
      if (theme === "dark") {
        document.querySelector(".mode")?.classList.add("left-[49.99%]");
        document.querySelector(".mode")?.classList.remove("left-[1%]");
      } else {
        document.querySelector(".mode")?.classList.remove("left-[49.99%]");
        document.querySelector(".mode")?.classList.add("left-[1%]");
      }
    }
  }, [theme]);

  return (
    <div className="head bg-primary p-7 md:p-10 md:px-[160px] md:py-[30px]  ">
      <a className="back px-1 max-w-[max-content] rounded-[4px] hidden font-[600] outline-none self-center justify-self-start text-sm md:text-lg">
        {" "}
        <Link to="/">
          <svg
            clip-rule="evenodd"
            fill="var(--fontcolor)"
            width="20"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
          {/* AMITH <br/> */}
          {/* <p className="text-xs font-[300]">JAYAPRABAN</p> */}
        </Link>{" "}
      </a>
      <a
        className="about  rounded-[4px]   outline-none font-[500] transition-[1] self-center   text-sm md:text-lg cursor-pointer"
        onClick={() => {
          nav("/about");
        }}
      >
        About{" "}
      </a>
      <div
        onClick={Changetheme}
        className="text-gray-600  self-center min-w-[40px] max-w-[40px] h-[20px]  relative rounded-[150px]    bg-gray-100   ml-[2rem] md:mr-2"
      >
        <div className="absolute   min-w-[20px] max-w-[20px] left-[1%] min-h-[20px] max-h-[20px] outline-none border-[1px] bg-primary  shadow top-0 transition-[1] z-50  mode rounded-full  text-gray-800 "></div>
      </div>
    </div>
  );
}
