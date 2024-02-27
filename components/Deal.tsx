import React, { useState } from 'react'
import Image from 'next/image'
import { SlArrowDown } from "react-icons/sl";
import { GrTrophy } from "react-icons/gr";
import { IoDiamondOutline } from "react-icons/io5";
import Star from './Star';

interface Props{
    id: number
    logo: any
    img_name : string
    title: string
    description: string
    highlights: string
    r_value : number
    rating : string
    star: number
}

const Deal = ({id, logo, img_name, title, description, highlights, r_value, rating, star}: Props) => {
  return (
    <div className="md:flex bg-white my-5 rounded-lg pb-2 pr-2">
      <div className="">
        { id==1 ?
          <div className="-mt-3 -ml-2 -mr-2 text-white flex items-center gap-2 max-w-fit text-lg rounded-r-md px-2 py-1 bg-orange-500"><GrTrophy />Best Choice</div>
          :
          id==2 ?
          <div className="-mt-3 -ml-2 -mr-2 text-white flex items-center gap-2 max-w-fit text-lg rounded-r-md px-2 py-1 bg-orange-500"><IoDiamondOutline />Best Value</div>
          :
          <div></div>
        }
        <div className="rounded-full border cursor-default bg-white py-2 px-4 -ml-5 w-fit h-fit mt-7">{id}</div>
        <div className="px-5 pb-3 flex items-center justify-center md:justify-start">
          <Image src={logo} alt={'pic'} width={400} height={400}objectFit="contain"></Image>
        </div>
        <div className="flex justify-center items-center">{img_name}</div>
      </div>
      <div className="p-4">
        <div className="pb-2">
            <b>{title}</b> - {description}
        </div>
        <div className="font-bold pb-2">Main Highlights</div>
        <div className="pl-2 pb-3">[What You Get]: {highlights}</div>
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
  )
}

export default Deal
