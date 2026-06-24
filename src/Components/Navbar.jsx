import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="relative bg-[#222831]">
      <div className="max-w-7xl px-3 py-7 mx-auto flex items-center justify-between bg-transparent text-[#FFFFFF]">
        <div className="flex gap-2 font-bold">
          <img src="/public/images/TRIANGLE.png" alt="" />
          <h1 className="text-lg">Myport</h1>
        </div>
        <div className="relative">
          <nav className="flex gap-8 font-normal">
            <Link to='/'>HOME</Link>
            <Link to='/services'>SERVICES</Link>
            <Link to='/about'>ABOUT US</Link>
            <Link to='/contact'>CONTACT US</Link>
          </nav>
        </div>
        <div className="bg-[#FFFFFF] text-[#0F0B33] py-3 px-5 text-xs font-bold flex items-center z-20">
          <button>GET STARTED</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
