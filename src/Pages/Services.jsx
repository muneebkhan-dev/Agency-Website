import React from "react"
import { FaCode } from "react-icons/fa"
import { MdDevices } from "react-icons/md"
import { RiReactjsLine } from "react-icons/ri"
import { TbApi } from "react-icons/tb"
import { BsWindowDesktop } from "react-icons/bs"
import { MdOutlineBuild } from "react-icons/md"
import { FaTelegramPlane } from "react-icons/fa"

const Services = () => {
  const service = [
    {
      id: 1,
      icon: FaCode,
      title: "Development",
      description:
        "We build modern, responsive user-friendly websites help businesses create strong online presence, deliver seamless experience.",
    },

    {
      id: 2,
      icon: RiReactjsLine,
      title: "React Frontend",
      description:
        "We develop fast, interactive and scalable user interfaces using React to build modern and high-performance web applications.",
    },

    {
      id: 3,
      icon: MdDevices,
      title: "Responsive Design",
      description:
        "We create layouts that adapt perfectly to desktops, tablets and mobile devices, ensuring a consistent experience for every user.",
    },

    {
      id: 4,
      icon: TbApi,
      title: "API Integration",
      description:
        "We connect websites with external APIs to display dynamic data and create powerful and interactive user experiences.",
    },

    {
      id: 5,
      icon: BsWindowDesktop,
      title: "Landing Page",
      description:
        "We design and build professional landing pages that effectively showcase products, services and business goals.",
    },

    {
      id: 6,
      icon: MdOutlineBuild,
      title: "Web Maintenance",
      description:
        "We provide updates, bug fixes and performance improvements to keep websites secure, optimized and running smoothly.",
    },
  ]

  return (
    <section className='relative min-h-screen px-5 lg:px-10 mx-auto flex justify-center'>
      <div className='max-w-7xl flex flex-col gap-20 md:gap-20 lg:gap-20'>
        <div className='service-h1 flex flex-col items-center md:items-start lg:items-start py-10 md:px-5 lg:px-10'>
          <h1 className='font-DMmono text-[#00D0B0] text-sm lg:text-base font-semibold py-4'>
            SERVICES
          </h1>
          <div className='service-content flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start gap-4 md:gap-20 lg:gap-20 text-center md:text-start lg:text-start'>
            <h2 className='font-playfair md:w-1/2 lg:w-1/2 text-[#0F0B33] text-3xl lg:text-4xl font-bold leading-12'>
              Provide high-quality digital solutions
            </h2>
            <p className='font-dm font-[541] text-base w-auto md:w-1/2 lg:w-1/2 leading-6 text-[#222831]/70'>
              From modern website development to long-term website maintenance,
              we create solutions that are fast, responsive and focused on
              delivering a better experience for your customers.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5 lg:gap-10 md:px-5 lg:px-10'>
          {service.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                className='service-card flex flex-col items-center justify-center gap-3 bg-white shadow-xl rounded-2xl p-5 lg:p-8'
              >
                <div className='service-icon w-20 md:w-14 lg:w-16 h-20 md:h-14 lg:h-16 rounded-full bg-[#222831] flex items-center justify-center'>
                  <Icon className='ser-icon text-4xl text-[#00D0B0]' />
                </div>
                <h1 className='font-dm font-bold text-[#0F0B33] text-center text-xl md:text-lg lg:text-xl'>
                  {service.title}
                </h1>
                <p className='font-dm text-base md:text-sm lg:text-sm text-center text-[#0F0B33]/70 '>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
        <div className='w-full bg-[#061d41] rounded-2xl mx-auto shadow-xl'>
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
          <div className="w-full md:w-auto lg:auto">
            <button className='w-full md:w-auto lg:w-auto font-dm text-lg text-white px-5 md:px-4 lg:px-6 py-3 md:py-3 lg:py-4 bg-[#0D9488] rounded-xl font-bold'>
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Services
