import React from 'react'
import img1 from '@/public/pic.jpg'
import AltDeal from './AltDeal'

const AltDeals = () => {
  return (
    <div>
      <AltDeal
            id= {4} 
            logo={img1}
            img_name = "CDK"
            title="CDK Resposive Builder"
            description="An extensive library of widgets and apps, and detailed step-by-step guides" 
            r_value={9.1}
            rating="Very Good"
            star={4}
        />
    </div>
  )
}

export default AltDeals
