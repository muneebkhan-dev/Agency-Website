import React from "react"
import { IoCall } from "react-icons/io5"
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className='relative'>
        <div className='max-w-7xl px-10 py-7 mx-auto flex justify-between'>
          <div className='flex gap-2 font-bold'>
            <img src='/public/images/TRIANGLE.png' alt='' />
            <h1 className='text-xl text-[#222831]'>Myport</h1>
          </div>
          <div className="flex gap-10">
            <a href='mailto:hi@myport.com' className="flex items-center gap-2 text-base"><IoMdMail className="text-3xl" />hi@myport.com</a>
            <a href='tel:432 - 221 - 8763' className="flex items-center gap-2 text-base"><IoCall className="text-3xl" />432 - 221 - 8763
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
