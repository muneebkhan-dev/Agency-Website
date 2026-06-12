import React from "react"

const About = () => {
  return (
    <section className='bg-[#222831] min-h-screen px-10 mx-auto'>
      <div className='max-w-7xl w-full'>
        <div className="w-full flex ">
          <div className="w-1/2">
            <h3 className="text-base text-[#00D0B0] font-bold ">About us</h3>
            <p className="font-playfair font-semibold text-white text-3xl">
              We build websites based on client needs and of course the target
              market, because that's our expertise
            </p>
            <div className="font-dm text-white">
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
          </div>
          <div className="w-1/2">
            <img className="" src="/public/images/Group 48095475.png" alt="" />
          </div>
        </div>
        <div className="">
        <img src="/public/images/Group 14.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About
