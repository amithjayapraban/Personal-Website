import React, { useEffect } from "react";
// import './Home.css'
import Transition from "./Transition";
import { motion } from "framer-motion";
import Foot from "./Foot";
import ScrollToTop from "../ScrollToTop";
function Home() {
  function handleScroll() {
    var a: any = document.getElementById("section1");
  }

  const animationConfiguration = {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
    exit: { scale: 0.6 },
  };
  const projects = [
    {
      name: "Sorah",
      desc: "MERN Stack Chat Application",
      tags:"#React #Express #Socket.io #MongoDB",
      link: "https://sorah-g9fexwdlr-amithjayapraban.vercel.app",
    },
    {
      name: "Nota",
      desc: "Note Taking App",
      tags:"#React #DraftJs #Supabase",
      link: "https://nota-nu.vercel.app",
    },
  ];

  return (
    <Transition>
      <div className="flex flex-col  md:mt-4  mt-[7rem]  overflow-hidden relative  md:px-[160px] px-7  w-[100vw]">
        <section
          className="md:min-h-[30vh] min-h-[max-content]  md:mt-[7rem] flex flex-col  justify-center"
          id="section1"
          onScroll={handleScroll}
        >
          <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.03 }}
          >
            <div className=" flex flex-col md:mb-20 cursor-default items-center justify-center">
              <h1 className="md:text-8xl frontend justify-self-center  text-5xl text-cyan">
                FRONTEND
              </h1>
              <p className=" text-fontcolor justify-self-end md:text-3xl">
                developer.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="md:min-h-[30vh] mt-[4rem] md:mt-0  min-h-[30vh] flex flex-col items-center gap-3    ">
          {projects.map((i)=>{
            return (<a
              href={`${i.link}`}
              target="_blank"
              className="rounded bg-primary transition  w-[100%] md:w-[100%]"
            >
              <div className=" border-[2px] h-[130px]  border-card  z-10 rounded self-start  text-fontcolor text-xs flex flex-col justify-center   p-5 text-left  ">
                <h1 className="text-2xl text-link ">{i.name} </h1>{" "}
                <p className="text-silver-400 mb-2">{i.desc}</p>{" "}
                <p className="">{i.tags}</p>
              </div>
            </a>);
          })}
            
          
        </section>
      </div>
    </Transition>
  );
}
export default Home;
