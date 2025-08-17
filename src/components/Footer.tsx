'use client'

import React, { useEffect, useRef } from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
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

  return (
    <footer ref={footerRef} className="relative bg-omniv-dark text-white sm:px-6 py-12 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-66 bg-omniv-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-66 bg-omniv-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8">
        {/* Left Block */}
        <div>
          <div className="mb-4">
            <div className="bg-gradient-to-r from-omniv-primary to-omniv-secondary w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/images/unitzero.png"
                  alt="UnitZero Logo"
                  width={80}
                  height={80}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
          <p className="text-sm mb-2 text-omniv-muted">Embrace the future of artificial intelligence!</p>
          <a href="mailto:support@unitzero.com" className="text-omniv-primary text-sm block">
            support@unitzero.com
          </a>
          <p className="text-sm mt-1 text-omniv-muted">+2 011 6114 5741</p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-3 text-white">About</h4>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">About Us</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Leadership Team</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Services</h4>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Model Development</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Integration solutions</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Strategy Consulting</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Machine Learning</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Data Monitoring</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Neural Network</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="space-y-2 text-md">
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">News & Media</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Pricing & Plans</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">How it Works</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Key Features</a></li>
            <li><a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Testimonials</a></li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
          <p className="text-sm mb-4 text-omniv-muted">subscribe to our newsletter and receive the latest news on products, services & more.</p>
          <div className="relative w-full max-w-xl">
            <input
              type="email"
              placeholder="Type your email"
              className="bg-omniv-card border border-omniv text-white text-md outline-none w-full px-4 pr-10 py-2 h-14 rounded-lg focus:border-omniv-primary transition-colors"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
              <FiArrowUpRight className="text-xl cursor-pointer bg-omniv-primary hover:bg-omniv-secondary text-white p-2 rounded-full transition-colors" />
            </span>
          </div>

          <p className="text-xs text-omniv-muted mt-2">By subscribing, you accept the Privacy Policy</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaXTwitter /></a>
            <a href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-omniv w-[90%] mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-omniv-muted">
        <p>©2025 UNITZERO, All Rights Reserved. With Love by <a href="https://unitzero.com" className="text-omniv-primary hover:text-omniv-secondary transition-colors">unitzero.tech</a></p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-omniv-primary transition-colors">Terms & Conditions</a>
          <span>–</span>
          <a href="#" className="hover:text-omniv-primary transition-colors">Privacy Policy</a>
          <span>–</span>
          <a href="#" className="hover:text-omniv-primary transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
