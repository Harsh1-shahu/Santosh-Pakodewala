"use client"
import React from 'react'
import { Pacifico } from 'next/font/google'
import { motion } from 'framer-motion'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const AboutUs = () => {
  return (
    <>
    <div id='AboutUs' className='mt-4'>
      <img src='/rest-santosh.jpg' className='w-80 md:w-150 md:h-50 mx-auto'/>
    </div>
    <div className="p-6">
      {/* Header Section */}
      <motion.div className="flex flex-col justify-center max-w-2xl text-center mx-auto"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}>
        <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-4 text-amber-900`}>About Us</h1>
        <p className="text-sm text-gray-600 font-serif">
          We are well known for the best Pakodas in Nagpur. Santosh Pakodewala is famous for its moong pakodas and bread pakodas served with dahi and a special imli and khajur chutney. Almost 1000 people visit his kiosk every day to relish pakodas.
        </p>
      </motion.div>

      {/* Specials items */}
      <div className='flex flex-col lg:flex-row max-w-6xl mx-auto mt-10'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-10">
          {[
            { img: 'thumb1.jpg', title: 'Samosa', desc: 'Santosh Specials' },
            { img: 'thumb2.jpg', title: 'Bread Pakoda', desc: 'Santosh Specials' },
            { img: 'thumb3.jpg', title: 'Sambhar Vadi', desc: 'Santosh Specials' },
            { img: 'thumb4.jpg', title: 'Dhokla', desc: 'Santosh Specials' },
          ].map((item, index) => (
            <section key={index} className="flex items-center gap-6 p-4 shadow-sm rounded-lg bg-yellow-50 border border-yellow-500">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
              <div>
                <h2 className="text-md font-semibold text-amber-700">{item.title}</h2>
                <p className="text-sm text-amber-500 font-medium">{item.desc}</p>
              </div>
            </section>
          ))}
        </div>

        {/* Restaurant Info Section */}
        <section className="max-w-lg mx-auto mt-10 bg-yellow-50 border border-yellow-500 shadow-sm rounded-xl p-4 text-center flex flex-col md:flex-row items-center gap-6">
          <img
            src="vender-img.png"
            alt="Santosh Restaurant"
            className="w-58 md:w-1/2 h-60 object-cover rounded-lg shadow-md"
          />

          <div className="w-full md:w-2/3">
            <h2 className="text-xl font-bold text-amber-700 mb-3">About the Restaurant</h2>
            <p className="text-gray-700 font-serif leading-relaxed tracking-tight">
              Making way for a hearty meal is <span className="font-semibold text-amber-500">Santosh Pakodewala</span> in Nagpur, established in 2012.<br />
              Located at <span className="font-semibold">Narendra Nagar</span>, this iconic eatery ensures a delightful food experience by serving
              highly palatable dishes. The restaurant welcomes guests warmly, allowing diners to relish
              a scrumptious meal throughout its operating hours.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  )
}

export default AboutUs
