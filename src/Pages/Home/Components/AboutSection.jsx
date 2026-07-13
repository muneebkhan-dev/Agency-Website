import React from 'react'

const AboutSection = () => {
  return (
    <section className='relative w-full bg-[#222831] lg:min-h-screen py-20 lg:py-30 overflow-hidden'>
      <div className='w-full flex flex-col gap-20 '>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row px-5 md:px-10 lg:px-10 items-center md:justify-between lg:justify-between gap-15 z-10'>
          <div className='about-content md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-start lg:items-start text-center md:text-start lg:text-start gap-4 md:gap-5 lg:gap-8'>
            <h2 className='text-base text-[#00D0B0] font-bold '>About us</h2>
            <h3 className='font-playfair font-semibold text-white text-xl md:text-2xl lg:text-3xl'>
              We build websites based on client needs and of course the target
              market, because that's our expertise
            </h3>
            <div className='font-dm py-4 md:py-0 lg:py-0 text-white/70 flex flex-col gap-6 md:gap-5 lg:gap-8 md:text-sm lg:text-base '>
              <p>
                We create delightful digital experiences that make life simpler
                and more enjoyable. We create enterprise software that has the
                polished, snappy feel of the best consumer apps.
              </p>
              <p>
                From Slack to Facebook, we team up with marketing departments of
                large companies and startups to deliver award‑winning websites.
              </p>
            </div>
            <div>
              <button className='font-poppins font-bold lg:font-extrabold text-base md:text-xs lg:text-xs bg-[#00D0B0] text-white px-15 md:px-10 lg:px-13 py-4 md:py-3 lg:py-5'>
                HIRE US
              </button>
            </div>
          </div>
          <div className='img w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center lg:flex-none'>
            <img className='' src='/public/images/Group 48095475.png' alt='' />
          </div>
        </div>
        <div className='slid-bar'>
          <img
            src='/public/images/Group 14.png'
            alt='image'
            className='w-full h-50 md:h-auto lg:h-auto object-cover '
          />
        </div>
      </div>
      <img
        src='/public/images/Rectangle 381.png'
        alt='decorator img'
        className='hidden md:flex lg:flex absolute w-1/3 -top-30 right-0'
      />
      <img
        src='/public/images/Rectangle 381 (2).png'
        alt='decorator img'
        className='hidden md:flex lg:flex absolute w-1/3 bottom-50 left-0'
      />
    </section>
  )
}

export default AboutSection