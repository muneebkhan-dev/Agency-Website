import React from 'react'
import Hero from './Components/Hero'
import Services from '../Services'
import About from '../About'
import Teams from './Components/Teams'
import Contact from '../Contact'


const Home = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <About/>
    <Teams/> 
    <Contact/>
    </>
  )
}

export default Home