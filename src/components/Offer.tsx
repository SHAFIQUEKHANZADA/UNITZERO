"use client"

import { Sparkles, Star } from "lucide-react"
import { useEffect, useState } from "react"

export default function HowWeWorkTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      const step1Trigger = windowHeight * 0.2
      const step2Trigger = windowHeight * 0.6
      const step3Trigger = windowHeight * 1.0

      if (scrollY >= step3Trigger) {
        setActiveStep(2)
      } else if (scrollY >= step2Trigger) {
        setActiveStep(1)
      } else if (scrollY >= step1Trigger) {
        setActiveStep(0)
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
      number: "01",
    },
    {
      title: "Low‑Code Integration",
      description: "Plug into MS 365, SAP, EHRs, ERPs with minimal IT lift.",
      number: "02",
    },
    {
      title: "Scale & Optimize",
      description: "Reusable AI modules, weekly tuning, usage insights delivered automatically.",
      number: "03",
    },
  ]

  return (
    <section className="relative min-h-screen bg-omniv-dark text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-1 h-1 bg-omniv-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-omniv-secondary rounded-full opacity-40 animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-40 w-1 h-1 bg-omniv-primary rounded-full opacity-50 animate-pulse delay-200"></div>
        <div className="absolute top-60 right-20 w-1 h-1 bg-omniv-secondary rounded-full opacity-70 animate-pulse delay-300"></div>

        <Sparkles className="absolute top-40 left-60 w-4 h-4 text-omniv-primary opacity-40 animate-pulse delay-500" />
        <Sparkles className="absolute bottom-60 right-40 w-3 h-3 text-omniv-secondary opacity-50 animate-pulse delay-700" />
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-omniv-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-omniv-primary/20 border border-omniv-primary/30">
                <Sparkles className="w-4 h-4 text-omniv-primary" />
                <span className="text-sm font-medium text-omniv-primary">How We Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Timeline Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-omniv-primary/50 to-transparent"></div>
              {/* Steps */}
              <div className="space-y-32">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-1000 transform ${
                      index <= activeStep ? "opacity-100 translate-y-0" : "opacity-30 translate-y-8"
                    }`}
                  >
                    {/* Step Indicator */}
                    <div className="absolute left-0 flex items-center justify-center">
                      <div
                        className={`relative w-16 h-16 rounded-full border-2 transition-all duration-500 ${
                          index <= activeStep
                            ? "border-omniv-primary bg-omniv-primary/20 scale-110"
                            : "border-white/20 bg-black"
                        }`}
                      >
                        {index <= activeStep ? (
                          <Star className="w-8 h-8 text-purple-400 absolute inset-0 m-auto animate-pulse" />
                        ) : (
                          <span className="text-white/40 font-bold absolute inset-0 flex items-center justify-center">
                            {step.number}
                          </span>
                        )}
                      </div>

                      {/* Connecting Line Segment */}
                      {index < steps.length - 1 && (
                        <div
                          className={`absolute top-16 left-1/2 w-px h-32 transition-all duration-1000 ${
                            index < activeStep ? "bg-gradient-to-b from-purple-500 to-purple-500/50" : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="ml-24 space-y-4">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-500 ${
                          index <= activeStep
                            ? "bg-purple-600/30 text-purple-300 border border-purple-500/30"
                            : "bg-white/5 text-white/40 border border-white/10"
                        }`}
                      >
                        Step {index + 1}
                      </div>

                      <h3
                        className={`text-3xl lg:text-4xl font-bold transition-all duration-500 ${
                          index <= activeStep ? "text-white" : "text-white/40"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`text-lg leading-relaxed max-w-2xl transition-all duration-500 ${
                          index <= activeStep ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {step.description}
                      </p>

                      {/* Visual Enhancement for Active Step */}
                      {index === activeStep && (
                        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-purple-300 font-medium">Currently Active</p>
                              <p className="text-xs text-gray-400">
                                This step is highlighted based on your scroll position
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Dynamic Images */}
            <div className="sticky top-32 lg:block hidden">
              <div className="relative w-full h-[600px]">
                {/* Step 1 Image - Discovery & Free Pilot */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center space-y-6">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">Discovery Phase</h4>
                        <p className="text-white/80 text-sm">Analyzing bottlenecks and opportunities</p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-white/80 text-sm">Risk Assessment</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-white/80 text-sm">Success Metrics</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                          <span className="text-white/80 text-sm">Free Pilot Setup</span>
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 Image - Low-Code Integration */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-3xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center space-y-6">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">Integration Hub</h4>
                        <p className="text-white/80 text-sm">Connecting your existing systems</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <div className="w-8 h-8 bg-blue-500 rounded mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">365</span>
                          </div>
                          <span className="text-white/80 text-xs">MS 365</span>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">SAP</span>
                          </div>
                          <span className="text-white/80 text-xs">SAP</span>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <div className="w-8 h-8 bg-red-500 rounded mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">EHR</span>
                          </div>
                          <span className="text-white/80 text-xs">EHRs</span>
                        </div>
                        <div className="p-3 bg-white/10 rounded-lg text-center">
                          <div className="w-8 h-8 bg-purple-500 rounded mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">ERP</span>
                          </div>
                          <span className="text-white/80 text-xs">ERPs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 Image - Scale & Optimize */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${
                    activeStep === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 transform rotate-1 hover:rotate-3 transition-transform duration-500">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-center space-y-6">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                            />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-white">Scale & Optimize</h4>
                        <p className="text-white/80 text-sm">AI modules working automatically</p>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/80 text-sm">AI Module Performance</span>
                            <span className="text-green-400 text-sm font-bold">+127%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-4/5 animate-pulse"></div>
                          </div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/80 text-sm">Weekly Optimization</span>
                            <span className="text-blue-400 text-sm font-bold">Active</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                            <span className="text-white/60 text-xs">Auto-tuning in progress</span>
                          </div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white/80 text-sm">Usage Insights</span>
                            <span className="text-purple-400 text-sm font-bold">Real-time</span>
                          </div>
                          <div className="text-white/60 text-xs">Delivered automatically to your dashboard</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
