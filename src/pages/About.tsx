import React from 'react';
import Transition from './Transition';
export default function About() {
  return (
    
      <Transition>
      <div className=' text-fontcolor h-[90vh] overflow-y-hidden  px-7  text-left text-sm md:text-sm grid  grid-flow-row grid-rows-[auto,auto,auto] '>
        <div className='col-start-2 row-start-2  col-end-3 flex'>
        <div className='w-[200px] mb-5 md:mb-10 h-[200px]  ml-[0px]   justify-self-start border-double border-[0px]  border-fontcolor boxes  '>
        </div>
          <img className='z-10 w-[200px] translate-x-[-185px] translate-y-[15px] mb-5 md:mb-10 h-[200px]' src="/public/amith.jpeg" />
          </div>
          <div className='row-start-2 self-center mt-[12rem]  ml-[-20px] col-start-2 col-end-3'  >
          <p className=' col-start-2 md:text-xl text-link text-lg col-end-3 px-7 text-left  '>Front-end developer from Kerala, India.</p>
          <p className=' col-start-2 mt-1 mb-1 col-end-3 px-7 text-left ' >Passionate about Web and Photography.</p>
            {/* <p className=' col-start-2 col-end-3 px-7 text-left '>Currently pursuing MCA from College of Engineering, Trivandrum.</p>
           */}
          </div>
          <div className="self-end row-start-2  col-start-2 ml-[10px] cursor-pointer col-end-3  flex justify-start">
       <a href="https://www.linkedin.com/in/amithjayapraban/" target='_blank' className='link cursor-pointer rounded-[50%] linkedin'>
       <img src="/public/linkedin.svg" />
       </a>
       <a href="https://github.com/amithjayapraban" target='_blank'  className='link ml-4 mr-4 github'>
       <img src="/public/github.svg" />
       </a> 
       <a href="https://instagram.com/amithjayapraban" target='_blank'  className='link insta'>
       <img src="/public/instagram.svg" />
       </a> 
       </div> 
        </div>
      </Transition>
    
    
  )
}
