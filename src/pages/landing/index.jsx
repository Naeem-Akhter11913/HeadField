import React from 'react'
import Hero from './hero/Hero'
import Trusted from './trusted/Trusted'
import WeOffer from './WeOffer/WeOffer'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs'
import WorkShowcase from './WorkShow/WorkShowcase'
import Testimonials from './Testimonials/Testimonials'
import SubscribeSection from './Subscribe/SubscribeSection'

const MainLanding = () => {
  return (
    <div>
      <Hero />
      <Trusted />
      <WeOffer />
      <WhyChooseUs />
      <WorkShowcase />
      <Testimonials />
      <SubscribeSection />
    </div>
  )
}

export default MainLanding