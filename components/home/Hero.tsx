import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
   return (
      <>
         <div className="flex items-center justify-center min-h-[54vh] relative ">
            <div className="md:w-3/4 xl:w-[60%] flex flex-col gap-3 items-center justify-center text-center">
               <h1 className="text-6xl uppercase font-bold text-center">
                  empowering growth through innovation
               </h1>
               <p>
                  Transforming Complex Technological Challenges Into Seemless
                  Solutions
               </p>
               <div className="flex items-center justify-center gap-6">
                  <Button className="bg-main rounded-full p-6">
                     Try free trial
                  </Button>
                  <Button
                     className="rounded-full p-6 "
                     variant="outline"
                  >
                     View Demo
                  </Button>
               </div>
            </div>
            <div className="md:w-[80%] border mx-auto rounded-t-xl p-6 flex flex-col gap-6 items-center justify-center  -bottom-[60px] absolute">
            <p className="font-bold text-center">
               Over 32k+ software businesses growing with Ziba Innovatives
            </p>
            {/* parters */}
            <div className="flex items-center justify-center gap-8"></div>
         </div>
         </div>
         
      </>
   );
};

export default Hero;
