import React from 'react'
import Option from './Option'

const Options = () => {
  return (
    <div className="flex flex-wrap md:gap-4 pb-1">
      <Option title="Tools" />
      <Option title="AWS Builder" />
      <Option title="Start Build" />
      <Option title="Build Supplies" />
      <Option title="Tooling" />
      <Option title="BlueHosting" />
    </div>
  )
}

export default Options
