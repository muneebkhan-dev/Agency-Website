import React from 'react'

const ServicesSection = () => {

    const service = [
    {
      id: 1,
      image: "/public/Icon.png",
      title: "Development",
      description: "Create a platform with the best and coolest quality from us.",

    },

    {
      id: 2,
      image: "/public/Icon (1).png",
      title: "UI/UX Designer",
      description: "We provide UI/UX Design services, and of course with the best quality",

    },

    {
      id: 3,
      image: "/public/Icon.png",
      title: "Graphic Designer",
      description: "We provide Graphic Design services, with the best designers",

    }
  ]

  return (
    <section className='relative min-h-screen flex items-start'>
      <div className='max-w-7xl py-15 px-5 md:px-10 lg:px-28 mx-auto flex flex-col gap-10'>
        <div className="div-2 pt-30 flex flex-col items-center md:items-start lg:items-start text-center md:text-start lg:text-start">
          <h1 className="font-DMmono text-[#00D0B0] w-3/4 text-sm lg:text-base font-semibold py-4 md:py-2 lg:py-4">SERVICES</h1>
          <div className="div-3 w-full flex flex-col items-center md:flex-row lg:flex-row md:justify-between gap-4 md:gap-4 lg:gap-20">
            <h1 className="serviceHead font-playfair w-full md:w-1/2 lg:w-1/2 text-[#0F0B33] text-2xl md:text-3xl lg:text-4xl font-semibold">Where our services add value to your product</h1>
            <p className="font-dm font-medium text-base md:text-sm lg:text-base w-ful md:w-1/2 lg:w-1/2 leading-6 text-[#222831]/60">
              Helping companies & individuals identify key solutions for their
              target markets. We boost their ability to create products. Our
              business model saves clients time and money. Don't reinvent the
              wheel.
            </p>
          </div>
        </div>
          <div className="cards flex flex-col items-center md:items-start lg:items-start md:flex-row lg:flex-row justify-between gap-20 py-10 w-full">
            {service.map((service) => (
              <div key={service.id} className="card flex flex-col items-center p-8 md:p-0 lg:p-0 gap-3 w-full md:w-1/4 lg:w-1/4 shadow-xl md:shadow-none lg:shadow-none rounded-2xl md:rounded-none lg:rounded-none">
                <img src={service.image} alt="image" className="w-1/3"/>
                <h3 className="font-dm font-bold text-[#0F0B33] text-[20px] lg:text-xl">{service.title}</h3>
                <p className="font-dm text-base md:text-sm lg:text-base text-center text-[#5a5a61] ">{service.description}</p>
              </div>
            ))}
          
        </div>
      </div>
    </section>
  )
}

export default ServicesSection