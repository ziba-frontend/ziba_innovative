import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Zibaweb from "@/public/images/zibaweb.png";
import Delex from "@/public/images/delex.png";
import Cook from "@/public/images/cook.png"
import Adox from "@/public/images/adox.png"

const Portfolio = () => {
   return (
      <div className="py-6 md:py-8">
         <div className="flex flex-col gap-6 items-center justify-center container">
            <h2 className="text-center">Our Work Speaks for Itself</h2>
            <p className="text-center">
               We have helped numerous businesses, from ambitious startups to
               established enterprises, transform their ideas into innovative,
               impactful solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-[90%] md:w-1/2">
               <div className="flex flex-col gap-3">
                  <h4>195k+ Users</h4>
                  <small>
                     Join a growing community of innovators who trust our
                     platform to solve their toughest challenges and drive
                     success
                  </small>
               </div>
               <div className="flex flex-col gap-3">
                  <h4>1000+ Projects Done</h4>
                  <small>
                     From custom solutions to innovative SaaS products, we’ve
                     successfully completed over 1,000 projects.
                  </small>
               </div>
            </div>
         </div>
         <div className="container flex flex-col-reverse gap-6 lg:gap-8 mx-auto md:flex-row items-center justify-center pt-6 ">
            <Image
               src={Zibaweb}
               alt="ziba"
                className="md:w-[400px] xl:w-1/2"
            />
            <div className="flex flex-col gap-4">
               <p>Website Design</p>
               <h3>Ziba pay Website</h3>
               <p className="">
                  Ziba pay simplifies payment for businesses in africa. it
                  offers businesses a streamlined and effective online payment
                  collection solution
               </p>
               <Button className="bg-submain rounded-full p-4 w-fit">
                  Explore our Solutions
               </Button>
            </div>
         </div>
         <div className="container flex flex-col gap-6 lg:gap-8 mx-auto md:flex-row items-center justify-center pt-6">
            <div className="flex flex-col gap-4">
               <p>Website Development</p>
               <h3>Delex Relay , a delivery platform</h3>
               <p className="">
                  Delex is a Delivery Platform for business owner And individual
                  who want to send packages from a point to an other ,Delex
                  offer a tracking system tool.
               </p>
               <Button className="bg-submain rounded-full p-4 w-fit">
                  Explore our Solutions
               </Button>
            </div>
            <Image
               src={Delex}
               alt="ziba"
                className="md:w-[400px] xl:w-1/2"
            />
         </div>
         <div className="container flex flex-col-reverse gap-6 lg:gap-8 mx-auto md:flex-row items-center justify-center pt-6">
            <Image
               src={Cook}
               alt="ziba"
                className="md:w-[400px] xl:w-1/2"
            />
            <div className="flex flex-col gap-4">
               <p>Mobile app Development</p>
               <h3>Cook for Me, a food deivery app</h3>
               <p className="">
                  Cook for me is an platform that offer fresh meal with a cheap
                  price and allow indivudial to sell their meals
               </p>
               <Button className="bg-submain rounded-full p-4 w-fit">
                  Explore our Solutions
               </Button>
            </div>
         </div>
         <div className="container flex flex-col gap-6 lg:gap-8 mx-auto md:flex-row items-center justify-center pt-6">
            <div className="flex flex-col gap-4">
               <p>Custom Software Development</p>
               <h3>ADOC,Your Online Medical Appoinments</h3>
               <p className="">
               ADOC Is an online Medical appoinment 
               That allow user To take an appoinment with a doctor , it alos work as a medical files Holder
               </p>
               <Button className="bg-submain rounded-full p-4 w-fit">
                  Explore our Solutions
               </Button>
            </div>
            <Image
               src={Adox}
               alt="ziba"
                className="md:w-[400px] xl:w-1/2 "
            />
         </div>
         <div className="py-8 flex items-center justify-center container mt-6">
         <Button className="bg-submain rounded-full p-4 w-fit">
                  Explore More
               </Button>
         </div>
         {/* faqs */}
         
      </div>
   );
};

export default Portfolio;
