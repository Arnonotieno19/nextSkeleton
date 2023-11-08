import React from 'react'
import MainHero from '@/components/MainHero'
import ServiceSection from '@/components/ServiceSection'
import HeroCreative from '@/components/HeroCreative'
import Fintech from '@/components/Fintech'
import Footer from '@/components/Footer'

const Homepage = () => {
  return (
    <div>
      <MainHero/>
      <HeroCreative/>
      <ServiceSection/>
      <Fintech/>
      <Footer/>
    </div>
  )
}

export default Homepage