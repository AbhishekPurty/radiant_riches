import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";

const Topbar = () => {
  return (
    <div className="pb-1">
      <hr/>
      <div className="flex gap-3 p-2 justify-between">
        <div>
            <ul className="flex gap-2 md:gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <AiOutlineCheckCircle />
                <li>Last Updated  -  February 22, 2020</li>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineInfoCircle />
                <li>Advertising Disclosure</li>
                </div>
            </ul>
        </div>
        <div className="flex items-center gap-2">
            Top Relevant
            <SlArrowDown className="cursor-pointer"/>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Topbar
