"use client";
import React from "react";
import { Swiper as SwiperType, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import person1 from "@/public/images/person1.png";
import person2 from "@/public/images/person2.png";
import person3 from "@/public/images/person3.png";
import person4 from "@/public/images/person4.png";
import fb from "@/public/svgs/fb.svg"
import ig from "@/public/svgs/ig.svg"
import twitter from "@/public/svgs/twitter.svg"

const data = [
   {
      image: person1,
      name: "Mahedi Hassan",
      title: "Website Developer & CEO StarSoftai",
      desc: "Right Now, I’m working at Upwork and Fiverr as Web Design & Developer.",
   },
   {
      image: person2,
      name: "Md Rafi",
      title: "Apps Developer",
      desc: "I'm Rafi, Coding passion drives my tech journey.",
   },
   {
      image: person3,
      name: "Md Rafi",
      title: "Apps Developer",
      desc: "I'm Rafi, Coding passion drives my tech journey.",
   },
   {
      image: person4,
      name: "Md Rafi",
      title: "Apps Developer",
      desc: "I'm Rafi, Coding passion drives my tech journey.",
   },
];
const Team = () => {
   return (
      <div className="px-2 mx-auto flex items-center justify-center flex-col gap-6 py-8 md:py-16">
         <p className="uppercase">CREATIVE TEAM</p>
         <h2 className="text-center md:w-3/4">
            Your Partner in Expertise and Excellence
         </h2>

         <section className="mt-5 container text-light">
            <SwiperType
               pagination={{ dynamicBullets: true, clickable: true }}
               modules={[Pagination]}
               breakpoints={{
                  320: {
                     slidesPerView: 1,
                     spaceBetween: 5,
                  },
                  640: {
                     slidesPerView: 1.5,
                     spaceBetween: 8,
                  },
                  768: {
                     slidesPerView: 2,
                     spaceBetween: 10,
                  },
                  900: {
                     slidesPerView: 2.2,
                     spaceBetween: 10,
                  },
                  1024: {
                     slidesPerView: 2.5,
                     spaceBetween: 10,
                  },
                  1100: {
                     slidesPerView: 3,
                     spaceBetween: 10,
                  },
                  1200: {
                     slidesPerView: 3.5,
                     spaceBetween: 10,
                  },
                  1400: {
                     slidesPerView: 4,
                     spaceBetween: 10,
                  },
               }}
            >
               {data.map((dev, index) => (
                  <SwiperSlide
                     key={index}
                     className="py-10"
                  >
                     <div className="flex flex-col  sm:min-w-[320px]  items-center border-2 border-input min-h-[540px]">
                        <Image
                           src={dev.image}
                           alt={dev.name}
                           className="w-full"
                        />
                        <div className="py-3 flex flex-col gap-3 text-left w-full px-2 pl-2">
                           <h4>{dev.name}</h4>
                           <p>{dev.title}</p>
                           <small>{dev.desc}</small>
                           <div className="flex py-3 items-center justify-center gap-2">
                            <Image src={fb} alt="fb"/>
                            <Image src={ig} alt="ig"/>
                            <Image src={twitter} alt="twitter"/>
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

export default Team;
