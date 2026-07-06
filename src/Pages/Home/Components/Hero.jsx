import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"

const Hero = () => {
  return (
    <section className='relative flex bg-[#222831]'>
      <div className='cont-1 relative min-h-110 md:min-h-110 lg:min-h-105 mx-auto'>
        <div className='hero-sec max-w-7xl px-8 lg:px-15 mx-auto mt-5 md:mt-13 lg:mt-10 w-full flex items-center md:text-center lg:text-start flex-col lg:flex-row text-[#FFFFFF] md:gap-2 lg:gap-20'>
          <div className='w-full md:2/3 lg:w-1/2'>
            <h1 className='heading text-4xl md:text-5xl lg:text-6xl leading-10 md:leading-15 lg:leading-17 font-playfair font-semibold '>
              We are <span className='text-[#00D0B0]'>always</span> there for
              all your needs
            </h1>
          </div>
          <div className=' md:w-2/3 lg:w-1/2 flex flex-col my-5 gap-8 md:gap-10'>
            <div className='para-1 font-dm font-medium text-sm md:text-base lg:text-base leading-6 lg:leading-7 text-white/70'>
              We are a remote design agency based in Montreal, working with
              clients around the world. As passionate designers, we love
              building products that are easy to use, accessible, engaging, and
              delightful.
            </div>
            <div className='button flex items-center justify-start md:justify-center lg:justify-start gap-15'>
              <span className='[word-spacing:8px] text-[#00D0B0] text-xs font-semibold tracking-[4px] uppercase underline'>
                / CONTACT US
              </span>
              <HiArrowLongRight className='text-[#00D0B0]' />
            </div>
          </div>
        </div>
        <div>
          <img
            className='absolute bottom-0 left-1/2 object-cover object-left md:object-center h-52 md:h-60 lg:h-70 w-full md:w-full lg:w-[80%] -translate-x-1/2 translate-y-1/2 md:translate-y-1/2 rounded-2xl lg:rounded-none'
            src='/public/images/unsplash_hCb3lIB8L8E.png'
            alt=''
          />
        </div>
      </div>
      <img
        className='hidden lg:flex absolute bottom-0 left-0 w-1/4 translate-y-1/2'
        src='/public/images/Rectangle 380.png'
        alt=''
      />
      <img
        src='/public/images/Rectangle 381.png'
        alt='decorator img'
        className='decorator-img md:hidden lg:hidden absolute w-1/2 -top-20 -right-30'
      />
    </section>
  )
}

export default Hero
