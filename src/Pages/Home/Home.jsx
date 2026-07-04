import React from "react"
import Hero from "./Components/Hero"
import ServicesSection from "./Components/ServicesSection"
import AboutSection from "./Components/AboutSection"
import Teams from "./Components/Teams"
import ContactSection from "./Components/ContactSection"

const Home = () => {
  return (
    <>
      <img
        className='hidden md:flex lg:flex absolute right-0 top-0 w-1/4 z-10'
        src='/public/images/Rectangle 377.png'
        alt=''
      />

      <Hero />
      <ServicesSection />
      <AboutSection />
      <Teams />
      <ContactSection />
    </>
  )
}

export default Home
