import React from 'react'

const About = () => {
  return (
   <>
   <section className='py-[136px] bg-[#F0F0F0]'>
        <div className="max-w-container px-3 mx-auto">
           <div className="flex flex-wrap">
           <div className=" lg:w-[35%] w-[100%]">
                <div className="bg-[red] py-[100px] px-[76px]">
                    <h2 className='text-white  font-pops font-bold lg:text-[36px] text-[24px]'>Learn more about our company</h2>
                </div>
            </div>
            <div className=" lg:w-[65%] w-[100%]">
                <div className="bg-ab w-full  lg:py-[168.5px] py-[100px] lg:px-[200px] ">
                    <div className="text-center lg:text-start">

                    <a href="#" className='py-[13px] px-[40px] bg-[white] text-[red]  font-pops font-semibold text-[16px]'>Learn More</a>
                    </div>
                </div>
            </div>
           </div>
        </div>

   </section>
   
   </>
  )
}

export default About
