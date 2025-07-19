'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Footer = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const footerRef = useRef(null)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowScrollTop(entry.isIntersecting),
      {
        root: null,
        threshold: 0.1,
      }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white px-6 py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-66 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-66 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Block */}
        <div>
          <div className="mb-4">
            <div className="bg-white w-8 h-8 rounded flex items-center justify-center text-black font-bold text-lg">
              S
            </div>
          </div>
          <p className="text-sm mb-2">Embrace the future of artificial intelligence!</p>
          <a href="mailto:support@unitzero.com" className="text-orange-500 text-sm block">
            support@unitzero.com
          </a>
          <p className="text-sm mt-1">+2 011 6114 5741</p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-2 text-md">
            <li className="flex items-center space-x-1">
              <span>→</span> <a href="#">About Us</a>
            </li>
            <li><a href="#">Leadership Team</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-md">
            <li><a href="#">AI Model Development</a></li>
            <li><a href="#">AI Integration solutions</a></li>
            <li><a href="#">AI Strategy Consulting</a></li>
            <li><a href="#">Machine Learning</a></li>
            <li><a href="#">Data Monitoring</a></li>
            <li><a href="#">Neural Network</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-md">
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Pricing & Plans</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Key Features</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm mb-4">subscribe to our newsletter and receive the latest news on products, services & more.</p>
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              placeholder="Type your email"
              className="bg-[#282828] border border-zinc-600 text-white text-md outline-none w-full px-4 pr-10 py-2 h-14 rounded-lg"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
              <FiArrowUpRight className="text-xl cursor-pointer bg-[#6237ff] hover:bg-[#764eff] text-white p-2 rounded-full" />
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-2">By subscribing, you accept the Privacy Policy</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 w-[90%] mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>©2025 Spark AI, All Rights Reserved. With Love by <a href="https://7oroof.com" className="text-orange-500">7oroof.com</a></p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms & Conditions</a>
          <span>–</span>
          <a href="#">Privacy Policy</a>
          <span>–</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
      {/* Scroll to top */}
      {showScrollTop && (
        <div      data-aos="fade-up"
          data-aos-offset="50" className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-br from-orange-500 to-purple-600 p-3 w-10 h-10 flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            ↑
          </button>
        </div>
      )}
    </footer>
  )
}

export default Footer
