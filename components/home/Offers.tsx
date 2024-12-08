"use client";
import React from "react";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Health from "@/public/images/health.png";
import Logistics from "@/public/images/logistics.png";
import Education from "@/public/images/education.png";
import Recruit from "@/public/images/recruit.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Offers = () => {
   const [api, setApi] = React.useState<CarouselApi>();
   const [current, setCurrent] = React.useState(0);

   return (
      <div className="relative">
         <div className="absolute flex items-center justify-center container mx-auto p-4 top-0 flex-col gap-4 text-center z-20 text-white left-1/2 -translate-x-1/2 xl:w-3/4 pt-[140px] md:pt-16">
            <p>INDUSTRIES WE SERVE</p>
            
            <h2>
               We Offer Versatile Solutions To Meet The Needs Of Businesses
               Across Diverse Sectors
            </h2>
         </div>
         <Carousel
            setApi={setApi}
            opts={{
               align: "start",
               loop: true,
            }}
            className="w-full"
         >
            <CarouselContent className="flex p-0 m-0 space-x-0">
               {[Health, Logistics, Education, Recruit, Recruit].map((image, index) => (
                  <CarouselItem 
                     key={index} 
                     className="flex-shrink-0 pl-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                  >
                     <Image
                        src={image}
                        alt={`slide-${index}`}
                        className="w-full h-auto"
                     />
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>

         <div className="flex items-center justify-center py-8 gap-6 text-white absolute bottom-0 left-1/2 -translate-x-1/2">
            <div className="flex items-center justify-center py-8 gap-4">
               <div 
                  onClick={() => api?.scrollPrev()}
                  className="rounded-full p-4 bg-submain cursor-pointer hover:bg-opacity-80"
               >
                  <ArrowLeft size={24} />
               </div>
               <div 
                  onClick={() => api?.scrollNext()}
                  className="rounded-full p-4 bg-submain cursor-pointer hover:bg-opacity-80"
               >
                  <ArrowRight size={24} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Offers;
