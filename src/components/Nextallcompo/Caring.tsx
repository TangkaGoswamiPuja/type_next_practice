import Image from 'next/image'
import React from 'react'

const Caring = () => {
  return (
    <div> <div className='w-full my-12 max-w-7xl mx-auto flex flex-col gap-4 '  >

      <div className='text-center '>
        <h1 className="text-[#4D4D4D]
          lg: text-[36px] font-[600]  leading-[44px]  ">
          Caring is the new marketing               </h1>
        <p className="text-[#717171] text-[16px] font-[400]  leading-[24px] mt-2">
          The Nexcent blog is the best place to read about the latest membership insights,<br></br> trends and more. See who&#39;s joining the community, read about how our community<br></br> are increasing their membership income and lot&#39;s more.​            </p>
      </div>
      {/* image and text */}

      <div className='flex flex-col gap-10 items-center justify-evenly mt-4 lg:flex-row '>
        {/* 1 */}
        <div className=" flex flex-col items-center text-center" >
          <Image src="/image 18.png" alt="logo" width={368} height={286} />

          <div className='flex flex-col items-center justify-center bg-[#F5F7FA] p-[16] gap-[16] rounded-[8px] shadow-[#ABBED166] drop-shadow-lg mt-[-100] '  >
            <p className="text-[#717171] text-[20px] font-[400] leading-[28px] mt-2">
              Creating Streamlined<br></br> Safeguarding Processes with <br></br>OneRen </p>
            <div className='flex items-center justify-center w-[223] h-[44] p-[8] gap-[8]'>
              <p className="text-[#4CAF4F] text-[20px] font-[500] ">Read more</p>
              <Image src="/Right.png" alt="logo" width={24} height={24} />
            </div>
          </div>
</div>

        {/* 2 */}
        <div className=" flex flex-col items-center text-center" >
          <Image src="/image 19.png" alt="logo" width={368} height={286} />

          <div className='flex flex-col items-center justify-center bg-[#F5F7FA] p-[16] gap-[16] rounded-[8px] shadow-[#ABBED166] drop-shadow-lg mt-[-100] '  >
            <p className="text-[#717171] text-[20px] font-[400] leading-[28px] mt-2">
            What are your safeguarding<br></br> responsibilities and how can<br></br> you manage them? </p>
            <div className='flex items-center justify-center w-[223] h-[44] p-[8] gap-[8]'>
              <p className="text-[#4CAF4F] text-[20px] font-[500] ">Read more</p>
              <Image src="/Right.png" alt="logo" width={24} height={24} />
            </div>
          </div>
</div>
        {/* 3 */}
        <div className=" flex flex-col items-center text-center" >
          <Image src="/image 20.png" alt="logo" width={368} height={286} />

          <div className='flex flex-col items-center justify-center bg-[#F5F7FA] p-[16] gap-[16] rounded-[8px] shadow-[#ABBED166] drop-shadow-lg mt-[-100] '  >
            <p className="text-[#717171] text-[20px] font-[400] leading-[28px] mt-2">
            Revamping the Membership<br></br> Model with Triathlon<br></br> Australia </p>
            <div className='flex items-center justify-center w-[223] h-[44] p-[8] gap-[8]'>
              <p className="text-[#4CAF4F] text-[20px] font-[500] ">Read more</p>
              <Image src="/Right.png" alt="logo" width={24} height={24} />
            </div>
          </div>
</div>


      </div>
    </div></div>
  )
}

export default Caring