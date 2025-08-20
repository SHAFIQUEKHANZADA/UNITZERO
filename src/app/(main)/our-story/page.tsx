"use client"

import React from 'react'
import { Target, Heart, Shield, Zap, Star, Users, Globe, Award } from 'lucide-react'

const Story = () => {
  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Every decision we make serves our customers. Your success is our priority."
    },
    {
      icon: Heart,
      title: "Human-Centric",
      description: "We believe technology should enhance human potential, not replace it."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honesty, reliability, and clear communication."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously pushing boundaries to deliver cutting-edge AI solutions."
    }
  ]

  return (
    <div className="min-h-screen bg-omniv-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.03),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-6 sm:mb-8">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 text-omniv-primary" />
              <span className="text-sm sm:text-base text-omniv-primary font-medium">Our Story</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-4 sm:mb-6">
              The UnitZero Story
            </h1>
            
            <p className="text-lg sm:text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              From a simple principle to a global mission: transforming businesses through accessible AI technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-omniv-muted text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-omniv-primary" />
                <span>Customer-First</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-omniv-secondary" />
                <span>Global Mission</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-omniv-primary" />
                <span>Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="relative z-10 container mx-auto px-4 sm:pt-20 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Our <span className="text-omniv-primary">Mission</span>
                </h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-omniv-secondary mb-3 sm:mb-4">The Story of UnitZero</h3>
                <p className="text-base sm:text-lg leading-relaxed text-omniv-muted mb-4 sm:mb-6">
                  UnitZero was founded on a simple principle: <span className="font-semibold text-white">our customers come first.</span> We
                  launched this company with a mission to unlock the potential of businesses through Artificial Intelligence.
                  From day one, we set out to unify cutting‑edge technology with a human‑centric approach, ensuring that every
                  decision we make serves the people who trust us.
                </p>

                <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">The Meaning of UnitZero</h4>
                <p className="text-base sm:text-lg leading-relaxed text-omniv-muted">
                  Our name reflects our philosophy. <span className="font-semibold text-omniv-primary">Unit</span> represents unity and discipline—like a
                  tightly knit military unit, we move in sync and support each other. <span className="font-semibold text-omniv-secondary">Zero</span> symbolizes a
                  starting point. Even if a client begins with no systems or is just starting out, we are ready to guide them
                  from zero to success. Together, <span className="font-semibold text-omniv-primary">Unit</span> and <span className="font-semibold text-omniv-secondary">Zero</span> embody our commitment to bring people and
                  technology together and to build businesses from scratch.
                </p>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative bg-gradient-to-br from-omniv-primary/20 to-omniv-secondary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-omniv-primary/30">
                <div className="bg-omniv-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-omniv-primary/20 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <Target className="w-8 sm:w-10 h-8 sm:h-10 text-omniv-primary" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Customer-Centric Approach</h4>
                  <p className="text-sm sm:text-base text-omniv-muted leading-relaxed">
                    Every solution we build, every decision we make, and every innovation we pursue is driven by one simple question: 
                    &ldquo;How does this help our customers succeed?&rdquo;
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-omniv-secondary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-omniv-primary/30 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-omniv-primary">Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-omniv-muted max-w-3xl mx-auto px-4">
              The principles that guide every decision, every interaction, and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-6 sm:p-8 bg-omniv-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-omniv hover:border-omniv-primary/30 transition-all duration-500 hover:scale-105"
              >
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-omniv-primary/20 to-omniv-secondary/20 rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 sm:w-8 h-7 sm:h-8 text-omniv-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-omniv-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Commitment */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Vision */}
            <div className="bg-gradient-to-br from-omniv-primary/10 to-omniv-secondary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-omniv-primary/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Vision</h2>
              <p className="text-base sm:text-lg leading-relaxed text-omniv-muted mb-4 sm:mb-6">
                We see a future where Artificial Intelligence is not the privilege of a few but a practical tool for all. Our
                goal is to make AI simple and accessible to every business—from early‑stage startups to global enterprises.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-omniv-muted">
                By demystifying AI and focusing on real‑world applications that save time, reduce costs, and open new
                opportunities, we aim to bridge the gap and make AI inclusive for everyone.
              </p>
            </div>

            {/* Commitment */}
            <div className="bg-gradient-to-br from-omniv-secondary/10 to-omniv-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-omniv-secondary/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Commitment</h2>
              <p className="text-base sm:text-lg leading-relaxed text-omniv-muted mb-4 sm:mb-6">
                Respect, transparency, and dedication form the foundation of every relationship we build. We don&apos;t just
                deliver technology—we deliver trust and reliability.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-omniv-muted">
                Your success is our priority, and your growth is our mission. We&apos;re committed to being your trusted partner
                on the journey to AI transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="text-omniv-primary">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-omniv-muted max-w-3xl mx-auto px-4">
              Key milestones that shaped UnitZero into the company it is today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-omniv-primary via-omniv-secondary to-omniv-primary transform -translate-x-1/2"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8 sm:space-y-16">
              {[
                {
                  year: "2020",
                  title: "Foundation",
                  description: "UnitZero was founded with a vision to democratize AI technology for businesses of all sizes."
                },
                {
                  year: "2021",
                  title: "First Success",
                  description: "Successfully delivered our first AI solution, proving the concept of accessible enterprise AI."
                },
                {
                  year: "2022",
                  title: "Growth & Expansion",
                  description: "Expanded our team and services, serving clients across multiple industries."
                },
                {
                  year: "2023",
                  title: "Innovation Leader",
                  description: "Recognized as a leader in accessible AI solutions with proven track record."
                },
                {
                  year: "2024",
                  title: "Global Mission",
                  description: "Continuing to expand our reach and help more businesses transform with AI."
                }
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Mobile Layout - Single column */}
                  <div className="md:hidden">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-omniv-primary rounded-full border-2 border-omniv-dark mr-4"></div>
                      <div className="text-xl font-bold text-omniv-primary">{milestone.year}</div>
                    </div>
                    <div className="ml-8 bg-omniv-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-omniv hover:border-omniv-primary/30 transition-all duration-300">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{milestone.title}</h3>
                      <p className="text-sm sm:text-base text-omniv-muted">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating sides */}
                  <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-6 h-6 bg-omniv-primary rounded-full border-4 border-omniv-dark absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-omniv-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-omniv hover:border-omniv-primary/30 transition-all duration-300">
                        <div className="text-xl sm:text-2xl font-bold text-omniv-primary mb-2">{milestone.year}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{milestone.title}</h3>
                        <p className="text-sm sm:text-base text-omniv-muted">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-omniv-primary/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Be Part of Our Story?</h3>
            <p className="text-lg sm:text-xl text-omniv-muted mb-6 sm:mb-8 px-4">
              Let&apos;s write the next chapter together as we transform your business with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-omniv-primary to-omniv-secondary hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25 text-sm sm:text-base">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5" />
                Start Your Journey
              </button>
              <button className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-omniv-muted/10 hover:bg-omniv-muted/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-omniv text-sm sm:text-base">
                <Users className="w-4 sm:w-5 h-4 sm:h-5" />
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story