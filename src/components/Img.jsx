import React from 'react'
import img01 from "../assets/img01.png"
import img02 from "../assets/img02.png"
import img03 from "../assets/img03.png"
import img04 from "../assets/img04.png"

const Img = () => {
  return (
   <>
   <section>
    <div className=" flex justify-between flex-wrap">
        <div className=" lg:w-[24%] py-1 w-[49%]">
            <img src={img01} alt="" />
        </div>
        <div className=" lg:w-[24%] py-1 w-[49%]">
            <img src={img02} alt="" />
        </div>
        <div className="lg:w-[24%] py-1 w-[49%]">
            <img src={img03} alt="" />
        </div>
        <div className="lg:w-[24%] py-1 w-[49%]">
            <img src={img04} alt="" />
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Img
