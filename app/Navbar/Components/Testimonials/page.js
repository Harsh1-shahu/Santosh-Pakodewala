'use client'
import React, { useState, useEffect } from 'react'
import { Pacifico } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Testimonials = () => {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div id='testimonials' className='py-5'/>

      <div
        className="relative flex flex-col items-center justify-center bg-[url('/featured-bg-3.jpg')] bg-fixed bg-cover bg-center text-white p-8 overflow-hidden"
        style={{ minHeight: '550px' }}
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
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-10" />

        {/* Title & Content above overlay */}
        <h1 className={`${pacifico.className} absolute top-1/5 left-1/2 transform -translate-x-1/2 text-5xl md:text-6xl mb-14 text-amber-600 z-20`}>
          Testimonials
        </h1>

        <AnimatePresence mode="wait">
          {showFirst ? (
            <motion.div
              key="first"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className='text-center mt-12 z-20 relative'
            >
              <RiDoubleQuotesL className="text-3xl mb-4" />
              <p className="text-2xl font-medium mb-2">We create your favrate taste.</p>
              <h3 className="text-2xl font-medium mb-6">Taste created for a healthy lifestyle.</h3>
              <div className="w-full text-right">
                <RiDoubleQuotesR className="text-3xl inline-block" />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className='text-center mt-26 z-20 relative'
            >
              <RiDoubleQuotesL className="text-3xl mb-4" />
              <p className="max-w-2xl mx-auto text-2xl font-medium mb-2">
                ALWAYS FRESH & delicious Food. Our Foods is dedicated to providing the highest quality of pakoda to its customers along with the highest degree of service.
              </p>
              <div className="w-full text-right">
                <RiDoubleQuotesR className="text-3xl inline-block" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Testimonials
