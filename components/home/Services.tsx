import React from "react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import codes from "@/public/images/codes.png";

const Services = () => {
   return (
      <div className="bg-input mt-[100px] flex items-center justify-center flex-col gap-4 p-6 py-6 md:py-8">
         <p className="uppercase text-center">Our services</p>
         <h2 className="text-center capitalize md:w-3/4 xl:w-[60%] mb-2 md:mb-4">
            save time managing your business with our best services
         </h2>

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
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-2"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">02</span>Cloud Solution
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-3"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">03</span>Saas Product Development
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-4"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">04</span>ICE Based Solutions
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-5"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">05</span>Technology Consulting
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-6"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">06</span>HR Management Software
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
            <AccordionItem
               value="item-7"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6">07</span>Sales Funnel Design for Software & Digital Products
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="">
                     We craft software solutions uniquely suited to your
                     business. From concept to launch, we develop tools that
                     align perfectly with your specific needs and drive your
                     goals forward.
                  </p>

                  <div>
                     <Image
                        src={codes}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default Services;
