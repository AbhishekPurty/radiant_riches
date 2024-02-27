import React from 'react'

interface Props {
    title : string
}

const Option = ({title}:Props) => {
  return (
    <div className="m-1 hover:tracking-wide duration-300 bg-white rounded-md px-3 py-2 m-w-fit cursor-pointer">
        {title}
    </div>
  )
}

export default Option
