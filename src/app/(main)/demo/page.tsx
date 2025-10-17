"use client"

import { useEffect } from 'react'
import { Calendar, Clock, User, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import './demo.css'

export default function DemoPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  // No-op: Inline Calendly widget is used below. Popup helper removed.

  return (
    <div className="min-h-screen bg-omniv-dark text-white overflow-hidden py-20 sm:py-0">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] py-6 sm:py-8 sm:block hidden">
        <div className="container mx-auto px-4 py-4 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
              Get Your Free Demo
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4">
              Experience our AI-powered solutions firsthand. Book a personalized demo and discover how we can transform your business.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 px-2">Why Book a Demo?</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-0">
                  <div className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] p-2 rounded-full flex-shrink-0">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Personalized Experience</h3>
                    <p className="text-sm sm:text-base text-omniv-muted">
                      Get a tailored demonstration based on your specific business needs and challenges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-0">
                  <div className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] p-2 rounded-full flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="text-sm sm:text-base text-omniv-muted">
                      Choose a time that works best for you. We accommodate different time zones and schedules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-0">
                  <div className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] p-2 rounded-full flex-shrink-0">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">No Commitment</h3>
                    <p className="text-sm sm:text-base text-omniv-muted">
                      This is completely free with no strings attached. See our solutions in action before deciding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-omniv-card p-4 sm:p-6 rounded-lg border border-omniv mx-2 sm:mx-0">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What to Expect</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-omniv-muted">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary flex-shrink-0" />
                  Live demonstration of our AI solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary flex-shrink-0" />
                  Q&A session with our experts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary flex-shrink-0" />
                  Customized recommendations for your business
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-omniv-primary flex-shrink-0" />
                  Implementation roadmap discussion
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-omniv-card p-4 sm:p-6 lg:p-8 rounded-lg border border-omniv order-1 lg:order-2 mx-2 sm:mx-0"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Schedule Your Demo</h3>
              <p className="text-sm sm:text-base text-omniv-muted">
                Choose your preferred date and time below
              </p>
            </div>

            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/hilalaziz-unitzero/"
              style={{ minWidth: '280px', height: '500px' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Extend Window interface for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}
