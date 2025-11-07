'use client'
import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Pacifico } from 'next/font/google'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Menu = () => {
  const [clickedIndex, setClickedIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('ALL')

  const categories = ['ALL', 'BREAK FAST', 'DESERTS', 'DRINK']

  const handleImageClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index)
  }

  const items = [
    { img: 'moong1.jpg', title: 'Moong Pakoda', desc: 'India and its obsession of Moong Pakoda needs no introduction.' },
    { img: 'bread2.jpg', title: 'Bread Pakoda', desc: 'Bread pakoda is a favorite breakfast and tea time snack in India.' },
    { img: 'sabudana3.jpg', title: 'Sabudana Vada', desc: 'It is a crispy delicious Maharashtrian snack made by deep frying spiced Sabudana.' },
    { img: 'aloo4.jpg', title: 'Aloo Bonda', desc: 'It is a typical South Indian snack that has various sweet & spicy versions.' },
    { img: 'samosa5.jpg', title: 'Samosa', desc: 'A samosa is a fried dish with a savoury filling. It is a crispy and spicy Indian snack.' },
    { img: 'thumb3.jpg', title: 'Sambhar Vadi', desc: 'A yummy snack recipe of Coriander and rich spices from the Vidarbha region.' },
    { img: 'dhokla7.jpg', title: 'Dhokla', desc: 'Dhokla can be eaten for breakfast, as a main course, as a side dish, or as a snack.' },
    { img: 'kachori8.jpg', title: 'Kachori', desc: 'Kachori is a spicy snack, originating from the Indian subcontinent.' },
    { img: 'jalebi9.jpg', title: 'Jalebi', desc: 'Jalebi is a popular Indian dessert made with maida and sugar syrup.' },
    { img: 'pedha10.jpg', title: 'Pedha', desc: 'Peda is a sweet from the Indian subcontinent, originating from Mathura.' },
    { img: 'barfi11.jpg', title: 'Barfi', desc: 'Barfi is a dense milk-based sweet from the Indian subcontinent, a type of mithai.' },
    { img: 'badam12.jpg', title: 'Badam Milk', desc: 'Badam Milk is a popular Indian drink made with milk and fresh almond paste.' },
    { img: 'lassi13.jpg', title: 'Lassi', desc: 'Lassi is a popular traditional dahi-based drink that originated in the Indian subcontinent.' },
  ]

  return (
    <>
      <div id='Menu' className='py-18' />
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-10 text-amber-900 text-center`}>Menu</h1>

        {/* Filter Section */}
        <section className="flex items-center justify-center gap-6 md:gap-12 text-sm font-semibold mb-12">
          {categories.map((category) => (
            <span
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`cursor-pointer transition-colors ${activeCategory === category ? 'text-amber-800' : 'text-gray-600'
                } hover:text-amber-800`}
            >
              {category}
            </span>
          ))}
        </section>

        {/* Items Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-[6.5rem]">
          {items.map((item, index) => {
            const imageRef = useRef(null)
            const { scrollYProgress } = useScroll({
              target: imageRef,
              offset: ['start end', 'end start'],
            })
            const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

            return (
              <div
                key={index}
                className="relative bg-[#7F1E00] text-white border-2 border-yellow-500 shadow rounded-lg hover:shadow-md transition p-10 mb-10 text-center"
              >
                {/* Circular Image */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
                  <motion.img
                    ref={imageRef}
                    src={item.img}
                    alt={item.title}
                    style={{ rotate }}
                    onClick={() => handleImageClick(index)}
                    className={`
                    w-28 h-28 object-cover border-4 border-white rounded-full shadow-lg
                    transition-transform duration-2500 ease-in-out cursor-pointer
                    hover:rotate-[360deg] ring-1 ring-yellow-500
                    ${clickedIndex === index ? 'rotate-[360deg]' : ''}
                  `}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-lg font-bold mb-2 mt-6">{item.title}</h2>
                  <p className="text-sm px-2">{item.desc}</p>
                </div>
              </div>

            )
          })}
        </section>
      </div>
    </>
  )
}

export default Menu
