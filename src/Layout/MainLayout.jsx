import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../Components/scrollToTop"

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
