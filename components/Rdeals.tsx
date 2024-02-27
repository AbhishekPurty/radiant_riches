import React from 'react'
import Rdeal from './Rdeal'
import img1 from '@/public/pic.jpg'

const Rdeals = () => {
  return (
    <div>
      <div className="text-3xl flex items-center justify-center md:justify-start mt-20 mb-12">Related deals you might like for</div>
      <div className="flex gap-10 flex-col items-center md:flex-row">
        <Rdeal 
        logo={img1}
        title="Webbuilder1"
        description="Computer Modern Classic with wix support"
        dPrice={39.96}
        oPrice={49.96}
        discountPercent={20}
      />
      <Rdeal 
        logo={img1}
        title="Webbuilder1"
        description="Computer Modern Classic with wix support"
        dPrice={39.96}
        oPrice={49.96}
        discountPercent={20}
      />
      <Rdeal 
        logo={img1}
        title="Webbuilder1"
        description="Computer Modern Classic with wix support"
        dPrice={39.96}
        oPrice={49.96}
        discountPercent={20}
      />
      </div>
      
    </div>
  )
}

export default Rdeals
