import React from 'react';
import { Link } from 'react-router-dom';
import Transition from './Transition';
export default function Foot() {
  return (
   
    <div className="flex links md:mb-3 mb-1 gap-3 self-center foot text-[14px]  justify-center ">
    
       <a href="https://www.linkedin.com/in/amithjayapraban/" target='_blank' className=' transition  link  linkedin'>
       Linkedin
       </a>
       <a href="https://github.com/amithjayapraban" target='_blank'  className='link   github'>
       Github
       </a> 
       <a href="https://instagram.com/amithjayapraban" target='_blank'  className='link  insta'>
       Instagram
       </a> 
       <a href="https://codepen.io/amithjayapraban" target='_blank'  className='link insta'>
       Codepen
       </a> 
       </div> 
  )
}
