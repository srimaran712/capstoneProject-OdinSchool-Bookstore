import React from 'react'
import HeroSection from '../components/HeroSection'
import Books from '../components/Books'


const HomePage = () => {
  return (
    <div className="mx-2 md:mx-5 py-4 mt-2 ">
      <HeroSection/>
      <Books/>
    </div>
  )
}

export default HomePage
