import React from 'react'
import log from "../assets/Logo.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import ce from "../assets/Cert1.png"
import ce1 from "../assets/Cert2.png"

const Footer = () => {
    return (
        <>
            <footer className='bg-[#1F1F1F]   py-[140px]'>
                <div className="max-w-container px-3 mx-auto">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className=" lg:w-[30%] w-[100%]">
                            <div className="">
                                <img src={log} alt="" />

                            </div>
                            <div className="flex  items-center gap-x-2 pt-3">
                                <div className="text-white ">
                                    <MdOutlineMarkEmailUnread />

                                </div>
                                <div className="">
                                    <p className='font-pops text-white font-normal'>mail@yourcompany.com</p>
                                </div>
                            </div>
                            <div className="flex  items-center gap-x-2 pt-3">
                                <div className="text-white ">
                                    <MdAddCall />

                                </div>
                                <div className="">
                                    <p className='font-pops text-white font-normal'>+896 120 5889 (Toll free)</p>
                                </div>
                            </div>
                            <div className="flex  items-center gap-x-2 pt-3">
                                <div className="text-white ">
                                    <IoLocationOutline />

                                </div>
                                <div className="">
                                    <p className='font-pops text-white font-normal'>101 Baker Street, New York, USA, 12345</p>
                                </div>
                            </div>
                            <div className="flex  items-center  gap-x-2 pt-5">
                                <div className="  text-white flex lg:justify-end justify-center  gap-x-4 ">
                                    <div className="bg-[red] py-[15px] px-[15px] rounded-full">
                                    < FaFacebookF />
                                    </div>
                                    <div className="bg-[red] py-[15px] px-[15px] rounded-full">
                                    <FaTwitter />
                                    </div>
                                   <div className="bg-[red] py-[15px] px-[15px] rounded-full">
                                   <FaLinkedinIn />
                                   </div>
                                    <div className="bg-[red] py-[15px] px-[15px] rounded-full">
                                    <FaInstagram />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" lg:w-[20%] w-[100%]">
                           <div className="text-center lg:text-start pt-7">
                           <div className="text-white  font-pops font-bold text-[28px] lg:pb-[30px]">
                                <h2>Company</h2>
                                </div>
                                <div className="text-white  font-pops font-medium text-[16px] lg:pb-[20px]  ">
                                <a href="#">Home</a>
                                </div>
                                <div className=" text-white  font-pops font-medium text-[16px] lg:pb-[20px] ">
                                <a href="#">About</a>
                                </div>
                                <div className="text-white  font-pops font-medium text-[16px] lg:pb-[20px]  ">
                                <a href="#">Services</a>
                                </div>
                                <div className=" text-white  font-pops font-medium text-[16px] lg:pb-[20px] ">
                                <a href="#">Gallery</a>
                                </div>
                                
                           </div>
                           
                        </div>
                        <div className=" lg:w-[20%] w-[100%]">
                            <div className="text-center lg:text-start pt-7">

                            <div className="text-white  font-pops font-bold text-[28px] lg:pb-[30px]">
                                <h2>Others</h2>
                                </div>
                                <div className="text-white  font-pops font-medium text-[16px] lg:pb-[20px]  ">
                                <a href="#">Blog</a>
                                </div>
                                <div className=" text-white  font-pops font-medium text-[16px] lg:pb-[20px] ">
                                <a href="#">Contact</a>
                                </div>
                                <div className="text-white  font-pops font-medium text-[16px] lg:pb-[20px]  ">
                                <a href="#">Terms & Conditions</a>
                                </div>
                                <div className=" text-white  font-pops font-medium text-[16px] lg:pb-[20px] ">
                                <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                                
                           
                        </div>
                        <div className=" lg:w-[20%] w-[100%]">
                            <div className="text-center lg:text-start pt-7">

                            <div className="text-white  font-pops font-bold text-[28px]  ">
                                <h2>Certificate</h2>
                                </div>
                                <div className="flex pt-3  ">
                                    <img src={ce} alt="" />
                                    <img src={ce1} alt="" />
                                    

                                </div>
                            </div>
                               
                           
                        </div>
                        
                        

                    </div>
                </div>


            </footer>
        </>
    )
}

export default Footer
