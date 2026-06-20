import React from 'react'
import Hero from './Components/Hero'
import ServicesSection from './Components/ServicesSection'
import AboutSection from './Components/AboutSection'
import Teams from './Components/Teams'
import ContactSection from './Components/ContactSection'


const Home = () => {
  return (
    <>
    <Hero/>
    <ServicesSection/>
    <AboutSection/>
    <Teams/> 
    <ContactSection/>
    </>
  )
}

export default Home