import React from 'react'
import HeroService from './heroService/HeroService'
import BrandingWorks from './BrandingWorks/BrandingWorks'
import OurService from './ourService/OurService'
import './index.css'

const Service = () => {
  return (
    <>
        <HeroService />
        <BrandingWorks />
        <OurService />
    </>
  )
}

export default Service