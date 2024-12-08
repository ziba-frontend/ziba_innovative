import React from "react";
import { Button } from "../ui/button";
import hero from "@/public/images/hero.jpg";
import Image from "next/image";
import { Video } from "lucide-react";
import openzep from "@/public/svgs/openzep.svg";
import oracle from "@/public/svgs/oracle.svg";
import morpheus from "@/public/svgs/morpheus.svg";
import samsung from "@/public/svgs/samsung.svg";
import monday from "@/public/svgs/monday.svg";
import segment from "@/public/svgs/segment.svg";
import clock from "@/public/svgs/hero-clock.svg";

const Hero = () => {
   return (
      <>
         <div className="flex items-center justify-center min-h-[80vh] relative ">
            <Image
               src={hero}
               alt="ziba innovatives"
               className="w-full h-full object-cover"
               fill
            />
            <div className="md:w-3/4 xl:w-[60%] flex flex-col gap-3 items-center justify-center text-center absolute text-white top-[20%]">
               <h1 className="sm:text-3xl md:text-4xl lg:text-6xl uppercase font-bold text-center">
                  empowering growth through innovation
               </h1>
               <p className="flex md:items-center md:gap-2 justify-center">
                  <span>
                     <Image
                        src={clock}
                        alt="clock"
                        className="w-8 md:w-auto"
                     />
                  </span>
                  Transforming Complex Technological Challenges Into Seemless
                  Solutions
               </p>
               <div className="flex items-center justify-center gap-6 pt-8">
                  <Button className="bg-submain rounded-full p-6">
                     Try free trial
                  </Button>
                  <Button
                     className="rounded-full p-6 bg-transparent border-none"
                     variant="outline"
                  >
                     <Video /> View Demo
                  </Button>
               </div>
            </div>
            {/* partners */}
            <div className="w-[98%] sm:w-[90%] md:w-[80%] border mx-auto rounded-t-xl p-6 flex flex-col gap-6 items-center justify-center  -bottom-[70px] md:-bottom-[100px] absolute bg-white z-30">
               <p className="font-bold text-center">
                  Over 32k+ software businesses growing with Ziba Innovatives
               </p>
               {/* parters */}

               <div className="flex items-center justify-center gap-8 flex-wrap">
                  <Image
                     src={openzep}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
                  <Image
                     src={oracle}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
                  <Image
                     src={morpheus}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
                  <Image
                     src={samsung}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
                  <Image
                     src={monday}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
                  <Image
                     src={segment}
                     alt="ziba"
                     className="w-[80px] md:w-[120px] lg:w-[150px]"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Hero;
