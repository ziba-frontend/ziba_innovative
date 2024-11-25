import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import React from "react";
import Projects from "@/components/home/Projects";
import Offers from "@/components/home/Offers";
import Team from "@/components/Team";

const Home = () => {
   return (
      <div>
         <Hero />
         <Services />
         <About />
         <Projects/>
         <Offers/>
         <Team/>
      </div>
   );
};

export default Home;
