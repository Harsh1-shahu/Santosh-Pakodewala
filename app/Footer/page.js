"use client"
import React from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { Pacifico } from 'next/font/google'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center bg-no-repeat h-[300px] flex flex-col justify-center items-center overflow-hidden"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >

      {/* Animated Span Row for Desktop (45 spans) */}
      <div
        className="absolute top-[-14] left-0 w-full hidden md:flex z-20"
      >
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="w-20 h-10 bg-gray-50 rounded-full"
          />
        ))}
      </div>

      {/* === Animated Span Row for Mobile (12 spans) === */}
      <div
        className="absolute top-[-14] left-0 w-full flex md:hidden z-20"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="w-94 h-10 bg-gray-50 rounded-full z-20"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-10" />

      {/* Content above overlay */}
      <div className="relative z-20 flex flex-col items-center mt-16">
        <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-4 text-orange-600`}>
          Find us on
        </h1>
        <div className='flex gap-2'>
          <img src='/fb-image.jpg' className='w-10 h-10 object-cover rounded-full' />
          <img src='/twitter-image.webp' className='w-10 h-10 object-cover rounded-full' />
          <img src='/google-plus-image.png' className='w-10 h-10 object-cover rounded-full' />
          <img src='/youtube-image.jpeg' className='w-10 h-10 object-cover rounded-full' />
          <img src='/linkedin-image.png' className='w-10 h-10 object-cover rounded-full' />
        </div>
        <div className='p-4'>
          <p className='bg-black text-white mt-8 p-2 rounded-md text-center border-t-2 border-white'>
            © 2019 Santosh Pakodewala . All Rights Reserved | Developed by{' '}
            <a href='/' className='text-orange-400 font-medium'>NJ Softech</a>
          </p>
        </div>
        <button
          className="relative bg-[#7F1E00] w-14 h-14 rounded-full flex items-center justify-center hover:bg-[#a12b00] transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to Top"
        >
          <FaChevronCircleUp className="absolute top-3 text-2xl text-white" />
        </button>

      </div>
    </div>
  )
}

export default Footer
