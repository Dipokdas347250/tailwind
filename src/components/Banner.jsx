import React from 'react'

const Banner = () => {
  return (
    <> 
    <section className='bg-ban bg-no-repeat bg-center  bg-cover lg:py-[257px] py-[180px]  relative z-[1] after:absolute after:content-[""] after:top-0 after:left-0 after:h-full after:w-full after:z-[-1] after:bg-[rgba(0,0,0,0.35)]'>
        <div className="max-w-container px-3 mx-auto">
            <h2 className='text-[#fff] font-pops text-center lg:text-start font-bold lg:text-[64px] text-[28px]  lg:pr-[350px] pb-[30px]'>We exist since 1975 on the oil and gas industry.</h2>
            <div className="text-center lg:text-start">

            <a href="#" className='py-[13px] px-[40px] bg-[red] text-white  font-pops font-semibold text-[16px]'>LEARN MORE</a>
            
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Banner
