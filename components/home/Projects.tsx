import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Ziba from "@/public/images/ziba.png";
import Music from "@/public/images/music.png";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
   return (
      <div className="bg-main py-6 md:py-12">
         <div className="container flex flex-col items-center justify-center py-6 text-white gap-3">
            <p className="uppercase">OUR PORTFOLIO</p>
            <h2 className="md:w-[70%] xl:w-[60%] text-center">
               Tailored solutions with proven impact—explore our work.
            </h2>
            <p className="md:w-[70%] xl:w-[60%] text-center text-input">
               Take a look at some of our recent projects and see how we've
               helped other businesses elevate their brand and drive business
               growth.
            </p>

            {/* tabs */}

            <Tabs
               defaultValue="design"
               className=" mt-8 py-6"
            >
               <TabsList className="flex space-x-4 overflow-x-auto whitespace-nowrap no-scrollbar p-4 rounded-full h-[70px] overflow-y-hidden justify-between w-[90%] md:w-[60%] mx-auto">
                  <TabsTrigger
                     value="design"
                     className="rounded-full p-4"
                  >
                     UI/UX Design
                  </TabsTrigger>
                  <TabsTrigger
                     value="marketing"
                     className="rounded-full p-4"
                  >
                     Digital Marketing
                  </TabsTrigger>
                  <TabsTrigger
                     value="saas"
                     className="rounded-full p-4"
                  >
                     SAAS Management
                  </TabsTrigger>
                  <TabsTrigger
                     value="development"
                     className="rounded-full p-4 active:bg-submain"
                  >
                     Development
                  </TabsTrigger>
               </TabsList>
               <TabsContent value="design">
                  <div className="flex flex-col md:flex-row gap-6 py-6">
                     <div className="rounded-lg flex flex-col gap-4 p-4 bg-second">
                        <Image
                           src={Ziba}
                           alt="ziba"
                        />
                        <div>
                           <h4>Ziba Pay Website</h4>
                           <small>
                              Streamlines payment for Businesses in Africa
                           </small>
                        </div>
                     </div>
                     <div className="rounded-lg flex flex-col gap-4 p-4 bg-second">
                        <Image
                           src={Music}
                           alt="ziba"
                        />
                        <div>
                           <h4>Music Streaming Dashboard</h4>
                           <small>
                              We are designed to help your business thrive in
                              the online world.
                           </small>
                        </div>
                     </div>
                  </div>
               </TabsContent>
               <TabsContent value="marketing"></TabsContent>
            </Tabs>
            <div className="flex items-center justify-center py-8 gap-6">
               <div className="rounded-full p-6 bg-submain cursor-pointer">
                  <ArrowLeft />
               </div>
               <div className="rounded-full p-6 bg-submain cursor-pointer">
                  <ArrowRight />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Projects;
