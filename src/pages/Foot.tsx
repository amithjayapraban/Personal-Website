import React from 'react';
import { Link } from 'react-router-dom';
export default function Foot() {
  return (
    
    <div className="flex transition-[1] links mb-3 self-center justify-center ">
   
       <a href="https://www.linkedin.com/in/amithjayapraban/" target='_blank' className='link text-sm hover:text-[15px] linkedin'>
       Linkedin 
       </a>
       <a href="https://github.com/amithjayapraban" target='_blank'  className='link text-sm ml-3 mr-3 hover:text-[15px] github'>
       Github
       </a> 
       <a href="https://instagram.com/amithjayapraban" target='_blank'  className='link hover:text-[15px] text-sm insta'>
       Instagram
       </a> 
       
       </div> 
  )
}
