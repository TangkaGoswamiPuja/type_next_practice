import Image from "next/image"
import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <div className=" flex flex-col justify-evenly mx-auto bg-[#263238] w-full py-[165px] px-[64px] gap-[40px] lg:flex-row h-328">
            {/* 1st part */}
            <div>
                <div className="flex gap-2 " >
                    <Image src="/w1.png" alt="logo" width={43.27129364013672} height={29.671743392944336} /> <span className="text-2xl font-bold text-[#FFFFFF] ">Nexcent</span>

                </div>
                <p className="text-[#F5F7FA] text-[14px] font-[400] leading-[20px] mt-4">
                    Copyright © 2020 Nexcent ltd.
                </p>
                <p className="text-[#F5F7FA] text-[14px] font-[400] leading-[20px] mt-2">All rights reserved</p>
           

            <div className="flex gap-[16px] mt-4 lg:flex-row ">
                <Image src="/Social Icons.png" alt="logo" width={40} height={40} />
                <Image src="/Social Icons1.png" alt="logo" width={48} height={48} />
                <Image src="/Social Icons2.png" alt="logo" width={48} height={48} />
                <Image src="/Social Icons3.png" alt="logo" width={48} height={48} />
            </div>
            </div>

            {/* 2nd */}

            <div>
                <h1 className="text-[#FFFFFF]
      text-[20px] font-[600]  leading-[28px]  ">Company</h1>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-3 ">About us</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Blog</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Contact us</p> 
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Pricing</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Testimonials</p>
            </div>

            {/* 3rd */}

            <div>
                <h1 className="text-[#FFFFFF]
      text-[20px] font-[600]  leading-[28px]  ">Support</h1>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-3">Help center</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Terms of service</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Legal</p> 
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Privacy policy</p>
                <p className="text-[#F5F7FA]
       text-[14px] font-[400]  leading-[20px] mt-2 ">Status</p>
            </div>

            {/* 4th */}

            <div>
                <h1 className="text-[#FFFFFF]
      text-[20px] font-[600]  leading-[28px]  ">
                Stay up to date  
                </h1>

                <div className="flex justify-between mt-4">
                    <Input type="email" placeholder="Your email address " className=" h-[40px] rounded-[4px]  text-[#e5e6eb] text-[14px] font-[400] leading-[20px] opacity-[20%] bg-[#FFFFFF]  px-[10px] py-[10px]
                    border-[1px] border-[#D9DBE1] lg:w-[255px]
" />
                     
               <div className=" md:mr-[-30px]  lg:ml-[-30px] mt-[10px]"> <Image src="/send.png" alt="logo" width={18} height={18} /></div>
                </div>
            </div>

        </div>
    )
}

export default Footer