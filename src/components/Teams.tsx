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
      linkedin: "https://www.linkedin.com/in/hilal-aziz-32119324a/",
      twitter: "https://twitter.com/hilalaziz",
      github: "https://github.com/hilalaziz32",
    },
    {
      name: "Shafique Ur Rehman",
      role: "CTO & Co-Founder",
      image: "/images/shafique.jpeg",
      linkedin: "https://www.linkedin.com/in/shafique-ur-rehman-b7b859299/",
      twitter: "https://twitter.com/shafique",
      github: "https://github.com/SHAFIQUEKHANZADA",
    },
    {
      name: "Zayan Ahmed",
      role: "Managing Director & Co-Founder",
      image: "/images/zayan.jpeg",
      linkedin: "https://www.linkedin.com/in/zayan-ahmed-1901892ba/",
      twitter: "https://twitter.com/zayanahmed",
      github: "https://github.com/Zayanahmed79",
    },
  ]

  return (
    <section className="bg-omniv-dark text-white px-4 md:px-6 lg:px-8 h-full sm:h-screen flex items-center justify-center">
      <div className="sm:w-[95%] mx-auto flex items-center justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Our people make us great</h2>
            <div className="space-y-4 text-omniv-muted text-lg leading-relaxed">
              <p>Here we focus on markets where technology, innovation, can unlock long-term value.</p>
              <p>
                You&apos;ll interact with talented professionals, will be challenged to solve difficult problems and
                think in new and creative ways.
              </p>
            </div>
            <Button className="items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white font-medium rounded-full hover:from-omniv-primary/90 hover:to-omniv-secondary/90 transition-all duration-300 hover:shadow-lg mt-8">
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
                <div className="rounded-lg overflow-hidden bg-omniv-card relative aspect-[4/5]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Social Media Icons */}
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute left-4 top-4 flex flex-col gap-3 z-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] backdrop-blur-sm p-2 rounded-full hover:bg-omniv-primary transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-4 h-4 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                        <motion.a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] backdrop-blur-sm p-2 rounded-full hover:bg-omniv-primary transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="w-4 h-4 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] backdrop-blur-sm p-2 rounded-full hover:bg-omniv-primary transition-colors duration-300 group/icon"
                          initial={{ opacity: 0, scale: 0.8, x: -10 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 text-white group-hover/icon:text-white transition-colors duration-300" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Member Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-omniv-dark/90 via-omniv-dark/50 to-transparent sm:p-4 p-2">
                    <h3 className="text-sm font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-omniv-muted text-xs">{member.role}</p>
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
