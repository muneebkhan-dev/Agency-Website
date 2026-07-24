import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section className='relative min-h-[90vh] md:min-h-[80vh] lg:min-h-[90vh] px-2 md:px-10 lg:px-20 mx-auto flex justify-center'>
      <div className='max-w-7xl bg-[#222831] w-full flex-1 flex flex-col md:flex-row lg:flex-row px-3 md:px-0 lg:px-0'>
        <div className="hidden md:flex lg:flex flex-1">

        </div>
        <div className="contact-sec flex-1 md:flex-3 lg:flex-2 flex items-center md:items-start lg:items-start pt-10 md:p-0 lg:p-0 flex-col justify-center gap-7 lg:gap-15 w-full text-center md:text-start lg:text-start">
          <h2 className='font-montserrat text-xs font-semibold text-[#00D0B0] tracking-[6px]'>
            / CONTACT US
          </h2>
          <h3 className='font-playfair font-semibold text-white text-3xl md:text-5xl lg:text-5xl tracking-tight leading-10 md:leading-14 lg:leading-17'>
            Have you decided to work on a project with us?
          </h3>
            <Link to="/contact" className='w-3/4 md:w-2/3 lg:w-2/3 flex justify-center'>
          <img src='/images/Group 3312.png' alt='lets-talk' className="w-full transition-all duration-300 hover:scale-105" />
          </Link>
        </div>
        <div className="flex-1 md:flex-2 lg:flex-1 flex justify-center items-end px-10">
          <img src="/images/design-chair.png" alt="chair" className="h-70 md:h-85 lg:h-85" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection