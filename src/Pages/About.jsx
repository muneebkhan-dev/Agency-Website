import React from "react"
import { TiTick } from "react-icons/ti"
import { FaPalette } from "react-icons/fa"
import { MdDevices } from "react-icons/md"
import { FaBolt } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"
import { Link } from "react-router-dom"


const About = () => {
  const cards = [
    {
      id: 1,
      icon: FaPalette,
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
    },
  ]

  return (
    <section className='relative min-h-screen px-5 md:px-10 lg:px-20 mx-auto flex justify-center'>
      <div className='max-w-7xl flex flex-col gap-5 md:gap-10 lg:gap-10'>
        <div className='flex flex-col md:flex-row lg:flex-row py-15 lg:py-20 items-center md:justify-between lg:justify-between gap-10 '>
          <div className='about-content md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-start lg:items-start text-center md:text-start lg:text-start gap-4 md:gap-5 lg:gap-8'>
            <h2 className='text-xl text-[#00D0B0] font-bold '>About us</h2>
            <h3 className='font-playfair font-semibold text-[#0F0B33] text-xl md:text-2xl lg:text-4xl'>
              Building Digital Experiences That Help Businesses Grow.
            </h3>
            <div className='font-dm text-[#475569]/70 flex flex-col gap-6 md:gap-5 lg:gap-8 md:text-sm lg:text-base '>
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
              <Link to="/contact" className='font-poppins font-extrabold text-base md:text-xs lg:text-xs bg-[#00D0B0] text-white px-15 md:px-10 lg:px-13 py-4 md:py-3 lg:py-5 transition-all duration-300 hover:bg-[#20bea7]'>
                HIRE US
              </Link>
            </div>
          </div>
          <div className='img w-full md:w-1/2 lg:w-1/2 flex flex-col justify-center lg:flex-none'>
            <img className='' src='/images/Group 48095475.png' alt='' />
          </div>
        </div>
        <div className='flex py-10 bg-[#E6FBF8] rounded-3xl px-10 lg:px-15'>
          <div className='our-mission w-full md:w-1/2 lg:w-1/2 flex flex-col gap-7 text-center md:text-start lg:text-start'>
            <h2 className='font-playfair font-bold  text-black text-3xl lg:text-4xl'>
              Our Mission
            </h2>
            <div className='flex flex-col items-center md:items-start lg:items-start gap-7 font-dm text-[#0F0B33]/70 text-base md:text-sm lg:text-base '>
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
          <div className='hidden md:flex lg:flex w-1/2 flex-col justify-center items-end lg:items-center'>
            <div className='flex flex-col gap-5'>
              <div className='font-poppins flex text-lg lg:text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-7 md:size-8 lg:size-10' />{" "}
                Fast Performance
              </div>
              <div className='font-poppins flex text-lg lg:text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-7 md:size-8 lg:size-10' />{" "}
                Modern Design
              </div>
              <div className='font-poppins flex text-lg lg:text-xl font-bold gap-3'>
                <TiTick className='text-[#00D0B0] size-7 md:size-8 lg:size-10' />{" "}
                User-Friendly Experience
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-10 py-10 mt-10'>
          <div className='about-cards flex flex-col items-center gap-3'>
            <h2 className='font-dm font-bold text-sm lg:text-base text-[#00D0B0]'>
              WHY CHOOSE US?
            </h2>
            <h3 className='font-playfair font-bold text-3xl lg:text-4xl'>
              Why Work With Us?
            </h3>
          </div>
          <div className='cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-10 md:px-5 lg:px-10'>
            {cards.map((card) => {
              const Icon = card.icon

              return (
                <div
                  key={card.id}
                  className='card w-full flex flex-col items-center gap-3 bg-white shadow-xl rounded-2xl p-5 lg:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'
                >
                  <div className='w-20 md:w-14 lg:w-16 h-20 md:h-14 lg:h-16 rounded-full bg-[#222831] flex items-center justify-center mx-auto'>
                    <Icon className='text-4xl md:text-3xl lg:text-3xl text-[#00D0B0]' />
                  </div>
                  <h3 className='font-dm font-bold text-[#0F0B33] text-center text-xl md:text-lg lg:text-xl'>
                    {card.title}
                  </h3>
                  <p className='font-dm text-base md:text-sm lg:text-sm text-center w-full text-[#0F0B33]/70'>
                    {card.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='w-full bg-[#061d41] rounded-2xl mx-auto shadow-xl mb-10'>
          <div className='cta-sec flex flex-col md:flex-row lg:flex-row items-center justify-between py-8 px-5 md:px-10 lg:px-30 gap-5 md:gap-0 lg:gap-0'>
            <div className='flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start text-center md:text-start lg:text-start gap-5 lg:gap-10'>
              <div className='md:w-auto lg:w-auto rounded-full bg-white p-3 flex items-center'>
                <FaTelegramPlane className='text-[#0D9488] size-14 md:size-10 lg:size-10' />
              </div>
              <div className='flex flex-col justify-center gap-3 md:gap-0 lg:gap-2'>
                <h4 className='font-poppins text-white text-2xl md:text-base lg:text-xl font-semibold'>
                  Let's build something amazing together.
                </h4>
                <p className='font-dm text-base md:text-sm lg:text-sm text-white'>
                  I'm always open to discussing new projects and ideas.
                </p>
              </div>
            </div>
            <div className='w-full md:w-auto lg:auto'>
              <Link to="/contact" className='w-full md:w-auto lg:w-auto font-dm text-lg text-white px-5 md:px-4 lg:px-6 py-3 md:py-3 lg:py-4 bg-[#0D9488] rounded-xl font-bold transition-all duration-300 hover:bg-[#0fc5aa]'>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
