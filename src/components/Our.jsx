import React from 'react'

const Our = () => {
  return (
    <section>
        <div className=" flex pt-[30px] flex-wrap">
            <div className=" lg:w-[50%] w-[100%] py-[105px]">
                <h2 className='text-[#000] font-pops font-bold lg:text-[48px] text-[28px]  text-center'>Our Services</h2>
                <p className='text-[#000] font-pops font-medium text-[16px] lg:mx-[150px] lg:w-[405px] px-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className=" lg:w-[50%]  w-[100%]">
                <div className="bg-our  py-[130px] lg:pl-[80px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                      <h3 className='text-white  font-pops text-center lg:text-start  font-bold text-[28px] pb-[30px] '>Modern natural oil and gas refineries.</h3>
                      <div className="text-center lg:text-start">
                      <a href="#" className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>LEARN MORE</a>

                      </div>

                </div>
            </div>
        </div>
        <div className=" flex flex-wrap ">
            <div className=" lg:w-[50%]  w-[100%]">
                <div className="bg-our02  py-[130px] lg:pl-[80px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                      <h3 className='text-white  font-pops text-center lg:text-start font-bold text-[28px] pb-[30px] '>Supply of national industries..</h3>
                      <div className="text-center lg:text-start">
                      <a href="#" className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>LEARN MORE</a>

                      </div>

                </div>
            </div>
            <div className=" lg:w-[50%]   w-[100%]">
                <div className="bg-our01  py-[130px] lg:pl-[80px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                      <h3 className='text-white  font-pops text-center lg:text-start font-bold text-[28px] pb-[30px] '>National fuel distribution and supply.</h3>
                      <div className="text-center lg:text-start">
                      <a href="#" className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>LEARN MORE</a>

                      </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Our
