import { Routes, Route } from "react-router-dom"
import MainLayout from "./Layout/MainLayout"

import Home from "./Pages/Home/Home"
import Services from "./Pages/Services"
import About from "./Pages/About"
import Contact from "./Pages/Contact"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
