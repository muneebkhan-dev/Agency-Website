import React from "react"
import { TiTick } from "react-icons/ti"
import { FaPalette } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaBolt } from "react-icons/fa6";



const About = () => {
  const cards = [
    {
      id: 1,
      icon: FaPalette ,
      title: "Modern Design",
      description:
        "We create clean, modern and visually appealing designs that help businesses establish a professional and trustworthy online presence.",
    },

    {
      id: 2,
      icon: MdDevices,
      title: "Responsive Layout",
      description:
        "Our websites are fully optimized for desktops, tablets and mobile devices, ensuring a seamless and consistent experience across every screen.",
    },

    {
      id: 3,
      icon: FaBolt,
      title: "Fast Performance",
      description:
        "We focus on speed and efficiency by building lightweight and optimized websites that load quickly and provide a smooth browsing.",
    }

    
  ]

  return (
    <section className='relative min-h-screen px-20 mx-auto flex justify-center'>
      <div className='max-w-7xl flex flex-col gap-10'>
        <div className='flex py-20 justify-between gap-10 '>
          <div className='w-2/5 flex flex-col gap-8'>
            <h1 className='text-xl text-[#00D0B0] font-bold '>About us</h1>
            <h2 className='font-playfair font-semibold text-[#0F0B33] text-4xl'>
              Building Digital Experiences That Help Businesses Grow.
            </h2>
            <div className='font-dm text-[#475569]/70 flex flex-col gap-8 text-base '>
              <p>
                We focus on creating modern, responsive and user-friendly
                websites that help businesses build a strong online presence and
                connect with their audience more effectively.
              </p>
              <p>
                Our goal is to combine clean design with practical functionality
                to deliver fast, professional and engaging digital experiences
                across all devices.
              </p>
            </div>
            <div>
              <button className='font-poppins font-extrabold text-xs bg-[#00D0B0] text-white px-13 py-5'>
                HIRE US
              </button>
            </div>
          </div>
          <div className='img w-1/2'>
            <img className='' src='/public/images/Group 48095475.png' alt='' />
          </div>
        </div>
        <div className='flex py-10 bg-[#E6FBF8] rounded-3xl px-15'>
          <div className='w-1/2 flex flex-col gap-7'>
            <h2 className='font-playfair font-bold  text-black text-4xl'>
              Our Mission
            </h2>
            <div className='flex flex-col gap-7 font-dm text-[#0F0B33]/70 text-base '>
              <p> 
                Our mission is to create modern, responsive and user-friendly
                digital experiences that help businesses grow and establish a
                strong online presence.
              </p>
              <p>
                We believe that great websites should be simple, visually
                appealing and easy to use. Our goal is to build solutions that
                combine clean design, performance and functionality to deliver
                the best possible user experience.
              </p>
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <div className='flex flex-col gap-5'>
              <div className='font-poppins flex text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-10' /> Fast Performance
              </div>
              <div className='font-poppins flex text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-10' /> Modern Design
              </div>
              <div className='font-poppins flex text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-10' /> User-Friendly
                Experience
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-10 mt-10">
          <div className="flex flex-col items-center gap-3">
          <h2 className="font-dm font-bold text-xm text-[#00D0B0]">WHY CHOOSE US?</h2>
          <h3 className="font-playfair font-bold text-4xl">Why Work With Us?</h3>
          </div>
          <div className='grid grid-cols-3 gap-6'>
          {cards.map((card) => {

            const Icon = card.icon;

            return (

            <div
              key={card.id}
              className='card w-full flex flex-col items-center gap-3 bg-white shadow-xl rounded-2xl p-8'
            >
              <div className='w-16 h-16 rounded-full bg-[#222831] flex items-center justify-center mx-auto'>
                <Icon className='text-3xl text-[#00D0B0]' />
              </div>
              <h1 className='font-dm font-bold text-[#0F0B33] text-xl'>
                {card.title}
              </h1>
              <p className='font-dm text-sm text-center w-full text-[#0F0B33]/70'>
                {card.description}
              </p>
            </div>
            );
        })}
        </div>
        </div>
      </div>
    </section>
  )
}

export default About
