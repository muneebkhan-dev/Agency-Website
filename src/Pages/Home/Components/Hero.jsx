import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"

const Hero = () => {
  return (
    <section className='relative flex bg-[#222831]'>
      <div className=" mx-auto relative min-h-100">
      <div className='max-w-7xl px-15 mx-auto mt-10 w-full flex text-[#FFFFFF] gap-20'>
        <div className='w-1/2'>
          <h1 className="text-5xl leading-18 font-playfair font-semibold">We are <span className="text-[#00D0B0]">always</span> there for all your needs</h1>
        </div>
        <div className='w-1/2 flex flex-col my-5 gap-8'>
          <div className="font-dm font-medium text-base leading-7 text-white/70">
            We are a remote design agency based in Montreal, working with
            clients around the world. As passionate designers, we love building
            products that are easy to use, accessible, engaging, and delightful.
          </div>
          <div className="flex items-center gap-15">
            <span className="[word-spacing:8px] text-[#00D0B0] text-xs font-semibold tracking-[4px] uppercase underline">/ CONTACT US</span>
            <HiArrowLongRight className="text-[#00D0B0]" />
          </div>
        </div>
      </div>
        <img className="absolute bottom-0 right-35 w-[80%] translate-y-1/2" src="/public/images/unsplash_hCb3lIB8L8E.png" alt="" />
      </div>
      <img className="hidden md:flex lg:flex absolute bottom-0 left-0 w-1/4 translate-y-1/2" src="/public/images/Rectangle 380.png" alt="" />
          </section>
  )
}

export default Hero
