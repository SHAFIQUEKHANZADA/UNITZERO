"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Briefcase,
  Users,
  Zap,
  Target,
  Heart,
  Shield,
  Star,
  Award,
  ArrowRight,
  CheckCircle,
  Building2,
  Clock,
  MapPin,
  ExternalLink,
  Search,
} from "lucide-react"

export type Role = {
  id: string
  title: string
  type: string
  location: string
  category: "engineering" | "business" | "consulting" | "operations"
  experience: string
  salary: string
  blurb: string
  bullets: string[]
  requirements: string[]
  benefits: string[]
  applyHref: string
}

export default function CareersClient({ roles }: { roles: Role[] }) {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedRole, setExpandedRole] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Roles", icon: Briefcase, count: roles.length },
    { id: "engineering", label: "Engineering", icon: Zap, count: roles.filter(r => r.category === "engineering").length },
    { id: "business", label: "Business", icon: Target, count: roles.filter(r => r.category === "business").length },
    { id: "consulting", label: "Consulting", icon: Users, count: roles.filter(r => r.category === "consulting").length },
    { id: "operations", label: "Operations", icon: Building2, count: roles.filter(r => r.category === "operations").length },
  ]

  const filteredRoles = roles.filter(role => {
    const matchesCategory = selectedCategory === "all" || role.category === selectedCategory
    const q = searchTerm.toLowerCase()
    const matchesSearch = role.title.toLowerCase().includes(q) ||
                          role.location.toLowerCase().includes(q) ||
                          role.blurb.toLowerCase().includes(q)
    return matchesCategory && matchesSearch
  })

  const toggleRoleExpansion = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId)
  }

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

        <div className="relative z-10 container mx-auto sm:px-6 px-2">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-8">
              <Briefcase className="w-5 h-5 text-omniv-primary" />
              <span className="text-omniv-primary font-medium">Join Our Team</span>
            </div>
            
            <h1 className="sm:text-5xl lg:text-6xl text-4xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-6">
              Careers at UNITZERO
            </h1>
            
            <p className="text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed mb-8">
              We build AI super‑assistants that eliminate busywork and unlock growth. If you love turning complex,
              messy workflows into simple, reliable automations, you&apos;ll feel right at home here.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#open-roles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#how-we-hire"
                className="inline-flex items-center gap-2 px-6 py-3 bg-omniv-muted/10 hover:bg-omniv-muted/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-omniv"
              >
                How We Hire
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="sm:text-4xl text-3xl font-bold text-white mb-6">
              What We <span className="text-omniv-primary">Build</span>
            </h2>
            <p className="text-xl text-omniv-muted max-w-3xl mx-auto">
              We specialize in AI solutions across three key industries, helping businesses automate complex workflows and unlock new efficiencies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv hover:border-omniv-primary/30 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-omniv-primary/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-omniv-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Legal</h3>
              <p className="text-omniv-muted leading-relaxed mb-6">
                Contract review assistants, eDiscovery triage, and 24/7 client intake chat.
                Help lawyers reclaim billable hours and reduce risk with AI that actually learns the playbook.
              </p>
              <ul className="space-y-2 text-omniv-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  Clause extraction & review workflows
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  Document chat over briefs & contracts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  Website/phone intake bots
                </li>
              </ul>
            </div>

            <div className="group bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv hover:border-omniv-primary/30 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-omniv-secondary/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-omniv-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Finance</h3>
              <p className="text-omniv-muted leading-relaxed mb-6">
                Instant reports, anomaly detection, and smarter credit decisions. Build watchdogs that run 24/7
                and dashboards leaders trust.
              </p>
              <ul className="space-y-2 text-omniv-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary" />
                  P&L and close automation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary" />
                  Real‑time fraud alerts & scoring
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary" />
                  Invoice/receipt extraction bots
                </li>
              </ul>
            </div>

            <div className="group bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv hover:border-omniv-primary/30 transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-omniv-primary/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-omniv-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Healthcare</h3>
              <p className="text-omniv-muted leading-relaxed mb-6">
                Virtual assistants, coding support, and no‑show prediction to keep schedules full and revenue healthy.
              </p>
              <ul className="space-y-2 text-omniv-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  Patient Q&A and scheduling bots
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  ICD‑10/CPT coding suggestions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-secondary" />
                  No‑show risk scoring & outreach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="sm:text-4xl text-3xl font-bold text-white mb-6">
              Why Join <span className="text-omniv-primary">UNITZERO</span>
            </h2>
            <p className="text-xl text-omniv-muted max-w-3xl mx-auto">
              We&apos;re building more than just a company—we&apos;re building a movement to democratize AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-omniv-primary" />
                What We Value
              </h3>
              <ul className="space-y-4 text-omniv-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Customer‑first.</span> We obsess over measurable outcomes for clients, not vanity demos.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Operational excellence.</span> Clear pilots, SLAs, and monitoring—not just code.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Security & privacy.</span> We build with confidentiality and compliance in mind.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Learning culture.</span> Ship, iterate, document, and share.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-omniv-secondary" />
                Perks & Benefits
              </h3>
              <ul className="space-y-4 text-omniv-muted">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Remote‑friendly, flexible hours</span> (client overlap when needed)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Learning stipend & conference budget</span> for continuous growth
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Modern stack</span> (Next.js, Python, LangGraph, RAG, voice/telephony)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-omniv-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Meaningful ownership</span> of products and pilots
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="relative z-10 container mx-auto px-6 pb-20">
        <div className="sm:max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="sm:text-4xl text-3xl font-bold text-white mb-6">
              Open <span className="text-omniv-primary">Roles</span>
            </h2>
            <p className="sm:text-xl text-lg text-omniv-muted max-w-3xl mx-auto">
              Find your perfect role and join us in transforming businesses with AI technology.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 sm:px-4 px-2 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-omniv-primary text-white border-omniv-primary"
                      : "bg-omniv-card/50 text-omniv-muted border-omniv hover:border-omniv-primary/30"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.label}
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-omniv-muted" />
                <input
                  type="text"
                  placeholder="Search roles, locations, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-omniv-card/50 border border-omniv rounded-xl text-white placeholder-omniv-muted focus:outline-none focus:border-omniv-primary/50 transition-colors duration-300"
                />
              </div>
            </div>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="group bg-omniv-card/50 backdrop-blur-sm rounded-2xl border border-omniv hover:border-omniv-primary/30 transition-all duration-500 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-omniv-primary transition-colors duration-300">
                        {role.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-omniv-muted mb-3">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {role.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="bg-omniv-primary/20 text-omniv-primary px-3 py-1 rounded-full">
                          {role.experience}
                        </span>
                        <span className="bg-omniv-secondary/20 text-omniv-secondary px-3 py-1 rounded-full">
                          {role.salary}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleRoleExpansion(role.id)}
                      className="px-4 py-2 text-sm bg-omniv-primary hover:bg-omniv-primary/90 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      {expandedRole === role.id ? "Less" : "More"}
                    </button>
                  </div>

                  <p className="text-omniv-muted leading-relaxed mb-4">{role.blurb}</p>

                  {/* Expanded Content */}
                  {expandedRole === role.id && (
                    <div className="space-y-6 pt-4 border-t border-omniv">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2 text-omniv-muted">
                          {role.bullets.map((bullet, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-omniv-secondary mt-0.5 flex-shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2 text-omniv-muted">
                          {role.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-omniv-primary mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <ul className="space-y-2 text-omniv-muted">
                          {role.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-omniv-secondary mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link
                          href={role.applyHref}
                          className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-gradient-to-r from-omniv-primary to-omniv-secondary hover:from-omniv-primary/90 hover:to-omniv-secondary/90 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25"
                        >
                          Apply Now
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-omniv-muted/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-omniv-muted" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No roles found</h3>
              <p className="text-omniv-muted">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* How we hire */}
      <section id="how-we-hire" className="relative z-10 container mx-auto sm:px-6 px-2 pb-20">
        <div className="sm:max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 backdrop-blur-sm rounded-3xl sm:p-12 p-6 sm:border border-omniv-primary/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                How We <span className="text-omniv-primary">Hire</span>
              </h2>
              <p className="text-xl text-omniv-muted max-w-3xl mx-auto">
                Our streamlined hiring process is designed to be fast, fair, and focused on finding the right fit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="space-y-6">
                  {[
                    {
                      step: "01",
                      title: "Apply",
                      description: "Send your resume/LinkedIn/GitHub and a short note about a workflow you automated or a product you shipped."
                    },
                    {
                      step: "02",
                      title: "Intro Screen",
                      description: "20–30 minute chat about your experience and interests."
                    },
                    {
                      step: "03",
                      title: "Practical Task",
                      description: "A short, real problem (code/case) similar to our client work."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-omniv-primary/20 rounded-full flex items-center justify-center text-omniv-primary font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-omniv-muted">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <ol className="space-y-6">
                  {[
                    {
                      step: "04",
                      title: "Panel Interview",
                      description: "Deep dive with engineers/consultants; review your approach and trade‑offs."
                    },
                    {
                      step: "05",
                      title: "Offer",
                      description: "We move fast and give clear expectations on role, scope, and growth."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-omniv-secondary/20 rounded-full flex items-center justify-center text-omniv-secondary font-bold text-lg flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-omniv-muted">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-omniv-muted">
                We&apos;re an equal‑opportunity employer. We welcome applicants from all backgrounds and do not
                discriminate on the basis of race, religion, gender, or any protected characteristic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="sm:max-w-4xl mx-auto">
          <div className="bg-omniv-card/50 backdrop-blur-sm rounded-3xl sm:p-12 p-6 border border-omniv text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don&apos;t See a Fit?</h2>
            <p className="text-xl text-omniv-muted mb-8 max-w-3xl mx-auto">
              We&apos;re always excited to meet builders and problem‑solvers. Tell us how you can help clients win and
              we&apos;ll take a look.
            </p>
            <Link
              href="/apply/general"
              className="inline-flex items-center gap-3 sm:px-8 px-4 sm:py-4 py-2 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25"
            >
              Send a General Application
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


