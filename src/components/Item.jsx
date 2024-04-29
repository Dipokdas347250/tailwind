import React from 'react'
import lo01 from "../assets/Logo1.png"
import lo02 from "../assets/Logo2.png"
import lo03 from "../assets/Logo3.png"
import lo04 from "../assets/Logo4.png"

const Item = () => {
  return (
   <>
    <section className='bg-[white] py-[117px]'>
        <div className="max-w-container px-3 mx-auto">
            <div className="flex justify-center flex-wrap">
            <div className=" lg:w-[24%] py-1 w-[49%]">
                <img src={lo01} alt="" />
            </div>
            <div className=" lg:w-[24%] py-1 w-[49%]">
                <img src={lo02} alt="" />
            </div>
            <div className=" lg:w-[24%] py-1 w-[49%]">
                <img src={lo03} alt="" />
            </div>
            <div className=" lg:w-[24%] py-1 w-[49%]">
                <img src={lo04} alt="" />
            </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Item
