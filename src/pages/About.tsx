import React from 'react';
import Transition from './Transition';
export default function About() {
  return (
    
      <Transition>
  <div className=' text-fontcolor h-[90vh] overflow-y-hidden  px-7  text-left text-sm md:text-sm grid  grid-flow-row grid-rows-[.5fr,1fr,.5fr] grid-cols-[.5fr,1fr,.5fr] '>
    <div className="flex flex-col row-start-2 col-start-2 justify-center items-center" >
         <div className='row-start-2 mr-8   h-[160px] md:self-start   flex '>
          <div className='w-[150px] mb-5 md:mb-10 h-[150px]  ml-[0px]   border-double border-[0px]  border-fontcolor box  '></div>
          
          <img className='z-10 w-[150px] translate-x-[-135px] translate-y-[15px] md:translate-y-[15px]  mb-5 md:mb-10 h-[150px]' src="/amith.jpeg" />
          </div>
        <div />
          
        <div className='row-start-2 mt-5 md:self-start  flex flex-col '  >
          <p className='  md:text-xl  text-link text-sm   '>Front-end developer from Kerala, India.</p>
          <p className=' mt-1 mb-1  text-xs md:text:sm ' >Passionate about Web and Photography.</p>
            {/* <p className=' col-start-2 col-end-3 px-7 text-left '>Currently pursuing MCA from College of Engineering, Trivandrum.</p>
           */}
        </div>
          

      <div className="row-start-2 self-start mt-3 col-start-2 ml-[0px] cursor-pointer col-end-3  flex justify-start">
       <a href="https://www.linkedin.com/in/amithjayapraban/" target='_blank' className='link cursor-pointer rounded-[50%] linkedin'>
       <img src="/linkedin.svg" /></a>
       
       <a href="https://github.com/amithjayapraban" target='_blank'  className='link ml-4 mr-4 github'>
       <img src="/github.svg" /></a> 
       
       <a href="https://instagram.com/amithjayapraban" target='_blank'  className='link insta'>
       <img src="/instagram.svg" /></a> 
       
      </div> 
    </div>
  </div>
      </Transition>
    
    
  )
}
