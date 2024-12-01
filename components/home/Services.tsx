import React from "react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import codes from "@/public/images/codes.png";
import cloud from "@/public/images/cloud.png"
import saas from "@/public/images/saas.png"
import ice from "@/public/images/ice.png"
import tech from "@/public/images/tech.png"
import hr from "@/public/images/hr.png"
import sales from "@/public/images/sales.png"

const Services = () => {
   return (
      <div className="bg-[#F8F8F8] pt-10">
      <div className="bg-input mt-[60px] flex items-center justify-center flex-col gap-4 p-6 py-6 md:py-8">
         <p className="uppercase text-center">Our services</p>
         <h2 className="text-center capitalize md:w-3/4 xl:w-[60%] mb-2 md:mb-4">
            save time managing your business with our best services
         </h2>

         <Accordion
            type="single"
            collapsible
            className="w-full md:container"
         >
            <AccordionItem
               value="item-1"
               className="bg-white p-4 rounded-xl mb-6"
            >
               <AccordionTrigger>
                  <h3>
                     <span className="mr-2 md:mr-6 lg:mr-10">01</span>Custom Software
                     Development
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
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
                     <span className="mr-2 md:mr-6 lg:mr-10">02</span>Cloud Solution
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Empower your business with the flexibility and scalability of cloud technology. At Ziba Innovatives, we deliver tailored cloud solutions that streamline operations, enhance collaboration, and ensure data security. Whether you&apos;re migrating to the cloud, optimizing infrastructure, or building cloud-native applications, our expertise ensures seamless integration and maximum efficiency.
                  </p>

                  <div>
                     <Image
                        src={cloud}
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
                     <span className="mr-2 md:mr-6 lg:mr-10">03</span>Saas Product Development
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Transform your vision into reality with our cutting-edge SaaS product development services. At Ziba Innovatives, we specialize in designing scalable, secure, and user-friendly software-as-a-service solutions tailored to your business needs. From concept to launch, we handle every step to deliver innovative products that drive growth and customer satisfaction.
                  </p>

                  <div>
                     <Image
                        src={saas}
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
                     <span className="mr-2 md:mr-6 lg:mr-10">04</span>ICE Based Solutions
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Leverage the power of Innovation, Collaboration, and Efficiency (ICE) with our tailored solutions. At Ziba Innovatives, we utilize cutting-edge methodologies to create seamless, integrated systems that address complex challenges. Our ICE-based approach ensures optimized performance, streamlined workflows, and sustainable growth for your business.
                  </p>

                  <div>
                     <Image
                        src={ice}
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
                     <span className="mr-2 md:mr-6 lg:mr-10">05</span>Technology Consulting
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Unlock your business’s full potential with expert technology consulting from Ziba Innovatives. We provide strategic guidance to help you navigate complex technological landscapes, streamline operations, and implement solutions that drive innovation. Whether it’s optimizing your IT infrastructure or adopting the latest advancements, we’re here to help you achieve your goals.
                  </p>

                  <div>
                     <Image
                        src={tech}
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
                     <span className="mr-2 md:mr-6 lg:mr-10">06</span>HR Management Software
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Simplify and streamline your workforce management with our innovative HR Management System. Designed to optimize recruitment, employee onboarding, payroll, performance tracking, and more, our solution empowers businesses to manage their teams efficiently. At Ziba Innovatives, we ensure your HR processes are seamless, scalable, and aligned with your organizational goals.
                  </p>

                  <div>
                     <Image
                        src={hr}
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
                     <span className="mr-2 md:mr-6 lg:mr-10">07</span>Sales Funnel Design for Software & Digital Products
                  </h3>
               </AccordionTrigger>
               <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
                  <p className="text-content">
                  Boost your conversions with expertly crafted sales funnels tailored to software and digital products. At Ziba Innovatives, we design data-driven funnels that guide your audience from awareness to purchase, ensuring a seamless customer journey. From lead generation to retention strategies, our solutions are designed to maximize engagement and drive revenue growth.
                  </p>

                  <div>
                     <Image
                        src={sales}
                        alt="codes"
                        className="py-6"
                     />
                  </div>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
      </div>
   );
};

export default Services;
