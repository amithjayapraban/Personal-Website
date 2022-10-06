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
      tags: ["React", "Express", " Socket.io", " MongoDB"],
      link: "https://sorah.vercel.app",
    },
    {
      name: "Nota",
      desc: "Note Taking App",
      tags: ["React", "DraftJs", " Supabase"],
      link: "https://nota-nu.vercel.app",
    },
  ];

  return (
    <Transition>
      <div className="flex flex-col  h-[100vh]  home  overflow-y-scroll relative  md:px-[160px] px-7  w-[100vw]">
        <section
          className="min-h-[50vh] md:min-h-[100vh] bg-gray-00   flex flex-col  justify-center"
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
            <div className=" flex  m-0 flex-col md:mb-20 cursor-default md:items-start items-center ">
              <div className="flex flex-col gap-0 w-[max-content] items-start">
                <p className="md:ml-[1%] hello mt-[5%] md:mt-0  ml-[1%] lg:ml-[1.3%] font-[600] md:font-[600] text-sm md:text-2xl justify-self-end ">
                  {" "}
                  Hey👋 I'm Amith Jayapraban
                </p>
                <p className="lg:text-[150px] justify-self-start mt-[-5%] md:mt-0  md:text-8xl outline-none p-0  frontend font-[700]  text-[65px]  text-fontcolor">
                  Frontend
                </p>
                <p className="developer  mt-[-5%] md:mt-0 justify-self-start font-[700] md:ml-[.5%] lg:ml-[.7%] ml-[1%] frontend md:text-3xl text-2xl lg:text-5xl">
                Developer
              </p>
              </div>

             
            </div>
          </motion.div>
        </section>

        <section className="min-h-[50vh] md:min-h-[100vh] md:py-[8rem] py-[2rem] bg-gray-00 md:mt-0   flex flex-col items-center md:gap-2  gap-2  ">
          <p className=" md:mb-3 mt-3 self-start font-[700] text-fontcolor md:text-4xl text-[28px] lg:text-5xl">
            Projects
          </p>
          {projects.map((i) => {
            return (
              <a
                href={`${i.link}`}
                target="_blank"
                className="rounded transition-[1]   w-[100%] md:self-start md:w-[60%]"
              >
                <div className="  md:h-[200px] h-[130px]  z-10 rounded self-start  text-fontcolor text-xs flex flex-col justify-center   py-5 md:px-3 px-3 text-left  ">
                  <h1 className="md:text-3xl text-2xl projectname font-[700] text-link ">
                    {i.name}{" "}
                  </h1>{" "}
                  <p className="text-fontcolor text-sm font-[600] mb-2">
                    {i.desc}
                  </p>{" "}
                  <div className="flex gap-2">
                    {i.tags.map((t: any) => {
                      return (
                        <div className="bg-card fronten p-1  rounded-[4px]">
                          {t}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </section>
      </div>
    </Transition>
  );
}
export default Home;
