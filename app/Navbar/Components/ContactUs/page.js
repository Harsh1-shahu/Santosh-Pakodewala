'use client'
import React from 'react'
import { GrSend } from "react-icons/gr";
import { FaLocationDot, FaMobileScreen } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import { Pacifico } from 'next/font/google'

// Load the Pacifico font
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const ContactUS = () => {
  return (
    <>
    <div id='contact' className='py-14'/>
    <div className="flex flex-col items-center justify-center bg-gray-50 p-4">

      <h1 className={`${pacifico.className} text-4xl md:text-5xl mb-6 text-zinc-800`}>Contact</h1>


      <form className="w-full max-w-4xl bg-white border border-yellow-500 shadow-xl rounded-md p-8 space-y-4">
        {/* Name and Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-2 border bg-[#FF9966] border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border bg-[#FF9966] border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
          />
        </div>

        {/* Comment */}
        <textarea
          placeholder="Comment"
          rows={5}
          required
          className="w-full h-14 px-4 py-2 border bg-[#FF9966] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-white"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="flex items-center justify-center mx-auto gap-2 bg-[#7F1E00] border-2 border-yellow-500 text-white py-3 px-6 rounded-md hover:bg-[#7f2600] transition"
        >
          <GrSend className="text-lg" />
          <span className="font-extrabold leading-none">SEND</span>
        </button>
      </form>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 px-4">
        {/* Contact Details */}
        <div className="space-y-6 bg-yellow-50 p-6 rounded-2xl shadow-lg border border-yellow-500 transition duration-300 hover:shadow-xl">
          <div className="flex items-start gap-4">
            <FaLocationDot className="text-5xl text-orange-600" />
            <p className="text-gray-700 font-medium leading-relaxed">
              Plot No.80, Ring Road, Omkar Nagar Square, Near South Point School, Omkar Nagar, Bhagwan Nagar, Nagpur, MH 440027
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaMobileScreen className="text-2xl text-orange-600" />
            <p className="border border-gray-400 hover:border-orange-600 active:border-orange-600 rounded-full px-4 py-2 text-gray-800 transition duration-300 cursor-pointer">
              +91 9921718790
            </p>
          </div>
          <div className="flex items-center gap-4">
            <FaComments className="text-2xl text-orange-600" />
            <p className="text-gray-800">santoshfunde61@gmail.com</p>
          </div>
        </div>

        {/* Open Hours Section */}
        <div className="relative bg-yellow-50 p-6 rounded-2xl shadow-lg border border-yellow-500 transition duration-300 hover:shadow-xl flex flex-col items-center text-center">
          <div className="relative w-36 h-36 mb-4">
            <img
              src="comment.png"
              className="w-full h-full object-cover"
              alt="Open Hours"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-sm font-extrabold mb-5">
              Open Hours
            </h1>
          </div>
          <p className="text-lg font-semibold text-gray-800">Mon – Sun</p>
          <p className="text-sm text-gray-600">8:00 AM – 10:00 PM</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUS
