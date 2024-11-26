import React from "react";
import { Button } from "../ui/button";
import hero from "@/public/images/hero.jpg";
import Image from "next/image";
import { Video, Watch, WatchIcon } from "lucide-react";
import openzep from "@/public/svgs/openzep.svg"
import oracle from "@/public/svgs/oracle.svg"
import morpheus from "@/public/svgs/morpheus.svg"
import samsung from "@/public/svgs/samsung.svg"
import monday from "@/public/svgs/monday.svg"
import segment from "@/public/svgs/segment.svg"

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
               <h1 className="text-6xl uppercase font-bold text-center">
                  empowering growth through innovation
               </h1>
               <p>
                  Transforming Complex Technological Challenges Into Seemless
                  Solutions
               </p>
               <div className="flex items-center justify-center gap-6 pt-8">
                  <Button className="bg-submain rounded-full p-6">
                     Try free trial
                  </Button>
                  <Button
                     className="rounded-full p-6 bg-transparent"
                     variant="outline"
                  >
                     <Video /> View Demo
                  </Button>
               </div>
            </div>
            {/* partners */}
            <div className="md:w-[80%] border mx-auto rounded-t-xl p-6 flex flex-col gap-6 items-center justify-center  -bottom-[40px] absolute bg-white z-30">
               <p className="font-bold text-center">
                  Over 32k+ software businesses growing with Ziba Innovatives
               </p>
               {/* parters */}

               <div className="flex items-center justify-center gap-8">
                  <Image src={openzep} alt="ziba"/>
                  <Image src={oracle} alt="ziba"/>
                  <Image src={morpheus} alt="ziba"/>
                  <Image src={samsung} alt="ziba"/>
                  <Image src={monday} alt="ziba"/>
                  <Image src={segment} alt="ziba"/>
               </div>
            </div>
         </div>
      </>
   );
};

export default Hero;
