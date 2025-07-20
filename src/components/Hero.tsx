import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='flex sm:flex-row flex-col sm:h-[calc(100vh-6rem)] gap-5 p-4'>
            {/* left */}
            <div className="bg-[#F6F6F6] rounded-2xl p-10 max-w-xl mx-auto flex flex-col items-start justify-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
                    Driving Your<br />
                    Future Growth<br />
                    With Our AI.
                </h1>
                <p className="text-base text-gray-600 leading-relaxed">
                    Working hard to build a safe and beneficial AI systems while observing how our research help others to achieve their outcome.
                </p>
                <button className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-medium rounded-full hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:shadow-lg">
                    Explore Our Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>

            {/* right */}
            <div className='flex-2 rounded-2xl overflow-hidden'>
                <Image src="/images/aihero.webp" alt="Hero Image" className='md:h-screen w-full object-cover' width={800} height={800} />
            </div>
        </div>
    )
}

export default Hero