import React from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Health from "@/public/images/health.png";
import Logistics from "@/public/images/logistics.png";
import Education from "@/public/images/education.png";
import Recruit from "@/public/images/recruit.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Offers = () => {
   return (
      <div className="relative ">
         <div className="absolute flex items-center justify-center container mx-auto p-4 top-0 flex-col gap-4 text-center z-20 text-white left-1/2 -translate-x-1/2 xl:w-3/4 pt-8 md:pt-16">
            <p>INDUSTRIES WE SERVE</p>
            <h2>
               We Offer Versatile Solutions To Meet The Needs Of Businesses
               Across Diverse Sectors
            </h2>
         </div>
         <Carousel className="w-full">
            <CarouselContent className="flex p-0 m-0 space-x-0 -ml-1">
               <CarouselItem className="flex-shrink-0 -pl-1 md:basis-1/2 lg:basis-[20%] ">
                  <Image
                     src={Health}
                     alt="healthcare"
                  />
               </CarouselItem>
               <CarouselItem className="flex-shrink-0 -pl-1 md:basis-1/2 lg:basis-[20%] ">
                  <Image
                     src={Logistics}
                     alt="logistics"
                  />
               </CarouselItem>
               <CarouselItem className="flex-shrink-0 -pl-1 md:basis-1/2 lg:basis-[20%] ">
                  <Image
                     src={Education}
                     alt="education"
                  />
               </CarouselItem>
               <CarouselItem className="flex-shrink-0 -pl-1 md:basis-1/2 lg:basis-[20%] ">
                  <Image
                     src={Recruit}
                     alt="recruitment"
                  />
               </CarouselItem>
               <CarouselItem className="flex-shrink-0 -pl-1 md:basis-1/2 lg:basis-[20%] ">
                  <Image
                     src={Recruit}
                     alt="recruitment"
                  />
               </CarouselItem>
            </CarouselContent>
         </Carousel>
         <div className="flex items-center justify-center py-8 gap-6 text-white absolute bottom-0 left-1/2 -translate-x-1/2">
               <div className="rounded-full p-6 bg-submain cursor-pointer">
                  <ArrowLeft />
               </div>
               <div className="rounded-full p-6 bg-submain cursor-pointer">
                  <ArrowRight />
               </div>
            </div>
      </div>
   );
};

export default Offers;
