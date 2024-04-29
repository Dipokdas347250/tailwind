import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram    } from "react-icons/fa";

const Header = () => {
  return (
    
    <>
      <header className='bg-[#282828]  py-3  border-b-2 border-[#FFB800]'>
   <div className="max-w-container px-3 mx-auto">
      <div className="lg:flex items-center ">
          <div className=" lg:w-[30%] w-full lg:pt-0 pt-2  ">
            <div className="flex items-center justify-center lg:justify-start gap-x-2">
              <div className="text-white">
              <MdOutlineMarkEmailUnread/>
              </div>
              <p className='font-pops text-white font-normal'>mail@yourcompany.com</p>
            </div>
          </div>
          <div className=" lg:w-[30%] w-full lg:pt-0 pt-2">
            <div className="flex items-center justify-center lg:justify-start gap-x-2">
             <div className="text-white">
             <MdAddCall/>
             </div>
              <p className='font-pops text-white font-normal'>+896 120 5889 (Toll free)</p>
            </div>
          </div>
          <div className=" lg:w-[40%] w-full lg:pt-0 pt-2">
            <div className="text-white flex lg:justify-end justify-center  gap-x-4">
              <FaFacebookF/>
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram  />
            </div>
          </div>
        </div>
   </div>
      </header>
    
    </>
  )
}

export default Header
