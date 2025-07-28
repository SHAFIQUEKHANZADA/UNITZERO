"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Twitter, Github, Linkedin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Teams() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const teamMembers = [
    {
      name: "Hilal Aziz",
      role: "CEO & Founder",
      image: "/images/hilal.jpeg",
      linkedin: "https://www.linkedin.com/in/hilalaziz/",
      twitter: "https://twitter.com/hilalaziz",
      github: "https://github.com/hilalaziz",
    },
    {
      name: "Shafique Ur Rehman",
      role: "CTO & Co-Founder",
      image: "/images/shafique.jpeg",
      linkedin: "https://www.linkedin.com/in/shafiqueurrehman/",
      twitter: "https://twitter.com/shafique",
      github: "https://github.com/shafique",
    },
    {
      name: "Zayan Ahmed",
      role: "Managing Director & Co-Founder",
      image: "/images/zayan.jpeg",
      linkedin: "https://www.linkedin.com/in/zayanahmed/",
      twitter: "https://twitter.com/zayanahmed",
      github: "https://github.com/zayanahmed",
    },
  ]

  return (
    <section className="bg-slate-900 text-white py-8 px-4 md:px-6 lg:px-8 h-full sm:h-screen">
      <div className="sm:w-[90%] mx-auto flex items-center justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Our people make us great</h2>
            <div className="space-y-4 text-slate-300 text-xl leading-relaxed">
              <p>Here we focus on markets where technology, innovation, can unlock long-term value.</p>
              <p>
                You&apos;ll interact with talented professionals, will be challenged to solve difficult problems and
                think in new and creative ways.
              </p>
            </div>
            <Button className="items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-medium rounded-full hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:shadow-lg mt-8">
              View more
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-lg overflow-hidden bg-slate-800 relative">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={300}
                    height={400}
                    className="w-[400px] sm:h-[350px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Social Media Icons */}
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <motion.a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/70 backdrop-blur-sm p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-5 h-5 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                        <motion.a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/70 backdrop-blur-sm p-3 rounded-full hover:bg-blue-500 transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="w-5 h-5 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>

                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/70 backdrop-blur-sm p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Overlay with name and role */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="font-semibold text-white text-sm md:text-base">{member.name}</h3>
                      <p className="text-slate-300 text-xs md:text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
