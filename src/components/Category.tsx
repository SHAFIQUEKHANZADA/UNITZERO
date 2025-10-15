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
      color: "from-omniv-primary to-omniv-secondary",
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
      color: "from-omniv-primary to-omniv-secondary",
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
      color: "from-omniv-primary to-omniv-secondary",
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
      color: "from-omniv-primary to-omniv-secondary",
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
    <div ref={containerRef} className="bg-omniv-dark relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 md:top-20 left-4 md:left-20 w-32 md:w-96 h-32 md:h-96 bg-omniv-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 md:bottom-20 right-4 md:right-20 w-32 md:w-96 h-32 md:h-96 bg-omniv-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-omniv-primary to-white bg-clip-text text-transparent mb-3 md:mb-6">
            Next-Gen Intelligence Solutions
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-omniv-muted max-w-3xl mx-auto px-4">
            Revolutionize your operations with powerful AI-driven automation that scales with your ambitions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Sticky Image Section - Hidden on mobile, shown on desktop */}
          <div className="w-full lg:w-1/2 sticky top-1/12 hidden lg:block">
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${services[activeSection].color} rounded-2xl opacity-40 blur-xl transform scale-110 transition-all duration-700`}
              ></div>
              <div className="relative">
                <div className="flex items-center justify-center relative overflow-hidden rounded-2xl bg-omniv-card/80 backdrop-blur-sm border border-omniv-primary/30 shadow-2xl">
                  <Image
                    src={services[activeSection].image}
                    alt={services[activeSection].title}
                    width={600}
                    height={500}
                    className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-omniv-dark/90 via-omniv-dark/50 to-transparent p-6 rounded-b-2xl">
                    <div className="flex items-center gap-3">
                      <div className={`bg-gradient-to-r ${services[activeSection].color} p-2 rounded-lg shadow-lg`}>
                        {React.createElement(services[activeSection].icon, { size: 20, className: "text-white" })}
                      </div>
                      <span className="text-white font-semibold text-sm">{services[activeSection].title.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Content Section */}
          <div className="w-full lg:w-1/2 space-y-12 md:space-y-16 lg:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  sectionsRef.current[index] = el
                }}
                className={`transition-all duration-700 ${index === activeSection ? "opacity-100 transform translate-x-0" : "opacity-60 transform translate-x-2 lg:translate-x-4"
                  }`}
              >
                {/* Service Header */}
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center mb-2 md:mb-3">
                    <div className={`bg-gradient-to-r ${service.color} p-2 md:p-3 rounded-xl shadow-lg mr-3 md:mr-4`}>
                      {React.createElement(service.icon, { size: 20, className: "text-white" })}
                    </div>
                    <div>
                      <h2 className="text-lg pt-3 sm:text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                      <div className={`h-1 w-12 md:w-16 lg:w-24 bg-gradient-to-r ${service.color} mt-2 rounded-full`}></div>
                    </div>
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-omniv-muted leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 md:space-y-4 overflow-hidden">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={`bg-omniv-card/80 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-lg border border-omniv hover:shadow-xl hover:border-omniv-primary/50 transition-all duration-300 hover:transform hover:scale-105 ${index === activeSection ? "animate-fade-in-up" : ""
                        }`}
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4">
                        <div className={`bg-gradient-to-r ${service.color} p-2 md:p-3 rounded-lg shadow-md flex-shrink-0`}>
                          {React.createElement(feature.icon, { size: 18, className: "text-white" })}
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{feature.title}</h3>
                          <p className="text-xs md:text-sm text-omniv-muted leading-relaxed">{feature.description}</p>
                          <div className="mt-2 md:mt-3">
                            <span className={`inline-block px-2 md:px-3 py-1 text-xs font-medium rounded-full border ${
                              featureIndex % 2 === 0 
                                ? 'bg-omniv-primary/20 text-omniv-primary border-omniv-primary/30' 
                                : 'bg-omniv-secondary/20 text-omniv-secondary border-omniv-secondary/30'
                            }`}>
                              {featureIndex === 0 ? 'AI-Powered' : 
                               featureIndex === 1 ? 'Smart Analytics' : 
                               'Advanced Technology'}
                            </span>
                          </div>
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
    </div>
  )
}

export default Category
