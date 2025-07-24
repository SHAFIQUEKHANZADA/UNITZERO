"use client"
import React, { useState, useEffect, useRef } from "react"
import {
  Scale,
  DollarSign,
  Heart,
  ShoppingCart,
  FileText,
  Bot,
  Shield,
  TrendingUp,
  Stethoscope,
  Clock,
  Package,
  Users,
} from "lucide-react"
import Image from "next/image"

const Category = () => {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  const services = [
    {
      id: "retail",
      title: "Retail, Logistics & Cross‑Industry AI",
      description: "Modular AI services you can mix‑and‑match across any vertical to drive revenue and efficiency.",
      icon: ShoppingCart,
      color: "from-purple-500 to-violet-600",
      image: "/images/auto1.jpg",
      features: [
        {
          icon: TrendingUp,
          title: "Personalized Recommendations",
          description: "Tailor product suggestions in real time for each customer's tastes.",
        },
        {
          icon: DollarSign,
          title: "Dynamic Pricing Engine",
          description: "Adjust prices automatically based on inventory, demand, and competitor data.",
        },
        {
          icon: Package,
          title: "Smart Inventory & Route Planning",
          description: "Predict stock needs and optimize delivery routes to cut logistics costs.",
        },
        {
          icon: Users,
          title: "HR & Admin Automation",
          description:
            "From resume screening to employee onboarding and churn prediction, bring AI to your back‑office.",
        },
      ],
    },
    {
      id: "legal",
      title: "Legal Automation",
      description:
        "AI tools that streamline contract review, client intake, and document search so your lawyers focus on high‑value work.",
      icon: Scale,
      color: "from-blue-500 to-indigo-600",
      image: "/images/auto2.jpg",
      features: [
        {
          icon: FileText,
          title: "Instant Contract Analysis",
          description: "Upload any contract and get key clauses, obligations, and risk flags highlighted in seconds.",
        },
        {
          icon: Bot,
          title: "24/7 Client Chatbot",
          description:
            "An always‑on assistant that answers FAQs, collects intake information, and even helps schedule consultations.",
        },
        {
          icon: Shield,
          title: "eDiscovery Accelerator",
          description:
            "Process tens of thousands of documents per hour and surface the handful that actually matter for your case.",
        },
      ],
    },
    {
      id: "finance",
      title: "Finance Automation",
      description:
        "End‑to‑end AI workflows that close your books faster, catch fraud in real time, and make lending decisions smarter.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      image: "/images/auto3.jpg",
      features: [
        {
          icon: FileText,
          title: "Automated Close & Reporting",
          description: "Generate P&L statements, balance sheets, and variance reports with one click.",
        },
        {
          icon: Shield,
          title: "Real‑Time Fraud Monitoring",
          description: "Instantly detect and block suspicious transactions—no human review needed.",
        },
        {
          icon: TrendingUp,
          title: "AI‑Powered Credit Scoring",
          description: "Analyze hundreds of data points to underwrite loans more fairly and at web‑scale.",
        },
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare Automation",
      description:
        "Virtual assistants and NLP engines that handle patient intake, coding, and no‑show outreach so your staff can deliver better care.",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      image: "/images/auto4.jpg",
      features: [
        {
          icon: Stethoscope,
          title: "Virtual Health Assistant",
          description: "Symptom triage, pre‑visit form collection, and appointment booking—all via chat or voice.",
        },
        {
          icon: FileText,
          title: "Medical Coding Suggestion",
          description: "Automatically convert doctor's notes into ICD‑10/CPT codes with 95%+ accuracy.",
        },
        {
          icon: Clock,
          title: "No‑Show Prediction & Outreach",
          description:
            "Identify patients likely to miss appointments and send reminders or calls to reduce no‑shows by up to 30%.",
        },
      ],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Check if we're in the container viewport
      if (scrollY + viewportHeight > containerTop && scrollY < containerTop + containerHeight) {
        const relativeScroll = scrollY - containerTop + viewportHeight / 2
        const sectionHeight = containerHeight / services.length
        const newActiveSection = Math.floor(relativeScroll / sectionHeight)

        if (newActiveSection >= 0 && newActiveSection < services.length && newActiveSection !== activeSection) {
          setActiveSection(newActiveSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection, services.length])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="md:text-5xl text-3xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-6">
            Next-Gen Intelligence Solutions
          </h1>
          <p className="md:text-xl text-sm text-slate-300 max-w-3xl mx-auto">
            Revolutionize your operations with powerful AI-driven automation that scales with your ambitions
          </p>
        </div>

        <div className="flex gap-12 items-start">
          {/* Sticky Image Section */}
          <div className="w-1/2 sticky top-24 hidden md:block">
            <div className="relative">
              {/* Background gradient that matches active section */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${services[activeSection].color} rounded-2xl opacity-30 blur-xl transform scale-110 transition-all duration-700`}
              ></div>
              {/* Main image container */}
              <div className="relative">
                <div className="flex items-center justify-center relative overflow-hidden rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-slate-600">
                  <Image
                    src={services[activeSection].image || "/placeholder.svg"}
                    alt={services[activeSection].title}
                    width={600}
                    height={600}
                    className="w-full xl:h-[600px] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content Section */}
          <div className="md:w-1/2 space-y-32">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  sectionsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${index === activeSection ? "opacity-100 transform translate-x-0" : "opacity-60 transform translate-x-4"
                  }`}
              >
                {/* Service Header */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl shadow-lg mr-4`}>
                      {React.createElement(service.icon, { size: 32, className: "text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-100">{service.title}</h2>
                      <div className={`h-1 w-24 bg-gradient-to-r ${service.color} mt-2 rounded-full`}></div>
                    </div>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-700 hover:shadow-xl hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105 ${index === activeSection ? "animate-fade-in-up" : ""
                        }`}
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg shadow-md flex-shrink-0`}>
                          {React.createElement(feature.icon, { size: 24, className: "text-white" })}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-100 mb-2">{feature.title}</h3>
                          <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default Category
