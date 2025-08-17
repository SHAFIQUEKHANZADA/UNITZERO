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
    <div className={`${lato.className} overflow-hidden min-h-screen flex lg:flex-row flex-col justify-center items-center gap-20 bg-omniv-dark text-white p-8 lg:p-16 xl:px-40`}>

      {/* Left Content */}
      <div className="space-y-8 flex-1" data-aos="fade-up">
        <div className="space-y-6">
          <p className="text-omniv-muted text-md">We&apos;re here to answer all your questions</p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Embrace the future of artificial intelligence!
          </h1>

          <p className="text-omniv-muted text-xl leading-relaxed">
            Artificial Intelligence refers to the development of computer systems that possess the ability to perform
            activities typically requiring human intelligence abilities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] flex items-center justify-center text-white hover:from-omniv-primary/90 hover:to-omniv-secondary/90 px-6 py-3 text-xl rounded-full transition-all duration-300">
              <span> Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              className="border-omniv text-white hover:bg-omniv-card hover:border-omniv-primary px-6 py-3 text-xl rounded-full bg-transparent transition-all duration-300 inline-flex items-center justify-center gap-3 border-2 border-omniv text-omniv-muted font-semibold hover:border-omniv-primary hover:text-omniv-primary hover:bg-omniv-card hover:shadow-lg hover:scale-105 transform hover:-translate-y-1"
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
              <h3 className="text-xl font-semibold mb-2 text-white">Envision The Extraordinary</h3>
              <p className="text-omniv-muted">
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
              <h3 className="text-xl font-semibold mb-2 text-white">Immersive Creative Process</h3>
              <p className="text-omniv-muted">
                Erase distractions, adjust dimensions and finesse every detail of your designs quickly all under one
                roof with full control.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Contact Form */}
      <Card className="bg-omniv-card/50 backdrop-blur-sm text-white border border-omniv flex flex-col justify-evenly flex-1 md:p-10"  data-aos="fade-left">
        <CardHeader>
          <CardTitle className="md:text-5xl text-lg font-medium text-white">Get in touch</CardTitle>
          <p className="text-omniv-muted md:text-xl">
            Just fill out the form and our global experts will be in touch right away with package and price solution
            to help you!
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="sr-only text-white">Your Name</Label>
              <Input id="name" placeholder="Your Name" className="bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted md:h-14 h-12 placeholder:text-lg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only text-white">Email Address</Label>
              <Input id="email" type="email" placeholder="Email Address" className="bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted md:h-14 h-12 placeholder:text-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="sr-only text-white">Company Name</Label>
              <Input id="company" placeholder="Company Name" className="bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted md:h-14 h-12 placeholder:text-lg" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="sr-only text-white">Phone Number</Label>
              <Input id="phone" placeholder="Phone Number" className="bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted md:h-14 h-12 placeholder:text-lg" />
            </div>
          </div>

          <div className="space-y-2 w-full">
            <Label htmlFor="service" className="sr-only text-xl text-white">AI Integration solutions</Label>
            <Select defaultValue="chatbots">
              <SelectTrigger className="w-full bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted md:h-14 py-7 placeholder:text-lg">
                <SelectValue placeholder="AI Integration solutions" />
              </SelectTrigger>
              <SelectContent className="text-xl bg-omniv-card border-omniv-border">
                <SelectItem className="p-2 text-xl text-white hover:bg-omniv-card" value="chatbots">AI Chatbots</SelectItem>
                <SelectItem className="p-2 text-xl text-white hover:bg-omniv-card" value="automation">Process Automation</SelectItem>
                <SelectItem className="p-2 text-xl text-white hover:bg-omniv-card" value="analytics">Predictive Analytics</SelectItem>
                <SelectItem className="p-2 text-xl text-white hover:bg-omniv-card" value="vision">Computer Vision</SelectItem>
                <SelectItem className="p-2 text-xl text-white hover:bg-omniv-card" value="nlp">Natural Language Processing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="sr-only text-white">Business Information</Label>
            <Textarea
              id="message"
              placeholder="Kindly provide enough information about your business..."
              className="bg-omniv-input border-omniv-border text-white placeholder:text-omniv-muted min-h-[150px] resize-none placeholder:text-lg"
            />
          </div>

          <button className="w-fit flex items-center bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] hover:from-omniv-primary/90 hover:to-omniv-secondary/90 text-xl text-white px-5 py-3 rounded-4xl transition-all duration-300 hover:scale-105">
            <span>Submit Request</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </CardContent>
      </Card>

    </div>
  )
}
