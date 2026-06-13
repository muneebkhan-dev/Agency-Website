import React from "react"

const About = () => {
  return (
    <section className='w-full bg-[#222831] min-h-screen py-20'>
      <div className='w-full flex flex-col gap-20'>
        <div className="max-w-7xl mx-auto flex px-10 justify-between gap-10">
          <div className="w-2/5 flex flex-col gap-8">
            <h3 className="text-base text-[#00D0B0] font-bold ">About us</h3>
            <p className="font-playfair font-semibold text-white text-3xl">
              We build websites based on client needs and of course the target
              market, because that's our expertise
            </p>
            <div className="font-dm text-white/70 flex flex-col gap-8 text-base ">
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
              <button className="font-poppins font-extrabold text-xs bg-[#00D0B0] text-white px-13 py-5">HIRE US</button>
            </div>
          </div>
          <div className="img w-1/2">
            <img className="" src="/public/images/Group 48095475.png" alt="" />
          </div>
        </div>
        <div className="slid-bar">
        <img src="/public/images/Group 14.png" alt="image" className="w-full object-cover " />
        </div>
      </div>
      
    </section>
  )
}

export default About
