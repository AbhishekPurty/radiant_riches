import React from 'react'
import Image from 'next/image'
import { SlArrowDown } from "react-icons/sl";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import Star from './Star';

interface Props{
    id: number
    logo: any
    img_name : string
    title: string
    description: string
    r_value : number
    rating : string
    star:number
}

const AltDeal = ({id, logo, img_name, title, description, r_value, rating, star}: Props) => {
  return (
    <div>
      <div className="md:flex bg-white my-5 rounded-lg pb-2 pr-2">
        <div>
          <div className="rounded-full border cursor-default bg-white py-2 px-4 -ml-5 w-fit h-fit mt-7">{id}</div>
          <div className="px-5 pb-3 flex items-center justify-center md:justify-start">
            <Image src={logo} alt={'pic'} width={200} height={200} objectFit="contain"></Image>
          </div>
          <div className="flex justify-center items-center">{img_name}</div>
        </div>
      <div className="p-4">
        <div className="pb-2">
            <b>{title}</b> - {description}
        </div>
        <div className="flex gap-2">
            <div className="bg-slate-200 px-2 rounded-md text-blue-700">26% off</div>
        </div>
        <div className="font-bold pb-2">Main Highlights</div>
        <div className="pl-4 pb-3">
            <div className="bg-orange-100 rounded-lg p-3 ">
                <div className="flex gap-2 pb-3">
                    <div className="bg-white rounded-md w-fit text-blue-500 px-2">9.9</div>
                    <div>Building Responsive</div>
                </div>
                <div className="flex gap-2 pb-3">
                    <div className="bg-white rounded-md w-fit text-blue-500 px-2">8.9</div>
                    <div>Cool</div>
                </div>
                <div className="flex gap-2">
                    <div className="bg-white rounded-md w-fit text-blue-500 px-2">8.9</div>
                    <div>Docs</div>
                </div>
            </div>
        </div>
        <div>
            <div>Why we love it</div>
            <div className="my-2">
                <div className="flex pb-1 items-center gap-2"><FaCheck className="bg-blue-200 text-sky-950 text-lg p-0.5 rounded-full" /> Documentation</div>
                <div className="flex pb-1 items-center gap-2"><FaCheck className="bg-blue-200 text-sky-950 text-lg p-0.5 rounded-full" /> Easy Use</div>
                <div className="flex pb-1 items-center gap-2"><FaCheck className="bg-blue-200 text-sky-950 text-lg p-0.5 rounded-full" /> Out of Box</div>
            </div>
        </div>
        <div className="text-blue-400 flex items-center gap-3">
          <button>Show more</button>
          <SlArrowDown className="cursor-pointer"/>
        </div>
        
      </div>
      <div className="flex flex-col justify-between">
        <div className=" bg-sky-100 rounded-md px-10 py-3 ml-10 mr-10 mb-16 flex flex-col items-center">
          <div className="text-4xl pb-3">{r_value}</div>
          <div className="pb-2">{rating}</div>
          <div>
            <Star stars={star}/>
          </div>
        </div>
        <button className="bg-blue-500 py-3 rounded-lg">View</button>
      </div>
    </div>
    </div>
  )
}

export default AltDeal
