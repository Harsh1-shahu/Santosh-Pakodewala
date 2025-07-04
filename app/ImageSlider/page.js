'use client'
import React, { useEffect, useState } from 'react'
import { Pacifico } from 'next/font/google'
import { motion } from 'framer-motion'

// Load the Pacifico font
const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
})

const slides = [
    {
        image: '/s1.jpg',
        title: 'Santosh Pakodewala',
        subtitle: 'Eat right, be bright.',
    },
    {
        image: '/s2.jpg',
        title: 'Santosh Pakodewala',
        subtitle: 'We treat you like a person who will exchange money for goods.',
    },
]

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            )
        }, 3500)

        return () => clearInterval(interval)
    }, [])

    const currentSlide = slides[currentIndex]

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-cover bg-center h-60 md:h-160 flex flex-col items-center justify-center text-white text-center px-4"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
        >
            {/* Bottom overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 right-0 bottom-0 z-[2] h-60 md:h-160 bg-[rgba(0,0,0,0.4)]"
            />

            {/* Text content above overlay */}
            <div className="relative z-[3]">
                <h1 className={`${pacifico.className} text-3xl md:text-6xl mb-4 text-[#FF6600]`}>
                    {currentSlide.title}
                </h1>
                <h3 className={`${pacifico.className} text-xl md:text-3xl mt-2 max-w-xl`}>
                    {currentSlide.subtitle}
                </h3>
            </div>
        </motion.div>
    )
}

export default ImageSlider
