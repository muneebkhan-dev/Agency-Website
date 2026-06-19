import React from "react"

const Contact = () => {
  return (
    <section className='relative min-h-screen px-20  mx-auto flex items-center justify-center'>
      <div className='max-w-7xl bg-[#222831] w-full min-h-[90vh] flex'>
        <div className="flex-1">

        </div>
        <div className="flex-2 flex flex-col justify-center gap-15 w-full">
          <h2 className='font-montserrat text-xs font-semibold text-[#00D0B0] tracking-[5px]'>
            / CONTACT US
          </h2>
          <h3 className='font-playfair font-semibold text-white text-5xl tracking-tight leading-17'>
            Have you decided to work on a project with us?
          </h3>
          <img src='/public/images/Group 3312.png' alt='lets-talk' className="w-2/3" />
        </div>
        <div className="flex-1 flex justify-center items-end px-10">
          <img src="/images/design-chair.png" alt="chair" className="h-85" />
        </div>
      </div>
    </section>
  )
}

export default Contact
