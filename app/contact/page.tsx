"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { LocateIcon, Mail, Phone } from "lucide-react";

const formSchema = z.object({
   name: z.string().min(1, { message: "name is required." }),
   email: z.string().email({ message: "Invalid email address." }),
   Message: z.string().min(1, { message: "Message is required." }),
});

const Contact = () => {
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         email: "",
         message: "",
      },
   });

   function onSubmit(data: z.infer<typeof formSchema>) {
      console.log(data);
   }
   return (
      <div className="container py-6 md:py-10 flex items-center justify-center mx-auto flex-col gap-4">
         <h2 className="text-center">Contact Us</h2>
         <p className="text-center">Have a Question? Reach Out to Us!</p>
         <div className="flex flex-col gap-6 md:justify-between items-center md:items-start mt-4 w-full md:flex-row">
            <div className="flex flex-col gap-4 w-full md:w-1/2 ">
               <p>Contact Form</p>
               <h3>Send Us A Message</h3>
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="space-y-8 w-full "
                  >
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Your name</FormLabel>
                              <FormControl>
                                 <Input
                                    className="bg-white p-6 outline-none border"
                                    placeholder="Your Name"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Your email</FormLabel>
                              <FormControl>
                                 <Input
                                    className="bg-white p-6 outline-none border"
                                    placeholder="Your Email"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                 <Textarea
                                    className="bg-white p-6 border"
                                    placeholder="Your Message"
                                    {...field}
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     <Button className="w-full bg-submain rounded-full p-6">
                        Submit
                     </Button>
                  </form>
               </Form>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-[30%] ">
               <p>Contact Info</p>
               <h3>Our Contacts</h3>
               <div className="flex gap-4 items-center justify-start">
                  <div className="p-2 bg-input flex items-center justify-center text-submain rounded-full">
                     <Phone />
                  </div>
                  <p>+234912345678, +234812345678</p>
               </div>
               <div className="flex gap-4 items-center justify-start">
                  <div className="p-2 bg-input flex items-center justify-center text-submain rounded-full">
                     <Mail />
                  </div>
                  <p>Zibainnovatives@info.ng</p>
               </div>
               <div className="flex gap-4 items-center justify-start">
                  <div className="p-2 bg-input flex items-center justify-center text-submain rounded-full">
                     <LocateIcon/>
                  </div>
                  <p>Nigeria</p>
               </div>
             
            </div>
         </div>
      </div>
   );
};

export default Contact;
