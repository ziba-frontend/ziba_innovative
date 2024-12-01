import Image from "next/image";
import React from "react";
import AboutImg from "@/public/images/about.png";
import Ab1 from "@/public/svgs/ab1.svg";

const About = () => {
   return (
      <div className="container mx-auto flex flex-col gap-6 lg:flex-row md:gap-4 py-6 md:py-12 xl:py-20 relative mt-6 items-center">
         <Image
            src={Ab1}
            alt="about ziba"
            className="absolute top-2 right-2 w-10 sm:w-20"
         />
         <Image
            src={AboutImg}
            alt="about ziba"
             className="md:w-[400px] xl:w-[600px] "
         />
         <div className="flex items-center justify-center flex-col gap-4 ">
            <p className="uppercase text-center">about us</p>
            <h2 className="text-center">Why Choose Us?</h2>
            <p>
               We empower businesses to thrive in a digital-first world. As a
               leading SaaS company, we specialize in creating custom software
               and delivering robust, scalable cloud solutions tailored to meet
               the unique needs of our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mt-6 ">
               <div>
                  <h4 className="mb-6">195k+ Users</h4>
                  <small>
                     Join a growing community of innovators who trust our
                     platform to solve their toughest challenges and drive
                     success
                  </small>
               </div>
               <div>
                  <h4 className="mb-6">$400m+ Saved</h4>
                  <small>
                     Empowering businesses to streamline operations and cut
                     costs, delivering real, measurable impact across
                     industries.
                  </small>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
