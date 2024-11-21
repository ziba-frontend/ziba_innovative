import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
   return (
      <div className="container flex items-center justify-between h-[90px] mx-auto">
         <div className="flex gap-6">
            <Link
               className="flex gap-1 items-center justify-center"
               href="/"
            >
               {/* <Image src={Logo}/> */}
               <p className="font-bold italic">Ziba Innovatives</p>
            </Link>

            <Link href="/">Our Services</Link>
            <Link href="/">Success Stories</Link>
            <Link href="/">Company</Link>
            <Link href="/">Support</Link>
         </div>
         <Button className="bg-main rounded-full p-6">
            Explore our Solutions
         </Button>
      </div>
   );
};

export default Navbar;
