import Image from 'next/image'
import React from 'react'

const Local = () => {
  return (
    <div className='w-full my-12 max-w-7xl mx-auto'>
      <div className=" bg-[#F5F7FA]  lg:flex justify-evenly p-10">
        <div className="py-[20px] px-[20px] ">
          <h1 className="text-[#4D4D4D]
        lg: text-[36px] font-[600]  leading-[44px]  ">Helping a local<br></br> <span className="text-[#4CAF4F]">business reinvent itself</span> </h1>
          <p className="text-[#717171] text-[16px] font-[400]">We reached here with our hard work and dedication</p>
        </div>

        {/* grid */}
        <div className='flex flex-col gap-4 items-center justify-center'>
          <div className='flex gap-4'>
          {/* 1 */}
          <div className='flex gap-3'>
            <Image src="/A.png" alt="Illustration" width={48} height={48} className="" />
            <div>
              <h1 className="text-[#4D4D4D]
      lg: text-[28px] font-[700]  leading-[36px]  ">2,245,341</h1>
              <p className="text-[#717171] text-[16px] font-[400] leading-[24px]">Members</p>
            </div>
          </div>

          {/* 2 */}
          <div className='flex gap-3'>
            <Image src="/B.png" alt="Illustration" width={48} height={48} className="" />
            <div>
              <h1 className="text-[#4D4D4D]
      lg: text-[28px] font-[700]  leading-[36px]  ">46,328</h1>
              <p className="text-[#717171] text-[16px] font-[400] leading-[24px]">Clubs</p>
            </div>
          </div>
          </div>

<div className='flex gap-5'>
          {/* 3 */}
          <div className='flex gap-3'>
            <Image src="/C.png" alt="Illustration" width={48} height={48} className="" />
            <div>
              <h1 className="text-[#4D4D4D]
      lg: text-[28px] font-[700]  leading-[36px]  ">828,867</h1>
              <p className="text-[#717171] text-[16px] font-[400] leading-[24px]">Event Bookings</p>
            </div>
          </div>

          {/* 4 */}

          <div className='flex gap-3'>
            <Image src="/D.png" alt="Illustration" width={48} height={48} className="" />
            <div>
              <h1 className="text-[#4D4D4D]
      lg: text-[28px] font-[700]  leading-[36px]  ">1,926,436</h1>
              <p className="text-[#717171] text-[16px] font-[400] leading-[24px]">Payments</p>
            </div>
          </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Local