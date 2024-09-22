import React from 'react'
import heroImg from '../cover-image.png'

const HeroSection = () => {
  return (
    <div className=" md:mx-2 bg-primary-color px-2 py-2 flex shadow-md items-center justify-between">
      <div className="md:mx-10 mt-5 " >
        <h1 className="text-lgmd: text-white text-3xl font-bold tracking-wider font-Poppins py-4">Discover your Next favorite book on <br/><span className="">GrowthMind.</span></h1>
        <p className="text-md md:text-gray-300 font-Montserrat text-lg">Your next great read is just a click away!</p>
        <button className="text-md  md: text-white font-Poppins py-2 px-5 mt-5 border border-white-color rounded-xl font-medium">Shop now</button>
      </div>
      <div className="md:mx-10 mt-5">
        <img src={heroImg} alt='hero' style={{width:"300px",height:"300px"}}/>
      </div>
    </div>
  )
}

export default HeroSection
