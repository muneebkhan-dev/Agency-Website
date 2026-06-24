import React from "react"
import { FaCode } from "react-icons/fa"
import { MdDevices } from "react-icons/md"
import { RiReactjsLine } from "react-icons/ri"
import { TbApi } from "react-icons/tb"
import { BsWindowDesktop } from "react-icons/bs"
import { MdOutlineBuild } from "react-icons/md"

const Services = () => {
  const service = [
    {
      id: 1,
      icon: FaCode,
      title: "Development",
      description:
        "We build modern, responsive and user-friendly websites that help businesses create a strong online presence and deliver a seamless experience.",
    },

    {
      id: 2,
      icon: RiReactjsLine,
      title: "React Frontend Development",
      description:
        "We develop fast, interactive and scalable user interfaces using React to build modern and high-performance web applications.",
    },

    {
      id: 3,
      icon: MdDevices,
      title: "Responsive Web Design",
      description:
        "We create layouts that adapt perfectly to desktops, tablets and mobile devices, ensuring a consistent experience for every user.",
    },

    {
      id: 4,
      icon: TbApi,
      title: "API Integration",
      description:
        "We connect websites with external APIs to display dynamic data and create more powerful and interactive user experiences.",
    },

    {
      id: 5,
      icon: BsWindowDesktop,
      title: "Landing Page Development",
      description:
        "We design and build professional landing pages that effectively showcase products, services and business goals.",
    },

    {
      id: 6,
      icon: MdOutlineBuild,
      title: "Website Maintenance",
      description:
        "We provide updates, bug fixes and performance improvements to keep websites secure, optimized and running smoothly.",
    },
  ]


  return (
    <section className='relative min-h-screen px-20 mx-auto flex justify-center'>
      <div className='max-w-7xl flex flex-col gap-10'>
        <div className="py-10">
          <h1 className='font-DMmono text-[#00D0B0] font-semibold py-4'>SERVICES</h1>
          <div className='flex gap-20'>
            <h2 className='font-playfair w-1/2 text-[#0F0B33] text-4xl font-bold leading-12'>
              Provide high-quality digital solutions
            </h2>
            <p className='font-dm font-[541] text-base w-1/2 leading-6 text-[#222831]/70'>
              From modern website development to long-term website maintenance,
              we create solutions that are fast, responsive and focused on
              delivering a better experience for your customers.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-20'>
          {service.map((service) => {

            const Icon = service.icon;

            return (

            <div
              key={service.id}
              className='card flex flex-col items-center gap-3 bg-white shadow-xl rounded-2xl p-8'
            >
              <div className='w-16 h-16 rounded-full bg-[#222831] flex items-center justify-center'>
                <Icon className='text-3xl text-[#00D0B0]' />
              </div>
              <h1 className='font-dm font-bold text-[#0F0B33] text-xl'>
                {service.title}
              </h1>
              <p className='font-dm text-sm text-center text-[#0F0B33]/70 '>
                {service.description}
              </p>
            </div>
            );
        })}
        </div>
      </div>
    </section>
  )
}

export default Services
