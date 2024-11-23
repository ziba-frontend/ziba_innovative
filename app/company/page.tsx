import Image from "next/image";
import React from "react";
import Meeting1 from "@/public/images/meeting1.png";
import Meeting2 from "@/public/images/meeting2.png";
import Mission from "@/public/images/mission.png";
const Company = () => {
   return (
      <div className="py-6 md:py-10">
         <div className="container py-6">
            <h1 className="lg:w-3/4 2xl:w-[60%]">
               Visionary Creativity for Unmatched Business Growth
            </h1>
         </div>

         <div className="w-full relative ">
            <Image
               src={Meeting2}
               alt="meeting"
               className="w-full max-h-[109.5vh]"
            />
            <div className="p-6 flex flex-col gap-8 bg-[#030A11] text-white absolute bottom-0 w-full md:w-1/2 left-1/2 -translate-x-1/2">
               <h3>Your Partner in Achieving the Extraordinary</h3>
               <p>
                  Together, we turn ambitious visions into actionable realities,
                  empowering your business to thrive in a competitive world.
               </p>
            </div>

            <div className="flex flex-col absolute top-0 left-0">
               <div className="bg-main py-8 text-white">
                  <h3 className="w-full md:w-1/2 px-3">
                     Pioneers in Transformational Solutions
                  </h3>
               </div>
               <Image
                  src={Meeting1}
                  alt="meeting"
                  className="w-full"
               />
            </div>
         </div>

         {/* about */}

         {/* Mission */}

         <div className="bg-input py-8">
            <div className="container flex flex-col gap-6 lg:gap-8 mx-auto md:flex-row items-center justify-center pt-6 md:pt-10 ">
               <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                     <h3>Our Mission</h3>
                     <p>
                        We transform businesses with cutting-edge SaaS and ICE
                        solutions, making complex technology accessible and
                        driving innovation, efficiency, and growth.
                     </p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <h3>Our Vision</h3>
                     <p>
                        To become a top-tier provider of transformative software
                        solutions, known for simplifying complexity and
                        empowering businesses to excel in a fast-paced
                        technological world.
                     </p>
                  </div>
               </div>
               <Image
                  src={Mission}
                  alt="ziba"
               />
            </div>
         </div>

         {/* team */}

         {/* testimonials */}


      </div>
   );
};

export default Company;
