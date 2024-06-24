import React from 'react'
import { FaApple } from "react-icons/fa6";
import { SiAcer } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiLenovo } from "react-icons/si";

function CompanyIcons() {
  return (
    <div className='flex justify-center mt-10 md:mt-32'>
      <div className='flex flex-wrap justify-center gap-5 md:gap-10 text-white'>
      <div className='text-5xl md:text-8xl shadow-lg bg-red-500 p-3 rounded-md'><SiAcer/></div>
      <div className='text-5xl md:text-8xl shadow-lg bg-red-500 p-3 rounded-md'><SiIntel/></div>
      <div className='text-5xl md:text-8xl shadow-lg bg-red-500 p-3 rounded-md'><SiDell/></div>
      <div className='text-5xl md:text-8xl shadow-lg bg-red-500 p-3 rounded-md'><SiLenovo/></div>
      <div className='text-5xl md:text-8xl shadow-lg bg-red-500 p-3 rounded-md'><FaApple/></div>
      </div>
    </div>
  )
}

export default CompanyIcons