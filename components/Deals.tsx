import React from 'react'
import Deal from './Deal'
import img1 from '@/public/pic.jpg'

const Deals = () => {
  return (
    <div>
        <Deal
            id= {1} 
            logo={img1}
            img_name = "Builder 1"
            title="WixPro 72-Inch Responsive Website Builder" 
            description="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" 
            highlights="Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
            r_value={9.8}
            rating="Exceptional"
            star={5}
        />
        <Deal
            id= {2} 
            logo={img1}
            img_name = "Builder"
            title="SiteCraft 68-Inch Ultimate Web Design Studio" 
            description="Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)" 
            highlights="Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
            r_value={9.5}
            rating="Excellent"
            star={4.5}
        />
        <Deal
            id= {3} 
            logo={img1} 
            img_name = "Builder 1"
            title="WixPro 72-Inch Responsive Website Builder" 
            description="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" 
            highlights="Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
            r_value={9.8}
            rating="Exceptional"
            star={5}
        />
    </div>
  )
}

export default Deals