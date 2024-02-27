import React from 'react'

const ExSpecial = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-20 py-10 md:items-start">
      <div className="text-3xl">Sign up and get exclusive special deals</div>
      <div className="flex h-10">
        <input type="text" className=" w-40 sm:w-80" />
        <button className="bg-blue-500 p-1 w-24 text-white rounded-r-lg">Sign up</button>
      </div>
    </div>
  )
}

export default ExSpecial
