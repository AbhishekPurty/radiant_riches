import React from 'react'
import { SlArrowDown } from "react-icons/sl";

const Footer = () => {
  return (
    <div className=" bg-[#202731] h-96 text-white flex sm:flex-row flex-col justify-center md:gap-40 lg:gap-60 gap-12 p-10 m-2">
      <div className="flex md:gap-60 gap-12 justify-center">
        <div className="flex flex-col gap-3">
          <div className="text-lg uppercase">Categories</div>
          <div className="flex flex-col gap-3 font-thin">
              <a className="cursor-pointer">Web Builder</a>
              <a className="cursor-pointer">Hosting</a>
              <a className="cursor-pointer">Data Center</a>
              <a className="cursor-pointer">Robotics-Automation</a>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-lg uppercase">Contact</div>
          <div className="flex flex-col gap-3 font-thin">
              <a className="cursor-pointer">Privacy Policy</a>
              <a className="cursor-pointer">Terms of Service</a>
              <a className="cursor-pointer">Categories</a>
              <a className="cursor-pointer">About</a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        United States
        <SlArrowDown className="cursor-pointer"/>
      </div>
    </div>
  )
}

export default Footer
