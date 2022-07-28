import React, { useEffect } from 'react'
// import './Home.css'
import Transition from './Transition';
import { motion } from "framer-motion";
function Home() {
    // const [news, setNews] = React.useState([]);
   
    const animationConfiguration = {
        initial: { scale: 0.8 },
        animate: { scale : 1 },
        exit: { scale : .6 },
    };
  return (
    <Transition>
    
   <div className=" p-10 grid grid-flow-row justify-center "> 
   <motion.div 
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .03 }}>
                  <div className=" flex flex-col cursor-default items-center justify-center">
                  <h1 className="md:text-8xl justify-self-center  text-5xl text-green  ">FRONTEND</h1>
                  <p className=" justify-self-center md:text-3xl">developer.</p> 
    </div></motion.div>
    <div className="  md:grid-cols-2 md:grid-rows-2 ">
                
    </div>
    <p className="project text-3xl mt-9"> Projects</p>
    <div className="projects flex  justify-center">
     404: <br></br>
     NOT_FOUND <br></br>
           
    </div>
   </div>
   
   </Transition> 
  )
    
}
 export default Home;