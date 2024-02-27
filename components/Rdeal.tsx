import React from 'react'
import Image from 'next/image'

interface Props{
    logo: any
    title: string
    description: string
    dPrice : number
    oPrice: number
    discountPercent: number
}

const Rdeal = ({logo, title, description, dPrice, oPrice, discountPercent}: Props) => {
  return (
    <div className="bg-white rounded-lg w-fit pt-10 p-5 flex flex-col">
      <div className="mb-10 flex justify-center">
        <Image src={logo} alt={'pic'} width={150} height={150}></Image>
      </div>
      <div className="flex gap-2">
        <div className="bg-slate-200 px-2 rounded-md text-blue-700">20% off</div>
        <div className="bg-slate-200 px-2 rounded-md text-blue-700">Limited time</div>
      </div>
      <div className="font-semibold text-lg flex justify-center">{title}</div>
      <div className="mb-3">{description}</div>
      <div className="flex gap-3 items-baseline mb-3">
        <div className="text-2xl">${dPrice}</div>
        <div className=" text-slate-400">${oPrice}</div>
        <div className="text-red-500">({discountPercent}% off)</div>
      </div>
      <button className="bg-blue-500 py-3 rounded-lg">View Deal</button>
    </div>
  )
}

export default Rdeal
