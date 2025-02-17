import Image from 'next/image'
import React from 'react'

const System = () => {
  return (
    <div className='w-full my-12 max-w-7xl mx-auto flex flex-col gap-4 '  >

      <div className='text-center '>
        <h1 className="text-[#4D4D4D]
      lg: text-[36px] font-[600]  leading-[44px]  ">
          Manage your entire community<br></br> in a single system                    </h1>
        <p className="text-[#717171] text-[16px] font-[400] mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>
      {/* image and text */}

      <div className='flex flex-col gap-10 items-center justify-evenly mt-4 lg:flex-row '>
        {/* 1 */}
        <div className=" flex flex-col items-center text-center" >
          <Image src="/Icon.png" alt="logo" width={65} height={56} />
          <h1 className="text-[#4D4D4D]
      lg: text-[36px] font-[700]  leading-[36px]  ">
            Membership<br></br> Organisations
          </h1>
          <p className="text-[#717171] text-[14px] font-[400] leading-[20px] mt-2">
            Our membership management<br></br> software provides full automation of<br></br> membership renewals and payments </p>
        </div>

        {/* 2 */}
        <div className=" flex flex-col items-center text-center" >
          <Image src="/Icon (1).png" alt="logo" width={65} height={56} />
          <h1 className="text-[#4D4D4D]
      lg: text-[36px] font-[700]  leading-[36px]  ">
National<br></br> Associations          </h1>
          <p className="text-[#717171] text-[14px] font-[400] leading-[20px] mt-2">
          Our membership management<br></br> software provides full automation of<br></br> membership renewals and payments</p>
        </div>
        {/* 3 */}
        <div className=" flex flex-col items-center text-center">
          <Image src="/Icon (2).png" alt="logo" width={65} height={56} />
          <h1 className="text-[#4D4D4D]
      lg: text-[36px] font-[700]  leading-[36px]  ">
Clubs And<br></br> Groups          </h1>
          <p className="text-[#717171] text-[14px] font-[400] leading-[20px] mt-2">
          Our membership management<br></br> software provides full automation of<br></br> membership renewals and payments</p>
        </div>


      </div>
    </div>
  )
}

export default System