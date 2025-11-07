import React from 'react'
import { BsFillSendArrowDownFill } from "react-icons/bs";

const Location = () => {
  return (
    <>
    {/* Google Map Embed */}
      <div className="w-full h-100 rounded-md overflow-hidden shadow-lg">
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
      </>
  )
}

export default Location