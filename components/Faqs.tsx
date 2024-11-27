"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Faqs = () => {
  return (
    <div className="bg-input py-8 md:py-12">
      <Accordion type="single" collapsible className="w-full container">
        <AccordionItem
          value="item-1"
          className="bg-white p-6 border-b-2 border-input"
        >
          <AccordionTrigger
            customIcon={(isOpen) => (
              <div
                className={cn(
                  "ml-auto rounded-full p-1 w-8 h-8 flex items-center justify-center transition-all",
                  isOpen ? "bg-black text-white" : "bg-gray-300 text-black"
                )}
              >
                {isOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Plus className="w-5 h-5" aria-hidden="true" />
                )}
                
              </div>
            )}
          >
            <h3 className="flex items-center gap-2 text-black">
              <span className="mr-2 md:mr-6">01</span>
              Custom Software Development
            </h3>
          </AccordionTrigger>
          <AccordionContent className="flex items-center justify-center flex-col gap-4 w-[90%] mx-auto md:items-start">
            <p>
              We craft software solutions uniquely suited to your business. From
              concept to launch, we develop tools that align perfectly with your
              specific needs and drive your goals forward.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
