import React, { useState } from "react"
import { Link } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdHome } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { HiBriefcase } from "react-icons/hi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='relative bg-[#222831]'>
      <div className='max-w-7xl px-3 py-7 mx-auto flex items-center justify-between bg-transparent text-[#FFFFFF]'>
        <div className='flex gap-2 font-bold'>
          <img src='/public/images/TRIANGLE.png' alt='' />
          <h1 className='text-lg'>Myport</h1>
        </div>
        <button
          className='md:hidden lg:hidden cursor-pointer z-40'
          onClick={() => setMenuOpen(true)}
        >
          <GiHamburgerMenu className='size-6' />
        </button>
        <div className='relative hidden md:flex lg:flex'>
          <nav className='flex gap-8 font-normal'>
            <Link to='/'>HOME</Link>
            <Link to='/services'>SERVICES</Link>
            <Link to='/about'>ABOUT US</Link>
            <Link to='/contact'>CONTACT US</Link>
          </nav>
        </div>
        <div
          className={`flex flex-col lg:hidden md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex justify-end">
          <button
            className='p-4 cursor-pointer text-[#0F0B33] font-bold text-xl '
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          </div>
          <nav className='flex flex-col justify-start px-7 text-[#222831]/90 gap-7'>
            <div className="flex items-center gap-8 font-semibold border-b border-gray-300 py-7">
            <ul className='flex flex-col gap-10'>
              <li>
                <IoMdHome className='size-7' />
              </li>
              <li>
                <IoIosAlert className='size-7' />
              </li>
              <li>
                <HiBriefcase className='size-7' />
              </li>
              <li>
                <IoIosCall className='size-7' />
              </li>
            </ul>
            <ul className="font-dm text-lg flex flex-col gap-10">
              <Link to='/'>Home</Link>
              <Link to='/services'>Services</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
            </ul>
            </div>
            <div className='font-dm bg-[#00D0B0] text-white py-4 px-4 text-sm font-semibold flex justify-center rounded-lg z-20'>
          <button>GET STARTED</button>
        </div>
          </nav>
        </div>
        <div className='bg-[#FFFFFF] hidden md:flex lg:flex text-[#0F0B33] py-3 px-5 text-xs font-bold items-center z-20'>
          <button>GET STARTED</button>
        </div>
      </div>
      {menuOpen && (
        <div
          className='fixed inset-0 bg-black/40 z-40'
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default Navbar
