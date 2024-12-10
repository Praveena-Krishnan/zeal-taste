import React from 'react'
import Image from 'next/image'
const header= () => {
  return (
    <div className="bg-orange-50 min-h-screen flex flex-col ">
      {/* Navbar */}
      <nav className="bg-orange-50  py-4 ">
        <div className="container mx-auto flex justify-between items-center px-4 ">
          <div className="flex">
            <Image
              src="https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e14c950983fda452099b9f_nav-logo.svg"
              alt="Logo"
              width={220}
              height={220}
              className="ml-32 "
            />
          </div>
          {/* Email */}
          <div className="flex items-center gap-1">
          
          <a href="mailto:abc@zealtaste.com" className="text-orange-500 text-lg font-serif hover:underline px-44 flex space-x-2 items-center">
          <Image
          src="https://cdn.prod.website-files.com/66d8472718186d5432d79b3f/66e1497e690ab92c60413176_mail%201%20(1).svg"
          alt="logo"
          width={34}
          height={64}
          />
          <p>abc@zealtaste.com</p>
          </a>
          </div>
         
        </div>
        </nav>
        </div>
        
  )
}

export default header;