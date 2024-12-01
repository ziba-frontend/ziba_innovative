import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Ziba from "@/public/images/ziba.png";
import Music from "@/public/images/music.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
   return (
      <div className="bg-main py-6 md:py-12">
         <div className="container flex flex-col items-center justify-center px-4 md:px-8 text-white gap-4">
            <p className="uppercase text-sm md:text-base">OUR PORTFOLIO</p>
            <h2 className="text-center text-lg md:text-2xl lg:text-3xl md:w-[80%] xl:w-[60%]">
               Tailored solutions with proven impact—explore our work.
            </h2>
            <p className="text-center text-sm md:text-base lg:text-lg md:w-[80%] xl:w-[60%] text-input">
               Take a look at some of our recent projects and see how we've
               helped other businesses elevate their brand and drive business
               growth.
            </p>

            {/* Tabs Section */}
            <Tabs
               defaultValue="design"
               className="w-full mt-8 py-6"
            >
               <TabsList className="flex space-x-4 overflow-x-auto whitespace-nowrap no-scrollbar p-4 rounded-full h-[50px] md:h-[70px] items-center justify-between w-full lg:w-[60%] mx-auto">
                  <TabsTrigger
                     value="design"
                     className="rounded-full px-6 py-2 md:px-8 md:py-3"
                  >
                     UI/UX Design
                  </TabsTrigger>
                  <TabsTrigger
                     value="marketing"
                     className="rounded-full px-6 py-2 md:px-8 md:py-3"
                  >
                     Digital Marketing
                  </TabsTrigger>
                  <TabsTrigger
                     value="saas"
                     className="rounded-full px-6 py-2 md:px-8 md:py-3"
                  >
                     SAAS Management
                  </TabsTrigger>
                  <TabsTrigger
                     value="development"
                     className="rounded-full px-6 py-2 md:px-8 md:py-3"
                  >
                     Development
                  </TabsTrigger>
               </TabsList>

               <TabsContent value="design">
                  <div className="flex flex-col md:flex-row gap-6 py-6">
                     <div className="rounded-lg flex flex-col gap-4 p-4 bg-second ">
                        <Image
                           src={Ziba}
                           alt="Ziba Pay"
                           className="w-full h-auto "
                        />
                        <div>
                           <h4 className="text-lg font-semibold">
                              Ziba Pay Website
                           </h4>
                           <small className="text-sm">
                              Streamlines payment for businesses in Africa.
                           </small>
                        </div>
                     </div>
                     <div className="rounded-lg flex flex-col gap-4 p-4 bg-second ">
                        <Image
                           src={Music}
                           alt="Music Streaming"
                           className="w-full h-auto"
                        />
                        <div>
                           <h4 className="text-lg font-semibold">
                              Music Streaming Dashboard
                           </h4>
                           <small className="text-sm">
                              Designed to help your business thrive online.
                           </small>
                        </div>
                     </div>
                  </div>
               </TabsContent>

               <TabsContent value="marketing"></TabsContent>
            </Tabs>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center py-8 gap-4">
               <div className="rounded-full p-4 bg-submain cursor-pointer hover:bg-opacity-80">
                  <ArrowLeft size={24} />
               </div>
               <div className="rounded-full p-4 bg-submain cursor-pointer hover:bg-opacity-80">
                  <ArrowRight size={24} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
