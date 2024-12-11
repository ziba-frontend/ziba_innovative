import React from "react";
import Logo from "@/public/svgs/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import circle from "@/public/svgs/circle.svg";
import circle2 from "@/public/svgs/circle2.svg";

const Footer = () => {
   const Links = [
      {
         title: "Menu",
         links: [
            { name: "Home", link: "/" },
            { name: "Our Solutions", link: "/" },
            { name: "Portfolio", link: "/portfolio" },
            { name: "Company", link: "/company" },
            { name: "Support", link: "/support" },
         ],
      },
      {
         title: "Support",
         links: [
            { name: "FAQ", link: "/" },
            { name: "Privacy Policy", link: "/" },
            { name: "Terms of Service", link: "/" },
         ],
      },
      {
         title: "Social Media",
         links: [
            { name: "LinkedIn", link: "/" },
            { name: "Twitter", link: "/" },
            { name: "Instagram", link: "/" },
            { name: "Dribbble", link: "/" },
            { name: "Behance", link: "/" },
         ],
      },
   ];

   return (
      <>
         <div className="container p-6 flex flex-col items-center text-center justify-center md:justify-between bg-main text-white relative rounded-t-[40px] z-10  w-[90%] sm:w-[95%] ">
            <div className="p-6 flex flex-col items-center text-center justify-center md:justify-between md:flex-row w-full xl:w-[94%] border-b border-input">
               <h2 className="w-full md:w-[50%] mb-4 md:mb-0 text-center md:text-left">
                  Let’s discuss and bring your vision to life.
               </h2>
               <Link href="/contact">
                  <Button className="bg-submain p-6 rounded-full flex items-center justify-center text-white">
                     Let’s Talk <ArrowRight />
                  </Button>
               </Link>
            </div>
         </div>

         <div className="bg-main p-6 text-white relative min-h-[70vh] flex flex-col items-center z-[5] ">
            <div className="bg-white xl:p-6 w-3 sm:w-6 2xl:w-[89px] h-8 rounded-br-[40px] absolute top-0 left-0 z-10"></div>
            <div className="bg-white xl:p-6 w-3 sm:w-6 2xl:w-[88px] h-8 rounded-bl-[40px] absolute top-0 right-0 z-10"></div>

            <div className="container mx-auto px-4 border-b border-input py-6 flex flex-col items-center sm:flex-row sm:justify-between sm:items-start text-center sm:text-left  lg:py-20 ">
               <div className="flex flex-col items-center sm:items-start justify-center w-full lg:w-[40%] xl:w-[55%] 2xl:w-[60%] z-10 ">
                  <div className="flex flex-col items-center sm:items-start gap-3">
                     <Link
                        href="/"
                        className="flex items-center gap-2"
                     >
                        <Image
                           src={Logo}
                           alt="ZibaInnovative"
                        />
                        <h4 className="italic bold">Ziba Innovatives</h4>
                     </Link>
                     <p className="text-input">
                        Empowering Growth Through Innovation
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-6 mt-6 sm:mt-0 md:grid-cols-2 xl:grid-cols-3 w-full z-10 ">
                  {Links.map((link, index) => (
                     <div key={index}>
                        <h3 className="font-medium mb-4">{link.title}</h3>
                        <ul className="space-y-3">
                           {link.links.map((text, subIndex) => (
                              <li key={subIndex}>
                                 <Link
                                    href={text.link}
                                    className="hover:underline text-input"
                                 >
                                    {text.name}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
            <p className="text-center my-3 mt-6 z-10">
               &copy;<span className="mx-2">Copyright 2024</span> by Ziba
               Innovatives. All rights reserved
            </p>
            <Image
               src={circle2}
               alt="circle"
               className="absolute top-1/2 left-0 -translate-y-1/2 z-0"
            />
            <Image
               src={circle}
               alt="circle"
               className="absolute bottom-0 right-0 z-0"
            />
         </div>
      </>
   );
};

export default Footer;
