"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { Lato } from 'next/font/google'
import Image from "next/image"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400']
})


export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,    
    });
  }, []);

  return (
    <div className={`${lato.className} overflow-hidden min-h-screen flex lg:flex-row flex-col justify-center items-center gap-20 bg-[#1B1B1B] text-white p-8 lg:p-16 xl:px-40`}>

      {/* Left Content */}
      <div className="space-y-8 flex-1" data-aos="fade-up">
        <div className="space-y-6">
          <p className="text-gray-300 text-md">We&apos;re here to answer all your questions</p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Embrace the future of artificial intelligence!
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed">
            Artificial Intelligence refers to the development of computer systems that possess the ability to perform
            activities typically requiring human intelligence abilities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white flex items-center justify-center text-black hover:bg-gray-100 px-6 py-3 text-xl rounded-full">
              <span> Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="border-gray-200 border text-white hover:bg-gray-800 px-6 py-3 text-xl rounded-full bg-transparent"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-8 pt-8">
          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12  ">
                <Image src={"/icons/i1.png"} alt="ICON" width={100} height={100} className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Envision The Extraordinary</h3>
              <p className="text-gray-300">
                Design beautiful artwork, digital sketches, or illustrations that match your style while boosting
                creativity.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 ">
                <Image src={"/icons/i2.png"} alt="ICON" width={100} height={100} className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Immersive Creative Process</h3>
              <p className="text-gray-300">
                Erase distractions, adjust dimensions and finesse every detail of your designs quickly all under one
                roof with full control.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Contact Form */}
      <Card className="bg-white text-black flex flex-col justify-evenly flex-1 md:p-10"  data-aos="fade-left">
        <CardHeader>
          <CardTitle className="md:text-5xl text-lg font-medium">Get in touch</CardTitle>
          <p className="text-gray-600 md:text-xl">
            Just fill out the form and our global experts will be in touch right away with package and price solution
            to help you!
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="sr-only">Your Name</Label>
              <Input id="name" placeholder="Your Name" className="bg-gray-50 border-gray-200 md:h-14 h-12 placeholder:text-lg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">Email Address</Label>
              <Input id="email" type="email" placeholder="Email Address" className="bg-gray-50 border-gray-200 md:h-14 h-12 placeholder:text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="sr-only">Company Name</Label>
              <Input id="company" placeholder="Company Name" className="bg-gray-50 border-gray-200 md:h-14 h-12 placeholder:text-lg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="sr-only">Phone Number</Label>
              <Input id="phone" placeholder="Phone Number" className="bg-gray-50 border-gray-200 md:h-14 h-12 placeholder:text-lg" />
            </div>
          </div>

          <div className="space-y-2 w-full">
            <Label htmlFor="service" className="sr-only text-xl">AI Integration solutions</Label>
            <Select defaultValue="chatbots">
              <SelectTrigger className="w-full bg-gray-50 border-gray-200 md:h-14 py-7 placeholder:text-lg">
                <SelectValue placeholder="AI Integration solutions" />
              </SelectTrigger>
              <SelectContent className="text-xl">
                <SelectItem className="p-2 text-xl" value="chatbots">AI Chatbots</SelectItem>
                <SelectItem className="p-2 text-xl" value="automation">Process Automation</SelectItem>
                <SelectItem className="p-2 text-xl" value="analytics">Predictive Analytics</SelectItem>
                <SelectItem className="p-2 text-xl" value="vision">Computer Vision</SelectItem>
                <SelectItem className="p-2 text-xl" value="nlp">Natural Language Processing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="sr-only">Business Information</Label>
            <Textarea
              id="message"
              placeholder="Kindly provide enough information about your business..."
              className="bg-gray-50 border-gray-200 min-h-[150px] resize-none  placeholder:text-lg"
            />
          </div>

          <button className="w-fit flex items-center bg-gray-900 text-xl hover:bg-gray-800 text-white px-5 py-3 rounded-4xl">
            <span>Submit Request</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </CardContent>
      </Card>

    </div>
  )
}
