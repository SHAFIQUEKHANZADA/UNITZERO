"use client"

// import Image from 'next/image'
import React from 'react'
import { PT_Sans } from 'next/font/google'

const pt = PT_Sans({
    weight: "700",
    subsets: ['latin'],
})

const Hero = () => {
    return (
        <div className="relative sm:min-h-screen bg-omniv-dark overflow-hidden sm:pt-0 pt-16">
            {/* Enhanced Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-omniv-primary rounded-tl-full animate-circuit-float"></div>
                <div className="absolute top-40 right-20 w-24 h-24 border-r-2 border-b-2 border-omniv-secondary rounded-br-full animate-circuit-float-delay-1"></div>
                <div className="absolute top-60 left-1/4 w-16 h-16 border-2 border-omniv-primary rounded-full animate-circuit-float-delay-2"></div>
                <div className="absolute top-80 right-1/3 w-20 h-20 border-l-2 border-t-2 border-omniv-secondary rounded-tl-full animate-circuit-float"></div>
                <div className="absolute bottom-40 left-20 w-28 h-28 border-r-2 border-b-2 border-omniv-primary rounded-br-full animate-circuit-float-delay-1"></div>
                <div className="absolute bottom-60 right-10 w-12 h-12 border-2 border-omniv-secondary rounded-full animate-circuit-float-delay-2"></div>

                {/* Enhanced Circuit Lines */}
                <div className="absolute top-32 left-32 w-64 h-px bg-gradient-to-r from-omniv-primary to-transparent"></div>
                <div className="absolute top-64 right-32 w-48 h-px bg-gradient-to-l from-omniv-secondary to-transparent"></div>
                <div className="absolute bottom-32 left-1/3 w-56 h-px bg-gradient-to-r from-omniv-primary to-transparent"></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute top-1/4 right-1/4 w-20 h-20 bg-omniv-primary/10 rounded-full animate-pulse-glow"
                    style={{ animationDelay: '0s' }}
                />
                <div
                    className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-omniv-secondary/10 rounded-full animate-pulse-glow"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="absolute top-1/2 right-1/3 w-12 h-12 bg-gradient-to-r from-omniv-primary/20 to-omniv-secondary/20 rounded-full animate-pulse-glow"
                    style={{ animationDelay: '4s' }}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="flex flex-col   items-center gap-12  ">
                    {/* Left Content */}
                    <div className="text-center space-y-8 max-w-3xl animate-fade-in-up">
                        {/* Enhanced Tagline with Icons */}
                        <div className="flex items-center justify-center gap-3 text-sm font-medium text-omniv-muted">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-2 h-2 bg-omniv-primary rounded-full animate-pulse-glow"
                                    style={{ animationDuration: '2s' }}
                                />
                                <span>POWERING TOMORROW WITH AI</span>
                            </div>
                        </div>

                        {/* Enhanced Main Heading */}
                        <h1 className={`${pt.className} text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white`}>
                            <span className="transition-all duration-300 hover:text-omniv-primary hover:scale-105 transform uppercase">
                                Automate Your Business with AI Agents that Call,   <span className="text-omniv-primary hover:text-omniv-secondary transition-all duration-300 uppercase">
                                    Chat & Work for You — 24/7.
                                </span>
                            </span>


                        </h1>

                        {/* Enhanced Description */}
                        <p className="text-lg text-omniv-muted leading-relaxed max-w-xl mx-auto">
                            We design and deploy AI voice, chat, and workflow automations for agencies, healthcare, and real estate.
                        </p>

                        {/* Enhanced CTA Button */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center  text-xs">
                            <button className="inline-flex items-center justify-center gap-3 px-7 py-3 bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white font-semibold rounded-xl hover:from-omniv-primary/90 hover:to-omniv-secondary/90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 shadow-lg shadow-omniv-primary/25">
                                EXPLORE OUR SOLUTIONS
                                <svg
                                    className="w-5 h-5 animate-bounce-x"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="inline-flex items-center justify-center gap-3 px-7 py-3 border-2 border-omniv text-omniv-muted font-semibold rounded-xl hover:border-omniv-primary hover:text-omniv-primary hover:bg-omniv-card transition-all duration-300 hover:shadow-lg hover:scale-105 transform hover:-translate-y-1">
                                WATCH DEMO
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 hover:scale-125"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </button>
                        </div>

                        {/* Enhanced Stats */}
                        <div className="flex flex-wrap justify-center sm:gap-20 gap-3 pt-8">
                            {[
                                { number: "50+", label: "AI Projects Completed", color: "omniv-primary" },
                                { number: "98%", label: "Client Satisfaction", color: "omniv-secondary" },
                                { number: "24/7", label: "Support Available", color: "omniv-primary" }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center group cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                                    style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                                >
                                    <div className={`sm:text-3xl text-[25px] font-bold text-white group-hover:text-${stat.color} transition-colors duration-300`}>
                                        {stat.number}
                                    </div>
                                    <div className="sm:text-sm text-[12px] text-omniv-muted group-hover:text-white transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

            {/* Enhanced Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 sm:h-32 bg-gradient-to-t from-omniv-dark to-transparent"></div>

            {/* Enhanced Custom CSS for animations */}
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
                    animation: fade-in-up 0.8s ease-out forwards;
                }
                
                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }
                
                .animate-bounce-x {
                    animation: bounce-x 2s ease-in-out infinite;
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                @keyframes pulse-glow {
                    0%, 100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.4;
                        transform: scale(1.1);
                    }
                }
                
                .animate-pulse-glow {
                    animation: pulse-glow 4s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default Hero

//        {/* Right Image Section */}
//        <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
//        <div className="relative">
//            {/* Enhanced Main Robot Image */}
//            <div className="relative z-20 group">
//                <div className="absolute inset-0 bg-gradient-to-r from-omniv-primary/20 to-omniv-secondary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 animate-pulse-glow"></div>
//                <Image
//                    src="/images/hero.png"
//                    alt="AI Robot"
//                    width={800}
//                    height={900}
//                    className="relative z-10 w-full h-auto max-w-2xl mx-auto drop-shadow-2xl rounded-3xl transition-all duration-500 group-hover:scale-105"
//                />
//            </div>

//            {/* Enhanced Floating Stats Card */}
//            <div className="absolute bottom-20 right-0 lg:right-10 bg-omniv-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-omniv z-30 hover:scale-105 hover:-translate-y-2 transition-all duration-300">
//                <div className="text-center">
//                    <div className="text-4xl font-bold text-white animate-pulse-glow">
//                        50+
//                    </div>
//                    <div className="text-sm text-omniv-muted font-medium">AI PROJECTS COMPLETED</div>
//                </div>
//            </div>

//            {/* Enhanced Floating Elements */}
//            {[
//                { color: "omniv-primary", delay: 0, position: "top-10 right-20 w-16 h-16" },
//                { color: "omniv-secondary", delay: 2, position: "bottom-40 left-10 w-12 h-12" },
//                { color: "omniv-primary", delay: 3, position: "top-1/2 right-5 w-8 h-8" },
//                { color: "omniv-secondary", delay: 1.5, position: "bottom-20 left-1/3 w-6 h-6" }
//            ].map((element, index) => (
//                <div
//                    key={index}
//                    className={`absolute ${element.position} bg-gradient-to-r from-${element.color} to-${element.color === 'omniv-primary' ? 'omniv-secondary' : 'omniv-primary'} rounded-full opacity-20 animate-pulse-glow animate-float`}
//                    style={{animationDelay: `${element.delay}s`}}
//                />
//            ))}
//        </div>
//    </div>