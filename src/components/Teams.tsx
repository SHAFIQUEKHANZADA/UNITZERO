import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Teams() {
  const teamMembers = [
    {
      name: "Hilal Aziz",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Shafique Ur Rehman",
      role: "CTO & Co-Founder",
      image: "/images/shafique.jpeg",
    },
    {
      name: "Zayan Ahmed",
      role: "Front-end Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Thom Belly",
      role: "Front-end Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bonnie Green",
      role: "React Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Lana Byrd",
      role: "Marketing",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="bg-slate-900 text-white py-8  px-4 md:px-6 lg:px-8 h-full sm:h-screen">
      <div className="sm:w-[90%] mx-auto flex items-center justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">Our people make us great</h2>

            <div className="space-y-4 text-slate-300 text-xl leading-relaxed">
              <p>Here we focus on markets where technology, innovation, can unlock long-term value.</p>

              <p>
                You&apos;ll interact with talented professionals, will be challenged to solve difficult problems and think in
                new and creative ways.
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
              <div key={index} className="relative group">
                <div className="rounded-lg overflow-hidden bg-slate-800">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={300}
                    height={400}
                    className="w-[400px] sm:h-[350px] h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Overlay with name and role */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="font-semibold text-white text-sm md:text-base">{member.name}</h3>
                      <p className="text-slate-300 text-xs md:text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
