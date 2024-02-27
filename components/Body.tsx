import React from 'react'
import Topbar from './Topbar'
import Options from './Options'
import Address from './Address'
import Deals from './Deals'
import Rdeals from './Rdeals'
import ExSpecial from './ExSpecial'
import AltDeals from './AltDeals'

const Body = () => {
  return (
    <div className="w-full flex-col px-10 xl:px-72 pt-10 bg-slate-50">
      <div className="text-5xl pb-6">
        <h1>Best Website builder in the US</h1>
      </div>
      <Topbar />
      <Options />
      <Address />
      <Deals />
      <AltDeals />
      <Rdeals />
      <ExSpecial />
    </div>
  )
}

export default Body
