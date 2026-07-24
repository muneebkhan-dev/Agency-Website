import React from "react"
import { IoCall } from "react-icons/io5"
import { IoMdMail } from "react-icons/io"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const Footer = () => {

  const Location = useLocation()

  const isHome = location.pathname === "/";

  return (
    <>
      <footer className={`relative px-5 md:px-20 lg:px-20 py-10 flex justify-center ${ isHome ? "bg-white text-black" : "bg-[#222831] text-white"}`}>
        <div className='max-w-7xl w-full flex flex-col md:flex-row lg:flex-row justify-between items-center gap-7'>
          <div className="footer-logo w-full md:w-auto lg:w-auto flex flex-col items-center py-5 md:py-0 lg:py-0 gap-3 border-b border-gray-300 md:border-none lg:border-none">
            <Link to="/" className='flex gap-2 font-bold'>
              <img src='/images/TRIANGLE.png' alt='' />
              <h1 className='text-xl'>Myport</h1>
            </Link>
            <div className='flex md:hidden lg:hidden text-center text-lg'>
              Building modern digital solutions for businesses.
            </div>
          </div>
          <div className='footer-content w-full md:w-auto lg:w-auto flex flex-col md:flex-row lg:flex-row items-center gap-3 md:gap-15 lg:gap-15 pb-5 md:py-0 lg:py-0 border-b border-gray-300 md:border-none lg:border-none'>
            <a
              href='mailto:hi@myport.com'
              className='flex items-center gap-2 text-base'
            >
              <IoMdMail className='text-xl md:text-3xl lg:text-3xl' />
              hi@myport.com
            </a>
            <a
              href='tel:432 - 221 - 8763'
              className='flex items-center gap-2 text-base'
            >
              <IoCall className='text-xl md:text-3xl lg:text-3xl' />
              432 - 221 - 8763
            </a>
          </div>
          <div className='flex md:hidden lg:hidden text-center'>
            © 2026 Myport All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
