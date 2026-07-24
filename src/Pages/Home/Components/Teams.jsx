import React from 'react'

const teams = () => {

    const teams = [
    {
      id: 1,
      image: "/images/teams/Greg.png",
      title: "Jhon Mock",
      description: "Head of Development"
    },

    {
      id: 2,
      image: "/images/teams/Kyle.png",
      title: "Ali Khan",
      description: "Head of Operations"
    },

    {
      id: 3,
      image: "/images/teams/Liam.png",
      title: "Lowen",
      description: "Head of Design"
    },

    {
      id: 4,
      image: "/images/teams/Hans.png",
      title: "Faizan",
      description: "Senior Game Director"
    },

    {
      id: 5,
      image: "/images/teams/Dhru.png",
      title: "Josh",
      description: "Quality Assurance"
    }
  ]

  return (
    <section className='relative min-h-150 lg:min-h-screen px-10 py-20 md:py-0 lg:py-0 mx-auto flex flex-col items-center justify-center'>
      <div className='max-w-7xl w-full flex flex-col items-center gap-15 md:gap-20 lg:gap-40'>  
        <div className='sub-heading w-full flex justify-center'>
            <h2 className='font-playfair font-bold text-4xl lg:text-6xl text-[#222831]'>Our Teams</h2>
        </div>
          <div className='w-full flex flex-col md:flex-row lg:flex-row items-center gap-10 md:gap-2 lg:gap-20'>
          {teams.map((teams) => (
              <div key={teams.id} className=" w-full flex flex-col items-center justify-center gap-2 text-center">
                <img src={teams.image} alt="image" className="md:w-4/5 lg:w-auto" />
                <h3 className="font-dm font-bold text-[#222831] text-xl md:text-base lg:text-xl">{teams.title}</h3>
                <p className="font-dm text-lg md:text-sm lg:text-base font-medium text-[#222831]/80 ">{teams.description}</p>
              </div>
            ))}
            </div>
      </div>

    </section>
  )
}

export default teams