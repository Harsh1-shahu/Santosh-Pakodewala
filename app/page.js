import React from 'react'
import AboutUs from './Navbar/Components/AboutUs/page'
import Menu from './Navbar/Components/Menu/page'
import Feedback from './feedback/page'
import Testimonials from './Navbar/Components/Testimonials/page'
import ContactUS from './Navbar/Components/ContactUs/page'
import Footer from './Footer/page'
import MainContent from './Navbar/MianContent/page'
import ImageSlider from './ImageSlider/page'
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { Pacifico } from 'next/font/google'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Page = () => {
  return (
    <div className="bg-gray-50">
      <MainContent />
      <ImageSlider />
      {/* About Section */}
      <div className="relative z-10">
        <AboutUs />
      </div>

      {/* Feedback Section with background image and overlay */}
      <div className="relative">
        {/* Background image */}
        <img
          src="featured-bg.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black semi-transparent overlay */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10" />

        {/* Content above overlay */}
        <div className="relative z-20">
          <Feedback />
        </div>
      </div>


      {/* Menu and Testimonials Section */}
      <div className="relative z-10">
        <Menu />
        <Testimonials />

        {/* Google Map Embed */}
        <div className="w-full h-72 rounded-md overflow-hidden shadow-lg">
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl font-serif font-bold p-2 text-gray-600'>Our Location</h1>
            <BsFillSendArrowDownFill className='text-gray-700 text-xl' />
          </div>
          <iframe
            title="Santosh Pakodewala Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.1768554358387!2d79.09358457529714!3d21.105514185137842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf438b5ea17d%3A0xec8853554cdf8fa7!2sSantosh%20Pakodawala!5e0!3m2!1sen!2sin!4v1751448191432!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
        <ContactUS />
        <Footer />
      </div>
    </div>
  )
}

export default Page
