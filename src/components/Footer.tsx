'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import Image from 'next/image'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { BsSend } from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  const footerRef = useRef(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setIsLoading(true)
    setMessage('')
    setIsSuccess(false)

    try {
      const response = await fetch('https://n8n.unitzero.tech:5678/webhook/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(data.message || 'Thanks for subscribing!')
        setIsSuccess(true)
        setEmail('') // Reset form
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.log(error)
      setMessage('Network error. Please check your connection and try again.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer ref={footerRef} className="relative bg-omniv-dark text-white sm:px-6 py-12 overflow-hidden">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-66 bg-omniv-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-66 bg-omniv-secondary rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8">
        {/* Left Block */}
        <div>
          <div className="mb-4">      
              <div className="w-[200px] h-full">
                <Image
                  src="/images/unitzerof.png"
                  alt="UnitZero Logo"
                  width={150}
                  height={80}
                  className="max-w-full"
                />
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
            {/* <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">About Us</Link></li> */}
            <li><Link href="/team" className="text-omniv-muted hover:text-omniv-primary transition-colors">Our Team</Link></li>
            <li><Link href="/our-story" className="text-omniv-muted hover:text-omniv-primary transition-colors">Our Story</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Services</h4>
          <ul className="space-y-2 text-md">
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Website Chatbot</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Voice Receptionist </Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Mini CRM + Lead Tracker</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Contract Automation</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Confirmation Email & Notification Engine</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Ticketing Workflow</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Multi-Channel Lead Capture Hub</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">AI Follow-Up Sequences</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Real-Time Lead Qualification Bot</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Resources</h4>
          <ul className="space-y-2 text-md">
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">News & Media</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Pricing & Plans</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">How it Works</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Key Features</Link></li>
            <li><Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors">Testimonials</Link></li>
          </ul>
        </div>

        {/* Stay Updated */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
          <p className="text-sm mb-4 text-omniv-muted">subscribe to our newsletter and receive the latest news on products, services & more.</p>
          
          <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Type your email"
              required
              disabled={isLoading}
              className="bg-omniv-card border border-omniv text-white text-md outline-none w-full px-4 pr-16 py-2 h-16 rounded-lg focus:border-omniv-primary transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !email.trim()}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <BsSend className={`text-4xl bg-omniv-primary hover:bg-omniv-secondary text-white p-2 rounded-full transition-colors ${isLoading ? 'animate-pulse' : ''}`} />
            </button>
          </form>

          {/* Success/Error Message */}
          {message && (
            <div className={`mt-3 p-3 rounded-lg text-sm ${
              isSuccess 
                ? 'bg-green-900/20 border border-green-500/30 text-green-400' 
                : 'bg-red-900/20 border border-red-500/30 text-red-400'
            }`}>
              {message}
            </div>
          )}

          <p className="text-xs text-omniv-muted mt-2">By subscribing, you accept the Privacy Policy</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaFacebookF /></Link>
            <Link href="#" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaXTwitter /></Link>
            <Link href="https://www.linkedin.com/company/unitzero-pvtltd/" target="_blank" className="text-omniv-muted hover:text-omniv-primary transition-colors"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-omniv w-[90%] mx-auto mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-omniv-muted">
        <p>©2025 UNITZERO, All Rights Reserved. With Love by <a href="https://unitzero.com" className="text-omniv-primary hover:text-omniv-secondary transition-colors">unitzero.tech</a></p>
       
      </div>
    </footer>
  )
}

export default Footer
