import React from 'react'

const teams = () => {

    const teams = [
    {
      id: 1,
      image: "/public/images/teams/Greg.png",
      title: "Jhon Mock",
      description: "Head of Development"
    },

    {
      id: 2,
      image: "/public/images/teams/Kyle.png",
      title: "Ali Khan",
      description: "Head of Operations"
    },

    {
      id: 3,
      image: "/public/images/teams/Liam.png",
      title: "Lowen",
      description: "Head of Design"
    },

    {
      id: 4,
      image: "/public/images/teams/Hans.png",
      title: "Faizan",
      description: "Senior Game Director"
    },

    {
      id: 5,
      image: "/public/images/teams/Dhru.png",
      title: "Josh",
      description: "Quality Assurance"
    }
  ]

  return (
    <section className='relative min-h-screen px-10 mx-auto flex flex-col items-center justify-center'>
      <div className='max-w-7xl flex flex-col items-center gap-30'>  
        <div className='sub-heading'>
            <h2 className='font-playfair font-bold text-6xl text-[#222831]'>Our Teams</h2>
        </div>
          <div className='flex items-center gap-20'>
          {teams.map((teams) => (
              <div key={teams.id} className="card flex flex-col items-center gap-3">
                <img src={teams.image} alt="image" className="1/2"/>
                <h3 className="font-dm font-bold text-[#222831] text-xl">{teams.title}</h3>
                <p className="font-dm text-xm font-medium text-[#222831]/80 ">{teams.description}</p>
              </div>
            ))}
            </div>
      </div>

    </section>
  )
}

export default teams