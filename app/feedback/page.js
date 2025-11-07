'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pacifico } from 'next/font/google'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Feedback = () => {
  const [showFirst, setShowFirst] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative text-center py-30 h-[350px] bg-fixed bg-center bg-cover bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/featured-bg.jpg')" }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10" />

      <AnimatePresence mode="wait">
        {showFirst ? (
          <motion.div
            key="first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
             className="relative z-20"
          >
            <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-4 text-amber-600`}>
              Fabulous Food At Affordable Prices!
            </h1>
            <h3 className={`${pacifico.className} text-white text-2xl md:text-3xl mt-4`}>
              Checkout our very delicious menu list
            </h3>
          </motion.div>
        ) : (
          <motion.div
            key="second"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-4 text-amber-600`}>
              Fresh Ingredients, Rich Taste!
            </h1>
            <h3 className={`${pacifico.className} text-white text-2xl md:text-3xl mt-4`}>
              Come try the crunchiest pakoda in town!
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Feedback
    