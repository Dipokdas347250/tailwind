import React from 'react'

const Blog = () => {
  return (
    <>
    <section className='py-[136px] bg-[#F0F0F0]'>
        <div className="max-w-container px-3 mx-auto">
           <div className=" flex justify-between flex-wrap">
           <div className=" lg:w-[32%] py-1 px-1 sm:w-[50%] w-[100%]">
                <div className="bg-bl01  py-[75px] pl-[46px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                    <h2  className='text-white  font-pops  font-bold text-[24px] pb-[30px] w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                    <a href="#"  className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>Read more</a>
                </div>
            </div>
           <div className=" lg:w-[32%] py-1 px-1 sm:w-[50%] w-[100%]">
                <div className="bg-bl02  py-[75px] pl-[46px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                    <h2  className='text-white  font-pops font-bold text-[24px] pb-[30px]  w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                    <a href="#"  className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>Read more</a>
                </div>
            </div>
           <div className=" lg:w-[32%] py-1 px-1 sm:w-[50%] w-[100%]">
                <div className="bg-bl03  py-[75px] pl-[46px] relative z-[1] after:absolute after:content-[''] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]">
                    <h2  className='text-white  font-pops font-bold text-[24px] pb-[30px]  w-[249px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                    <a href="#"  className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>Read more</a>
                </div>
            </div>
           </div>
            
        </div>

    </section>
    </>
  )
}

export default Blog
