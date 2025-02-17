import Image from 'next/image'
import React from 'react'

const Clientspage = () => {
    return (
        <div className='w-full my-7 max-w-7xl mx-auto flex flex-col gap-4'  >

            <div className='text-center '>
                <h1 className="text-[#4D4D4D]
  lg: text-[64px] font-[600]  leading-[44px]  ">
                    Our Clients
                </h1>
                <p className="text-[#717171] text-[16px] font-[400] mt-2">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>

            <div className='flex flex-col gap-10 items-center justify-evenly mt-4 lg:flex-row '>
                <Image src="/Logo(6).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (1).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (2).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (3).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (4).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (5).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (2).png" alt="logo" width={48} height={48} />

            </div>
        </div>
    )
}

export default Clientspage