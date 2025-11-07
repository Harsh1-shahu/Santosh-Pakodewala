import React from 'react'
import AboutUs from './Navbar/Components/AboutUs/page'
import Menu from './Navbar/Components/Menu/page'
import Feedback from './feedback/page'
import Testimonials from './Navbar/Components/Testimonials/page'
import ContactUS from './Navbar/Components/ContactUs/page'
import Footer from './Footer/page'
import MainContent from './Navbar/MianContent/page'
import ImageSlider from './ImageSlider/page'
import Location from './Location/page'

const Page = () => {
  return (
    <div className="bg-gray-50">
      <MainContent />
      <ImageSlider />
      <AboutUs />
      <Feedback />
      <Menu />
      <Testimonials />
      <Location />
      <ContactUS />
      <Footer />
    </div>
  )
}

export default Page
