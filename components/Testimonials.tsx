"use client";
import React from "react";
import { Swiper as SwiperType, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import review1 from "@/public/images/review1.png";
import quote from "@/public/svgs/quote.svg";
import stars from "@/public/svgs/stars.svg";
import segment from "@/public/svgs/segment.svg";
import dot from "@/public/svgs/dot.svg";
import down from "@/public/svgs/down.svg";
import up from "@/public/svgs/up.svg";
import type { Swiper } from 'swiper';

const data = [
   {
      image: review1,
      name: "Mahedi Hassan",
      title: "Website Developer & CEO StarSoftai",
      desc: "Right Now, I’m working at Upwork and Fiverr as Web Design & Developer.",
   },
   // {
   //    image: review2,
   //    name: "Md Rafi",
   //    title: "Apps Developer",
   //    desc: "I'm Rafi, Coding passion drives my tech journey.",
   // },
   // {
   //    image: review3,
   //    name: "Md Rafi",
   //    title: "Apps Developer",
   //    desc: "I'm Rafi, Coding passion drives my tech journey.",
   // },
   // {
   //    image: review4,
   //    name: "Md Rafi",
   //    title: "Apps Developer",
   //    desc: "I'm Rafi, Coding passion drives my tech journey.",
   // },
];
const Testimonials = () => {
   const swiperRef = React.useRef<Swiper>();

   return (
      <div className="px-2 mx-auto flex items-center justify-center flex-col gap-6 py-8 md:py-16">
         <p className="uppercase">TESTIMONIALS</p>
         <h2 className="text-center md:w-3/4">
            Check what our clients are saying
         </h2>
         <section className="mt-5 container text-light">
            <SwiperType
               onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
               }}
               pagination={{ dynamicBullets: true, clickable: true }}
               modules={[Pagination]}
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                     spaceBetween: 5,
                  },
               }}
            >
               {data.map((dev, index) => (
                  <SwiperSlide
                     key={index}
                     className="py-10"
                  >
                     <div className="py-8 container flex gap-10 md:gap-8 lg:justify-between items-center flex-col-reverse md:flex-row">
                        <div className="bg-[#E8F2FF] rounded-[14px] px-6 relative z-10">
                           <Image
                              src={dot}
                              alt="dot"
                              className="absolute -top-[36px] -right-8 z-[2]"
                           />
                           <Image
                              src={review1}
                              alt="review1"
                              className="-mt-20"
                           />
                           {/* navigation  */}
                           <div 
                              onClick={() => swiperRef.current?.slidePrev()}
                              className="shadow-lg flex items-center justify-center p-2 bg-white font-bold w-10 h-10 rounded-full cursor-pointer -left-4 absolute top-1/2"
                           >
                              {"<"}
                           </div>
                           <div 
                              onClick={() => swiperRef.current?.slideNext()}
                              className="shadow-lg flex items-center justify-center p-2 bg-white font-bold w-10 h-10 rounded-full cursor-pointer -right-4 absolute top-1/2"
                           >
                              {">"}
                           </div>
                           <Image
                              src={up}
                              alt="up"
                              className="absolute -top-12 -left-12 w-12 md:w-auto"
                           />
                           <Image
                              src={down}
                              alt="down"
                              className="absolute -bottom-12 -right-12 w-12 md:w-auto"
                           />
                        </div>
                        <div className="flex flex-col gap-4 md:w-[60%] xl:w-1/2">
                           <Image
                              src={quote}
                              alt="quote"
                              className="w-8 md:w-10 "
                           />
                           <Image
                              src={stars}
                              alt="*"
                           />
                           <p className="font-bold">
                              The platform transformed the way we manage our
                              operations. What used to take hours now takes
                              minutes, and we&apos;ve cut costs significantly. Highly
                              recommended!
                           </p>
                           <div className="flex items-center justify-between py-4">
                              <div className="flex flex-col place-items-start">
                                 <h5>Sarah Danjuma</h5>
                                 <small>CEO Logistics.co</small>
                              </div>
                              <Image
                                 src={segment}
                                 alt="segment"
                                 className="w-14 h-14 md:w-auto md:h-auto"
                              />
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </SwiperType>
         </section>
      </div>
   );
};

export default Testimonials;
