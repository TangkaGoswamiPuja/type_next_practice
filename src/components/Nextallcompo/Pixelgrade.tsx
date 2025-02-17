import Image from 'next/image'
import React from 'react'

const Pixelgrade = () => {
  return (
    <div className='w-full my-12 max-w-7xl mx-auto'>
<div className=" bg-[#FFFFFF]  lg:flex flex-row-reverse items-center justify-between p-10">
            <div className="py-20 px-[20] ">
                <h1 className="text-[#4D4D4D]
  lg: text-[36px] font-[600]  leading-[44px]  ">The unseen of spending three<br></br> years at Pixelgrade </h1>
                <p  className="text-[#717171] text-[14px] font-[400] leading-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed<br></br> sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed<br></br> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam<br></br> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className="bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm">Learn More</button>
              </div>
              <div>
                <Image src="/Frame 35.png" alt="Illustration" width={391} height={407} className="" />
              </div>
            </div>

    </div>
  )
}

export default Pixelgrade