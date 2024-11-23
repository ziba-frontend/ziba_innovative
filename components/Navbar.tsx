"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <>
      <nav className=" px-4 border-t-[20px] border-main bg-border">
         <div className="container flex items-center justify-between h-[90px] mx-auto ">
         {/* Logo and Desktop Links */}
         <div className="flex items-center gap-8">
            <Link
               className="flex gap-1 items-center justify-center"
               href="/"
            >
               {/* <Image src={Logo} alt="Logo" /> */}
               <p className="font-bold italic">Ziba Innovatives</p>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-4">
               <Link href="/">Our Services</Link>
               <Link href="/portfolio">Portfolio</Link>
               <Link href="/company">Company</Link>
               <Link href="/contact">Support</Link>
            </div>
         </div>

         {/* Mobile Hamburger Menu */}
         <div className="md:hidden">
            <button
               className="text-gray-800 focus:outline-none"
               onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Mobile Dropdown Menu */}
         {isMenuOpen && (
            <div className="absolute top-[90px] left-0 w-full bg-border shadow-md md:hidden z-30">
               <div className="flex flex-col items-start gap-4 p-4">
                  <Link
                     href="/"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Our Services
                  </Link>
                  <Link
                     href="/portfolio"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Portfolio
                  </Link>
                  <Link
                     href="/company"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Company
                  </Link>
                  <Link
                     href="/contact"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     Support
                  </Link>
                  <Button className="bg-submain rounded-full w-full py-2 mt-4">
                     Explore our Solutions
                  </Button>
               </div>
            </div>
         )}

         {/* Call-to-Action Button */}
         <div className="hidden md:block">
            <Button className="bg-submain rounded-full p-4">
               Explore our Solutions
            </Button>
         </div>
         </div>
      </nav>
      </>
   );
};

export default Navbar;
