import Image from 'next/image'

const TimSmith = () => {
  return (
    <div>
       <div className=' my-12 max-w-7xl mx-auto w-full '>
          <div className=" bg-[#F5F7FA]  lg:flex flex-row items-center justify-evenly p-10">
          <div>
                          <Image src="/image 9.png" alt="Illustration" width={326} height={326} className="ml-12" />
                        </div>
                      <div className="px-[20] ">
                            <p  className="text-[#717171] text-[16px] font-[500] leading-[24px] ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br></br>tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida<br></br> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie<br></br> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br></br>eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,<br></br> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br></br>id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <p  className="text-[#4CAF4F] text-[20px] font-[600] leading-[28px]">
                            Tim Smith
                            </p>

                            <p className="text-[#89939E] text-[16px] font-[400] leading-[24px]">British Dragon Boat Racing Association</p>
                       

 <div className='flex  gap-5 items-center justify-evenly mt-4 lg:flex-row '>
                <Image src="/Logo(6).png" alt="logo" width={40} height={40} />
                <Image src="/Logo (1).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (2).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (3).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (4).png" alt="logo" width={48} height={48} />
                <Image src="/Logo (5).png" alt="logo" width={48} height={48} />
                 
                 <div className='flex items-center w-[223] h-[44] p-[8] gap-[8]'>
                 <p className="text-[#4CAF4F] text-[20px] font-[500] ">Meet all customers</p>
                 <Image src="/Right.png" alt="logo" width={24} height={24} />
                 </div>

            </div>
            </div>
                        
                      </div>
          
              </div>
    </div>
  )
}

export default TimSmith