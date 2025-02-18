import Image from 'next/image'
import React from 'react'

const Demo = () => {
  return (
    <div className='w-full my-12 max-w-7xl mx-auto flex flex-col gap-4 '  >

    <div className='flex flex-col justify-center  text-center '>
        <h1 className="text-[#4D4D4D]
  lg: text-[64px] font-[600]  leading-[76px]  ">
            Pellentesque suscipit<br></br> fringilla libero eu.   </h1>
       <div className="flex justify-center ">
       <button className="flex justify-center text-center bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm w-[178]  ">Get a Demo
       <Image src="/Right1.png" alt="logo" width={24} height={24} /></button>
       </div>

    </div>

</div>
  )
}

export default Demo