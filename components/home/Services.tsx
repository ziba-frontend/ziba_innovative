import React from "react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Services = () => {
   return (
      <div className="bg-input mt-[100px] flex items-center justify-center flex-col gap-4 p-6">
         <p className="uppercase text-center">Our services</p>
         <h3 className="text-center capitalize">
            save time managing your business with our best services
         </h3>

         <Accordion
            type="single"
            collapsible
            className="w-full container  "
         >
            <AccordionItem
               value="item-1"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">01</span>Custom Software
                     Development
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>
                  {/*                 
                  <div><Image/></div> */}
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default Services;
