import React, { useEffect } from 'react'
// import './Home.css'
import Transition from './Transition';
import { motion } from "framer-motion";
import Foot from './Foot';
import ScrollToTop from '../ScrollToTop';
function Home() {
  function handleScroll() {
    var a:any = document.getElementById('section1');
    
     
   }
   
    const animationConfiguration = {
        initial: { scale: 0.8 },
        animate: { scale : 1 },
        exit: { scale : .6 },
    };
   const projects=[{"name":'Sorah','desc':'MERN Stack Chat Application','img':'/public/S.png','link':''}]
  
  return (
    <Transition>
      
    <div className='flex flex-col md:mt-10 min-h-[90vh] mt-[5vh] overflow-hidden relative  md:px-[160px] px-7 '>
      <section className="md:min-h-[30vh] min-h-[30vh] mt-[6rem] md:mt-[7rem] flex flex-col  justify-center" id='section1' onScroll={handleScroll}> 
   <motion.div 
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .03 }}>
                  <div className=" flex flex-col mb-20 cursor-default items-center justify-center">
                  <h1 className="md:text-8xl frontend justify-self-center  text-5xl text-cyan">FRONTEND</h1>
                  <p className=" text-fontcolor justify-self-end md:text-3xl">developer.</p> 
          </div></motion.div>
      </section>
      

    <section className="md:min-h-[30vh] min-h-[30vh]  flex flex-col  ">
          <h1 className='text-sm mb-7 cursor-pointer md:opacity-0 self-center  md:text-xl'>Projects</h1>     
          <div className='flex flex-col  md:flex-row'>



      <a href="https://sorah-g9fexwdlr-amithjayapraban.vercel.app" target="_blank" className='flex flex-col md:flex-row md:mr-[0px] mr-[15px] '>
        <div className='w-[150px] mb-5 md:mb-10 h-[150px]  ml-[0px]   self-center justify-self-center md:justify-self-start border-double border-[0px]  border-fontcolor boxes2   '>
        <div className='z-10 self-start translate-x-[10px] text-white text-xs flex flex-col justify-center bg-blue  translate-y-[-145px] mb-5 p-5 text-left md:mb-10 h-[150px] w-[150px] '><h1 className='text-xl text-cyan '>Sorah </h1> <p className='text-silver-400 mb-2'>Chat App</p> <p className=''>#React<br></br> #Express <br></br>#Socket.io<br></br> #MongoDB</p></div>
              </div>
      
      </a>
           
            
            {/* <div className='flex '>
        <div className='w-[200px] mb-5 md:mb-10 h-[200px]  ml-[0px]  self-center justify-self-center md:justify-self-start border-double border-[0px]  border-fontcolor boxes  '>
        </div>
          <img className='z-10 translate-x-[-170px] translate-y-[30px] mb-5 md:mb-10 h-[200px] w-[200px] ' src="/public/S.png" />
            </div> */}


       
          </div>
    </section>
    {/* <div className="absolute bottom-0 left-0 right-0">
    <Foot  />
    </div> */}
    </div>
   </Transition> 
  )
    
}
 export default Home;