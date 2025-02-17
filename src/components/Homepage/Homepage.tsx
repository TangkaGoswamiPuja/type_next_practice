
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
const Homepage = () => {
  return (
      <div className="w-full my-7 h-[590px] bg-[#F5F7FA] max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" bg-[#F5F7FA]  lg:flex items-center justify-between p-10">
            <div className="py-20 px-[20] ">
                <h1 className="text-[#4D4D4D]
  lg: text-[64px] font-[600]  leading-[76px]  ">Lessons and insights<br></br> <span className="text-[#4CAF4F]">from 8 years</span> </h1>
                <p  className="text-[#717171] text-[16px] font-[400]">Where to grow your business as a photographer: site or social media?</p>
                <button className="bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm">Register</button>
              </div>
              <div>
                <Image src="/Illustration.png" alt="Illustration" width={391} height={407} className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" bg-[#F5F7FA]  lg:flex items-center justify-between p-10">
            <div className="py-20 px-[20] ">
                <h1 className="text-[#4D4D4D]
  lg: text-[64px] font-[600]  leading-[76px]  ">Build Up Your Lessons<br></br> <span className="text-[#4CAF4F]">With Us</span> </h1>
                <p  className="text-[#717171] text-[16px] font-[400]">Where to grow your business as a photographer: site or social media?</p>
                <button className="bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm">Register</button>
              </div>
              <div>
                <Image src="/Illustration.png" alt="Illustration" width={391} height={407} className="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" bg-[#F5F7FA]  lg:flex items-center justify-between p-10">
            <div className="py-20 px-[20] ">
                <h1 className="text-[#4D4D4D]
  lg: text-[64px] font-[600]  leading-[76px]  ">Our Active Helpinghand <br></br> <span className="text-[#4CAF4F]">Always For You</span> </h1>
                <p  className="text-[#717171] text-[16px] font-[400]">Where to grow your business as a photographer: site or social media?</p>
                <button className="bg-[#4CAF4F] px-[32] py-[14] mt-3 text-white rounded-sm">Register</button>
              </div>
              <div>
                <Image src="/Illustration.png" alt="Illustration" width={391} height={407} className="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default Homepage;