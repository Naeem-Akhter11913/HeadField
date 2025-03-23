import React from 'react'
import { Routes, Route } from "react-router-dom";


import Navebar from './component/navebar/Navebar'
import Footer from './component/footer/Footer'
import MainLanding from './pages/landing';
import AboutUs from './pages/aboutUs';
import Service from './pages/service';
import './App.css'

const App = () => {
  return (
    <div className='main'>

      <Navebar />

        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Service />} />
          <Route path="*" element={<div><p>page is not found</p></div>} /> {/* Handles 404 */}
        </Routes>
      <Footer />
    </div>
  )
}

export default App