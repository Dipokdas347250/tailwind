import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import { GiTireIronCross } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";

const Navber = () => {
    let [show, setShow] = useState(false)
    let handldShow = () =>{
        setShow(!show)
    }
  return (
    <>
    <nav className='bg-[red]  py-5 '>
        <div className="max-w-container px-3  mx-auto">
            <div className=" flex justify-between items-center">
            <div className="">
                <img src={logo} alt="logo" />
            </div>
            <div className="">
                <ul className={`lg:flex gap-x-8 lg:items-center text-center absolute z-[50] top-0 left-0 lg:static duration-700 ${ show == true ? "bg-[#000] top-[197px] w-full" : " top-[-197px] w-full"}`}>
                    <li><a className='font-pops text-white font-semibold ' href="#">Home</a></li>
                    <li><a  className='font-pops text-white font-semibold' href="#">About</a></li>
                    <li><a  className='font-pops text-white font-semibold' href="#">Service</a></li>
                    <li><a  className='font-pops text-white font-semibold' href="#">Gallery</a></li>
                    <li><a  className='font-pops text-white font-semibold' href="#">Blog</a></li>
                    <li></li>
                    <div className="text-center">
                    <a  className='font-pops text-white font-semibold border-2 border-[#fff] p-4 rounded inline-block'   href="#">CONTACT</a>
                    </div>
                </ul>
            </div>
            <div className=" lg:hidden " onClick={handldShow}>
                {show == true ?  <GiTireIronCross/> : <FaBars/>}
               
                
            </div>
            </div>
        </div>

    </nav>


    </>
  )
}

export default Navber
