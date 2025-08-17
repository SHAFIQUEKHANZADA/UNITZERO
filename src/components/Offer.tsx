"use client"

import { Sparkles, ArrowRight, CheckCircle, Zap, Target, Code, TrendingUp } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function HowWeWorkTimeline() {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      
      const rect = timelineRef.current.getBoundingClientRect()
      const timelineTop = rect.top
      const timelineHeight = rect.height
      const windowHeight = window.innerHeight
      
      // Calculate which step should be active based on scroll position
      const stepHeight = timelineHeight / 3
      const scrollProgress = (windowHeight - timelineTop) / stepHeight
      
      if (scrollProgress <= 1) {
        setActiveStep(0)
      } else if (scrollProgress <= 2) {
        setActiveStep(1)
      } else {
        setActiveStep(2)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      title: "Discovery & Free Pilot",
      description: "Rapidly target your biggest bottleneck—zero‑risk, clear success metrics.",
      icon: Target,
      color: "from-omniv-primary to-omniv-secondary",
      bgColor: "bg-omniv-primary/10",
      borderColor: "border-omniv-primary/30",
      features: ["Risk Assessment", "Success Metrics", "Free Pilot Setup"],
      status: "Ready to Start"
    },
    {
      title: "Low‑Code Integration",
      description: "Plug into MS 365, SAP, EHRs, ERPs with minimal IT lift.",
      icon: Code,
      color: "from-omniv-secondary to-omniv-primary",
      bgColor: "bg-omniv-secondary/10",
      borderColor: "border-omniv-secondary/30",
      features: ["MS 365", "SAP", "EHRs", "ERPs"],
      status: "In Progress"
    },
    {
      title: "Scale & Optimize",
      description: "Reusable AI modules, weekly tuning, usage insights delivered automatically.",
      icon: TrendingUp,
      color: "from-omniv-primary via-omniv-secondary to-omniv-primary",
      bgColor: "bg-omniv-primary/10",
      borderColor: "border-omniv-primary/30",
      features: ["AI Performance", "Auto-tuning", "Real-time Insights"],
      status: "Active"
    },
  ]

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    // Smooth scroll to the step
    const stepElement = document.getElementById(`step-${index}`)
    if (stepElement) {
      stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="relative min-h-screen bg-omniv-dark text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.03),transparent_50%)]"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-omniv-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-20 pt-20 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-8">
            <Sparkles className="w-5 h-5 text-omniv-primary" />
            <span className="text-omniv-primary font-medium">How We Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-6">
            Our Process
          </h2>
          <p className="text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed">
            A proven three-step approach to transform your business with AI, from discovery to full-scale optimization
          </p>
        </div>
      </div>

      {/* Main Timeline */}
      <div ref={timelineRef} className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Side - Interactive Timeline */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-omniv-primary/50 to-transparent"></div>
              
              {/* Steps */}
              <div className="space-y-24">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    id={`step-${index}`}
                    className={`relative group cursor-pointer transition-all duration-700 ${
                      index <= activeStep ? "opacity-100 translate-y-0" : "opacity-40 translate-y-8"
                    }`}
                    onClick={() => handleStepClick(index)}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step Indicator */}
                    <div className="absolute left-0 flex items-center justify-center sm:left-[-10px]">
                      <div
                        className={`relative sm:w-20 sm:h-20 w-10 h-10 rounded-full border-2 transition-all duration-500 ${
                          index === activeStep
                            ? "border-omniv-primary bg-omniv-primary/20 scale-110 shadow-lg shadow-omniv-primary/25"
                            : index < activeStep
                            ? "border-omniv-secondary bg-omniv-secondary/20 scale-105"
                            : "border-omniv text-omniv-muted"
                        } ${
                          hoveredStep === index ? "scale-110" : ""
                        }`}
                      >
                        {index < activeStep ? (
                          <CheckCircle className="sm:w-10 sm:h-10 w-5 h-5 text-omniv-secondary absolute inset-0 m-auto" />
                        ) : index === activeStep ? (
                          <div className="absolute inset-0 m-auto sm:w-10 sm:h-10 w-5 h-5">
                            <step.icon className="sm:w-10 sm:h-10 w-5 h-5 text-omniv-primary animate-pulse" />
                          </div>
                        ) : (
                          <span className="text-omniv-muted font-bold text-lg absolute inset-0 flex items-center justify-center">
                            {index + 1}
                          </span>
                        )}
                      </div>

                      {/* Progress Line */}
                      {index < steps.length - 1 && (
                        <div
                          className={`absolute top-20 left-1/2 w-0.5 h-24 transition-all duration-1000 ${
                            index < activeStep 
                              ? "bg-gradient-to-b from-omniv-secondary to-omniv-primary" 
                              : "bg-omniv"
                          }`}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="sm:ml-28 ml-20 space-y-4">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                          index === activeStep
                            ? "bg-omniv-primary/30 text-omniv-primary border border-omniv-primary/50"
                            : index < activeStep
                            ? "bg-omniv-secondary/30 text-omniv-secondary border border-omniv-secondary/50"
                            : "bg-omniv-muted/10 text-omniv-muted border border-omniv"
                        }`}
                      >
                        <span>Step {index + 1}</span>
                        {index === activeStep && (
                          <div className="w-2 h-2 bg-omniv-primary rounded-full animate-pulse" />
                        )}
                      </div>

                      <h3
                        className={`sm:text-3xl text-lg lg:text-4xl font-bold transition-all duration-500 ${
                          index === activeStep ? "text-white" : "text-white/70"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-lg leading-relaxed max-w-xl transition-all duration-500 ${
                          index === activeStep ? "text-omniv-muted" : "text-omniv-muted/60"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-2">
                        {step.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className={`flex items-center gap-3 transition-all duration-500 ${
                              index === activeStep ? "opacity-100" : "opacity-60"
                            }`}
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              index === activeStep ? "bg-omniv-primary" : "bg-omniv-muted"
                            }`} />
                            <span className={`text-sm ${
                              index === activeStep ? "text-omniv-muted" : "text-omniv-muted/60"
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Status Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                          index === activeStep
                            ? "bg-omniv-primary/20 text-omniv-primary border border-omniv-primary/30"
                            : "bg-omniv-muted/10 text-omniv-muted border border-omniv"
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full ${
                          index === activeStep ? "bg-omniv-primary animate-pulse" : "bg-omniv-muted"
                        }`} />
                        {step.status}
                      </div>

                      {/* Hover Effect */}
                      {hoveredStep === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-omniv-primary/5 to-transparent rounded-2xl -z-10 transform scale-105 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Dynamic Dashboard */}
            <div className="sticky top-32 lg:block hidden">
              <div className="relative w-full h-[700px]">
                {/* Step 1 Dashboard */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 0 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-2"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-omniv-primary via-omniv-secondary to-omniv-primary rounded-3xl p-8 shadow-2xl">
                    <div className="bg-omniv-card/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-omniv-primary/20 rounded-full mx-auto flex items-center justify-center">
                          <Target className="w-12 h-12 text-omniv-primary" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Discovery Phase</h4>
                          <p className="text-omniv-muted">Analyzing bottlenecks and opportunities</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">Risk Assessment</span>
                            <div className="w-3 h-3 bg-omniv-secondary rounded-full animate-pulse"></div>
                          </div>
                          <div className="w-full bg-omniv-muted/30 rounded-full h-2">
                            <div className="bg-omniv-secondary h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                          </div>
                        </div>

                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">Success Metrics</span>
                            <div className="w-3 h-3 bg-omniv-secondary rounded-full animate-pulse delay-100"></div>
                          </div>
                          <div className="w-full bg-omniv-muted/30 rounded-full h-2">
                            <div className="bg-omniv-secondary h-2 rounded-full w-3/4 transition-all duration-1000 delay-200"></div>
                          </div>
                        </div>

                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">Free Pilot Setup</span>
                            <div className="w-3 h-3 bg-omniv-primary rounded-full animate-pulse delay-200"></div>
                          </div>
                          <div className="w-full bg-omniv-muted/30 rounded-full h-2">
                            <div className="bg-omniv-primary h-2 rounded-full w-2/3 transition-all duration-1000 delay-400"></div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-omniv-primary/20 hover:bg-omniv-primary/30 rounded-full text-omniv-primary font-medium transition-all duration-300 hover:scale-105 border border-omniv-primary/30">
                          Start Discovery
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 Dashboard */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 1 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 -rotate-2"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-omniv-secondary via-omniv-primary to-omniv-secondary rounded-3xl p-8 shadow-2xl">
                    <div className="bg-omniv-card/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-omniv-secondary/20 rounded-full mx-auto flex items-center justify-center">
                          <Code className="w-12 h-12 text-omniv-secondary" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Integration Hub</h4>
                          <p className="text-omniv-muted">Connecting your existing systems</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { name: "MS 365", color: "bg-blue-500", status: "Connected" },
                          { name: "SAP", color: "bg-orange-500", status: "Connecting" },
                          { name: "EHRs", color: "bg-red-500", status: "Pending" },
                          { name: "ERPs", color: "bg-purple-500", status: "Ready" }
                        ].map((system, idx) => (
                          <div key={idx} className="bg-omniv-muted/20 rounded-xl p-4 text-center">
                            <div className={`w-12 h-12 ${system.color} rounded-lg mx-auto mb-3 flex items-center justify-center`}>
                              <span className="text-white text-sm font-bold">{system.name}</span>
                            </div>
                            <span className="text-omniv-muted text-xs">{system.status}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-omniv-secondary/20 hover:bg-omniv-secondary/30 rounded-full text-omniv-secondary font-medium transition-all duration-300 hover:scale-105 border border-omniv-secondary/30">
                          Configure Integration
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 Dashboard */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 2 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-95 rotate-1"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-omniv-primary via-omniv-secondary to-omniv-primary rounded-3xl p-8 shadow-2xl">
                    <div className="bg-omniv-card/80 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-between">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-omniv-primary/20 rounded-full mx-auto flex items-center justify-center">
                          <TrendingUp className="w-12 h-12 text-omniv-primary" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">Scale & Optimize</h4>
                          <p className="text-omniv-muted">AI modules working automatically</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">AI Module Performance</span>
                            <span className="text-omniv-secondary text-lg font-bold">+127%</span>
                          </div>
                          <div className="w-full bg-omniv-muted/30 rounded-full h-3">
                            <div className="bg-gradient-to-r from-omniv-secondary to-omniv-primary h-3 rounded-full w-4/5 transition-all duration-1000"></div>
                          </div>
                        </div>

                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">Weekly Optimization</span>
                            <span className="text-omniv-primary text-sm font-bold bg-omniv-primary/20 px-3 py-1 rounded-full">Active</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-omniv-secondary rounded-full animate-ping"></div>
                            <span className="text-omniv-muted text-sm">Auto-tuning in progress</span>
                          </div>
                        </div>

                        <div className="bg-omniv-muted/20 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-white/90 font-medium">Usage Insights</span>
                            <span className="text-omniv-primary text-sm font-bold bg-omniv-primary/20 px-3 py-1 rounded-full">Real-time</span>
                          </div>
                          <div className="text-omniv-muted text-sm">Delivered automatically to your dashboard</div>
                        </div>
                      </div>

                      <div className="text-center">
                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-omniv-primary/20 hover:bg-omniv-primary/30 rounded-full text-omniv-primary font-medium transition-all duration-300 hover:scale-105 border border-omniv-primary/30">
                          View Dashboard
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-omniv-primary/10 via-omniv-secondary/10 to-omniv-primary/10 rounded-3xl blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-omniv-primary/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-omniv-muted mb-8">
              Start with our free pilot and see the difference AI can make in just weeks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] hover:from-omniv-primary/90 hover:to-omniv-secondary/90 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-omniv-primary/25">
                <Zap className="w-5 h-5" />
                Start Free Pilot
              </button>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-omniv-muted/10 hover:bg-omniv-muted/20 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 border border-omniv">
                <Sparkles className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
