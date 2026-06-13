import React from "react"

const Services = () => {

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
    <section className='relative min-h-screen flex items-center'>
      <div className='max-w-7xl px-28 mx-auto flex flex-col gap-10'>
        <div className="pt-30">
          <h1 className="text-[#00D0B0] font-bold py-4">SERVICES</h1>
          <div className="w-full flex gap-20">
            <h1 className="font-playfair w-1/2 text-[#0F0B33] text-4xl font-semibold">Where our services add value to your product</h1>
            <p className="font-dm font-semibold text-sm w-1/2 leading-6 text-[#222831]/60">
              Helping companies & individuals identify key solutions for their
              target markets. We boost their ability to create products. Our
              business model saves clients time and money. Don't reinvent the
              wheel.
            </p>
          </div>
        </div>
          <div className="flex justify-between py-10 w-full">
            {service.map((service) => (
              <div key={service.id} className="card flex flex-col items-center gap-3 w-1/4">
                <img src={service.image} alt="image" className="1/2"/>
                <h1 className="font-dm font-bold text-[#0F0B33] text-xl">{service.title}</h1>
                <p className="font-dm text-base text-center text-[#5a5a61] ">{service.description}</p>
              </div>
            ))}
          
        </div>
      </div>
    </section>
  )
}

export default Services
