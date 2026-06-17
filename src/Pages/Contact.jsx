import React from "react"

const Contact = () => {
  return (
    <section className='relative min-h-screen px-10 py-10 mx-auto flex items-center justify-center'>
      <div className='max-w-7xl bg-[#222831] w-full min-h-[80vh] flex gap-20'>
        <div className="w-1/2 flex flex-col gap-15">
          <h2 className='font-montserrat text-xs font-semibold text-[#00D0B0] tracking-[4px]'>
            / CONTACT US
          </h2>
          <h3 className='font-playfair font-semibold text-white text-5xl tracking-tight leading-17'>
            Have you decided to work on a project with us?
          </h3>
          <img src='/public/images/Group 3312.png' alt='lets-talk' className="w-1/2" />
        </div>
        <div className="w-1/3 flex flex-col justify-end">
          <img src="/public/images/design-chair.png" alt="chair" className="h-70" />
        </div>
      </div>
    </section>
  )
}

export default Contact
