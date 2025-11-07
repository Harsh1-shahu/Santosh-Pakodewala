'use client'
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const MainContent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState(null)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const links = [
        { href: '#', label: 'HOME' },
        { href: '#AboutUs', label: 'ABOUT US' },
        { href: '#Menu', label: 'MENU' },
        { href: '#testimonials', label: 'TESTIMONIALS' },
        { href: '#contact', label: 'CONTACT US' },
    ]

    return (
        <div className='relative overflow-hidden'>
            {/* === Animated Span Row for Desktop (45 spans) === */}
            <motion.div
                className="fixed top-20 left-0 w-full hidden md:flex z-40"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {Array.from({ length: 45 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="w-94 h-10 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.01 }}
                    />
                ))}
            </motion.div>

            {/* === Animated Span Row for Mobile (12 spans) === */}
            <motion.div
                className="fixed top-18 left-0 w-full flex md:hidden z-40"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                        key={i}
                        className="w-94 h-10 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.01 }}
                    />
                ))}
            </motion.div>

            {/* Animated Navbar */}
            <motion.div
                className="fixed top-0 left-0 w-full bg-white z-50 px-6 "
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-5xl mx-auto flex items-center justify-between p-2">
                    <img src="/logo.png" className="w-24 h-20" alt="Logo" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-5 mt-2 text-sm font-sans font-medium">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="hover:bg-orange-400 py-1 px-3 rounded-full hover:text-white transition duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Animated Hamburger Icon */}
                    <motion.div
                        className="flex items-center md:hidden bg-orange-400 text-white p-2 rounded-full"
                        whileTap={{ scale: 0.9 }}
                    >
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </motion.div>
                </div>

                {/* Animated Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden flex flex-col items-center bg-white shadow-md rounded-md overflow-hidden"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={() => setActiveLink(index)}
                                    className={`py-2 w-full text-center hover:text-orange-500 transition-colors duration-200 ${activeLink === index ? 'bg-orange-400 rounded-xl text-white' : ''
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Spacer to push page down below fixed navbar */}
            <div className="relative h-24"/>
            </div>
    )
}

export default MainContent
