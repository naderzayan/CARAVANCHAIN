import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home_Page" />} />
        <Route path="/home_Page" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </main>
  )
}
