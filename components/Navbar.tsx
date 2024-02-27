/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const ref = useRef<string | any>("");
  const[showMenu, setShowMenu ] = useState(false);

  function handleClick(e:any){
    if(e.target.contains(ref.current)){
      setShowMenu(false);
    }
  }

  return (
    <div>
      <div className="lg:pl-20 pl-5 flex w-full h-[10vh] bg-[#202731] text-white md:justify-center justify-between items-center md:gap-10 lg:gap-28">
        <div className="relative">
        <CiSearch className="absolute left-1 top-2 text-xl text-black" />
        <input className="rounded-md h-9 w-60 pl-7 text-black" type='search'/>
        </div>
        
        <ul className="sm:flex hidden gap-5 md:gap-10 lg:gap-16 items-center">
          <a className="cursor-pointer hover:tracking-wide duration-300">Categories</a>
          <a className="cursor-pointer hover:tracking-wide duration-300">Website Builder</a>
          <a className="cursor-pointer hover:tracking-wide duration-300">Today's deals</a>
        </ul>
        <div>
          <RiMenu3Line
            onClick={() => setShowMenu(true)}
            className="sm:hidden text-2xl flex justify-end mr-5 cursor-pointer"/>
        </div>
        {
          showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className="absolute top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <div className="w-[70%] h-full bg-[#202731] flex flex-col items-center px-4 py-10 relative">
                <IoMdClose 
                  onClick={() => setShowMenu(false)}
                  className="text-2xl hover:text-red-500 absolute top-7 right-4 cursor-pointer"
                />
                <div>
                  <ul className="flex flex-col gap-10 mt-16">
                    <a className="cursor-pointer">Categories</a>
                    <a className="cursor-pointer">Website Builder</a>
                    <a className="cursor-pointer">Today's deals</a>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
