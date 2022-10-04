import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "./Transition";
import { useNavigate } from "react-router-dom";

export default function Head({ Changetheme,theme }: any) {
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
  useEffect(()=>{
    if(theme){
    if(theme==='dark'){
      document.querySelector(".mode")?.classList.add("left-[49%]");
      document.querySelector(".mode")?.classList.remove("left-[0%]");
   
    
  }else{
    document.querySelector(".mode")?.classList.remove("left-[49%]");
    document.querySelector(".mode")?.classList.add("left-[0%]");
  }
}

  },[theme])
 

  return (
    <div className="head  p-7 md:p-10 md:px-[160px] md:py-[30px]  ">
      <p className="name font-[700] outline-none self-center text-sm md:text-2xl">
        {" "}
        <Link to="/"> AMITH JAYAPRABAN</Link>{" "}
      </p>
      <a
        className="about outline-none font-[600] transition-[1] self-center md:hover:text-link  text-sm md:text-lg cursor-pointer"
        onClick={() => {
          nav("/about");
        }}
      >
        About{" "}
      </a>
      <div
        onClick={Changetheme}
        className="text-gray-600 self-center min-w-[40px] h-[20px]  relative rounded-[150px]    bg-gray-200   md:ml-[2rem] md:mr-2"
      >
       <div className="absolute min-w-[20px] left-[0%] h-[20px]    shadow top-0 transition-[1] z-50  mode rounded-[150px]  text-gray-800 bg-white"></div>
       
       
      </div>
    </div>
  );
}
