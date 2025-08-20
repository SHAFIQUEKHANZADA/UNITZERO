'use client'

import Link from 'next/link'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-omniv-dark overflow-hidden">
      {/* Background decorative elements (matching Hero style) */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-omniv-primary rounded-tl-full animate-circuit-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-r-2 border-b-2 border-omniv-secondary rounded-br-full animate-circuit-float-delay-1"></div>
        <div className="absolute top-60 left-1/4 w-16 h-16 border-2 border-omniv-primary rounded-full animate-circuit-float-delay-2"></div>
        <div className="absolute top-80 right-1/3 w-20 h-20 border-l-2 border-t-2 border-omniv-secondary rounded-tl-full animate-circuit-float"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 border-r-2 border-b-2 border-omniv-primary rounded-br-full animate-circuit-float-delay-1"></div>
        <div className="absolute bottom-60 right-10 w-12 h-12 border-2 border-omniv-secondary rounded-full animate-circuit-float-delay-2"></div>

        <div className="absolute top-32 left-32 w-64 h-px bg-gradient-to-r from-omniv-primary to-transparent"></div>
        <div className="absolute top-64 right-32 w-48 h-px bg-gradient-to-l from-omniv-secondary to-transparent"></div>
        <div className="absolute bottom-32 left-1/3 w-56 h-px bg-gradient-to-r from-omniv-primary to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-omniv-primary/20 to-omniv-secondary/20 rounded-3xl blur-3xl animate-pulse-glow"></div>
            <h1 className="relative z-10 text-7xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] bg-clip-text text-transparent">
              404
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">Oops! Page Not Found</h2>

          <p className="text-lg md:text-xl text-omniv-muted max-w-2xl">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try navigating back or head to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white font-bold rounded-xl hover:from-omniv-primary/90 hover:to-omniv-secondary/90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Return Home
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-omniv text-omniv-muted font-bold rounded-xl hover:border-omniv-primary hover:text-omniv-primary hover:bg-omniv-card transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            >
              Go Back
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
          </div>

          {/* Support card */}
          <div className="mt-10 w-full max-w-xl bg-omniv-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-omniv">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-omniv-primary to-omniv-secondary flex items-center justify-center text-white font-bold"><BsFillQuestionOctagonFill /></div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Need help finding something?</h3>
                <p className="text-sm text-omniv-muted">Visit our homepage or explore the menu to discover all sections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-omniv-dark to-transparent"></div>

      {/* Local animations to match site */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}