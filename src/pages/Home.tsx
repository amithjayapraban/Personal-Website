import React, { useEffect } from 'react'
// import './Home.css'
import Transition from './Transition';
import { motion } from "framer-motion";
import Foot from './Foot';
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
    <div className='flex flex-col md:px-[160px] px-7 '>
      <section className="md:min-h-[80vh] min-h-[50vh] flex flex-col justify-center" id='section1' onScroll={handleScroll}> 
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
      

    <section className="md:min-h-[50vh] min-h-[40vh]  flex flex-col  ">
          <h1 className='text-sm mb-3 cursor-pointer md:text-xl'>Projects</h1>     
          <div className='flex flex-col  md:flex-row'>



      <a href="https://sorah-5c20wqrjh-amithjayapraban.vercel.app" target="_blank" className='flex  '>
        <div className='w-[200px] mb-5 md:mb-10 h-[200px]  ml-[0px]   self-center justify-self-center md:justify-self-start border-double border-[0px]  border-fontcolor boxes2   '>
        </div>
        <div className='z-10 translate-x-[-190px] text-gray-400 text-xs flex flex-col justify-center bg-cyan  translate-y-[10px] mb-5 p-5 text-left md:mb-10 h-[200px] w-[200px] '><h1 className='text-xl text-blue '>Sorah </h1> <p className='text-fend mb-2'>Chat App</p> <p className=''>#React #Express #Socket.io #MongoDB</p></div>
      </a>
           
            
            {/* <div className='flex '>
        <div className='w-[200px] mb-5 md:mb-10 h-[200px]  ml-[0px]  self-center justify-self-center md:justify-self-start border-double border-[0px]  border-fontcolor boxes  '>
        </div>
          <img className='z-10 translate-x-[-170px] translate-y-[30px] mb-5 md:mb-10 h-[200px] w-[200px] ' src="/public/S.png" />
            </div> */}


       
          </div>
    </section>
    
    <Foot  />
   
    </div>
   </Transition> 
  )
    
}
 export default Home;