"use client"

import Image from 'next/image'
import React from 'react'
import { Users, Star, Globe, Award, Zap, Mail, Linkedin } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: "Hilal Aziz",
      role: "CEO & Head of AI Research",
      image: "/images/hilal.jpeg",
      description: "Leading our AI research initiatives and developing cutting-edge algorithms that power our solutions.",
      expertise: ["Machine Learning", "Research & Development", "Algorithm Design"],
      linkedin: "#",
      email: "hilalaziz@unitzero.tech"
    },
    {
      name: "Shafique Ur Rehman",
      role: "CTO & Co-Founder",
      image: "/images/shafique.jpeg",
      description: "Visionary leader with 2 years in AI and business transformation. Passionate about making AI accessible to all businesses.",
      expertise: ["AI Strategy", "Business Development", "Team Leadership"],
      linkedin: "#",
      email: "shafique@unitzero.tech"
    },
    {
      name: "Zayan Ahmed",
      role: "COO & Lead Architect",
      image: "/images/zayan.jpeg",
      description: "Technical expert specializing in scalable AI solutions and enterprise architecture. Drives innovation in our core technology stack.",
      expertise: ["AI Architecture", "System Design", "Technical Leadership"],
      linkedin: "#",
      email: "zayan@unitzero.tech"
    },

  ]

  return (
    <div className="min-h-screen bg-omniv-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.03),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-8">
              <Users className="w-5 h-5 text-omniv-primary" />
              <span className="text-omniv-primary font-medium">Our Team</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-6">
              Meet the Team
            </h1>

            <p className="text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed mb-8">
              The brilliant minds behind UnitZero, united by a shared vision to democratize AI and transform businesses worldwide.
            </p>

            <div className="flex items-center justify-center gap-4 text-omniv-muted">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-omniv-primary" />
                <span>2 Years Experience</span>
              </div>
              <div className="w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-omniv-secondary" />
                <span>Global Impact</span>
              </div>
              <div className="w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-omniv-primary" />
                <span>Industry Leaders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv hover:border-omniv-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-omniv-primary/10"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-omniv-primary/5 to-omniv-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-omniv-primary/20 group-hover:border-omniv-primary/40 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-omniv-primary rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-omniv-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-omniv-secondary font-semibold mb-3">{member.role}</p>
                    <p className="text-omniv-muted leading-relaxed">{member.description}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-omniv-muted mb-3 uppercase tracking-wider">Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-omniv-muted/20 text-omniv-muted text-xs rounded-full border border-omniv group-hover:border-omniv-primary/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-omniv-muted/20 hover:bg-omniv-primary/20 rounded-full flex items-center justify-center text-omniv-muted hover:text-omniv-primary transition-all duration-300 border border-omniv hover:border-omniv-primary/30"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-omniv-muted/20 hover:bg-omniv-primary/20 rounded-full flex items-center justify-center text-omniv-muted hover:text-omniv-primary transition-all duration-300 border border-omniv hover:border-omniv-primary/30"
                      title="Send Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="text-omniv-primary">Culture</span>
            </h2>
            <p className="text-xl text-omniv-muted max-w-3xl mx-auto">
              We foster an environment of collaboration, innovation, and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-omniv-card/50 backdrop-blur-sm rounded-2xl border border-omniv">
              <div className="w-16 h-16 bg-omniv-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-omniv-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-omniv-muted">We believe the best solutions come from working together, sharing knowledge, and supporting each other.</p>
            </div>

            <div className="text-center p-8 bg-omniv-card/50 backdrop-blur-sm rounded-2xl border border-omniv">
              <div className="w-16 h-16 bg-omniv-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-omniv-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-omniv-muted">Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.</p>
            </div>

            <div className="text-center p-8 bg-omniv-card/50 backdrop-blur-sm rounded-2xl border border-omniv">
              <div className="w-16 h-16 bg-omniv-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-omniv-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-omniv-muted">We strive for excellence in everything we do, from code quality to customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-omniv-primary/20">
            <h3 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-xl text-omniv-muted mb-8">
              We&apos;re always looking for talented individuals who share our passion for AI and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-omniv-primary to-omniv-secondary hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25">
                <Mail className="w-5 h-5" />
                View Open Positions
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-omniv-muted/10 hover:bg-omniv-muted/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-omniv">
                <Users className="w-5 h-5" />
                Learn About Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team