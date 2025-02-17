import Image from 'next/image'
import React from 'react'

const Design = () => {
  return (
     <div className='w-full my-12 max-w-7xl mx-auto'>
    <div className=" bg-[#FFFFFF]  lg:flex flex-row-reverse items-center justify-between p-10">
                <div className="py-20 px-[20] ">
                    <h1 className="text-[#4D4D4D]
      lg: text-[36px] font-[600]  leading-[44px]  ">How to design your site footer like<br></br> we did</h1>
                    <p  className="text-[#717171] text-[14px] font-[400] leading-[20px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt<br></br> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at<br></br> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br></br>nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer<br></br> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi<br></br> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className="bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm">Learn More</button>
                  </div>
                  <div>
                    <Image src="/pana.png" alt="Illustration" width={391} height={407} className="" />
                  </div>
                </div>
    
        </div>
      )
}

export default Design