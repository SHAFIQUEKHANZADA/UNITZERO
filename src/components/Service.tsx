"use client";

import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const services = [
  {
    title: 'AI Workflow Orchestration',
    description:
      'Design seamless AI pipelines that automate decision-making, optimize task flows, and connect every step of your business logic with intelligence.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-primary/20',
    accent: 'omniv-primary',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service1.png'
  },
  {
    title: 'Vector Search & Document Retrieval',
    description:
      'Supercharge your search capabilities with high-performance vector databases, enabling smarter, context-aware document and content retrieval.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-secondary/20',
    accent: 'omniv-secondary',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-srv-build.png'
  },
  {
    title: 'Scriptwriting & Content Generation',
    description:
      'Leverage generative AI to craft blogs, marketing scripts, and branded content—fast, engaging, and tailored to your audience\'s voice.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-primary/20',
    accent: 'omniv-primary',
    icon: '/icons/s3.png'
  },
  {
    title: 'AI Automation & Integration',
    description:
      'Automate repetitive workflows by integrating AI with your tools—from emails to analytics—making operations smarter and faster.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-secondary/20',
    accent: 'omniv-secondary',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service4.png'
  },
  {
    title: 'Voice & Conversational AI',
    description:
      'Build natural, human-like voice and chatbot experiences for customer service, support, and internal tasks using advanced NLP engines.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-primary/20',
    accent: 'omniv-primary',
    icon: '/icons/s5.png'
  },
  {
    title: 'CRM & Marketing Automation',
    description:
      'Drive smarter campaigns with AI-powered CRM solutions—automate outreach, personalize user journeys, and scale your marketing like never before.',
    bgColor: 'bg-omniv-card',
    bubbleColor: 'bg-omniv-secondary/20',
    accent: 'omniv-secondary',
    icon: '/icons/s6.png'
  }
];

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-omniv-dark py-20 px-4 relative overflow-hidden">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-omniv-primary rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-omniv-secondary rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />
      </div>


      <div className="md:px-10 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-omniv-card/50 backdrop-blur-sm rounded-full border border-omniv-primary/30 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Sparkles className="w-5 h-5 text-omniv-primary" />
            <span className="text-sm text-omniv-primary font-medium">AI-Powered Services</span>
          </div>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            Services Designed To Meet<br />
            <span className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] bg-clip-text text-transparent">
              All Your Needs
            </span>
          </h2>
        </div>

        {/* Enhanced Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={18}
            loop={true}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-swiper-dot"></span>`;
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              460: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="pb-40 mb-10"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="px-2 my-10">
                <div 
                  className={`relative ${service.bgColor} p-6 sm:py-6 py-10 rounded-2xl sm:h-[350px] flex flex-col justify-between hover:shadow-2xl group overflow-hidden cursor-grab active:cursor-grabbing border border-omniv hover:border-omniv-primary/50 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Enhanced Floating bubble on right top */}
                  <div 
                    className={`${service.bubbleColor} cards z-0 animate-pulse-glow`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />

                  {/* Enhanced 3D Icon */}
                  <div className="flex justify-end">
                    <div 
                      className={`lg:w-20 lg:h-20 w-32 h-32 mt-3 mr-3 flex items-center justify-center text-3xl transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 relative overflow-hidden hover:scale-110 hover:rotate-0`}
                    >
                      {/* Animated icon */}
                      <span 
                        className="relative z-10 transform group-hover:saturate-100 group-hover:rotate-12 transition-all duration-300 hover:rotate-12 hover:scale-110"
                      >
                        <Image src={service.icon} alt='icon' width={400} height={400} />
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="flex-grow mt-10 z-10">
                    <h3 
                      className="sm:text-md font-bold text-white mb-4 leading-tight hover:text-omniv-primary transition-colors duration-300"
                    >
                      {service.title}
                    </h3>
                    <p className="text-omniv-muted sm:text-[12px] leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Enhanced Hover Effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-omniv-primary/5 to-omniv-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Custom Navigation Buttons */}
          <button 
            className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-omniv-card/80 backdrop-blur-sm border border-omniv rounded-full flex items-center justify-center text-white hover:bg-omniv-primary hover:border-omniv-primary transition-all duration-300 hover:scale-110 hover:-translate-x-2"
          >
            <ChevronLeft size={20} />
          </button>

          <button 
            className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-omniv-card/80 backdrop-blur-sm border border-omniv rounded-full flex items-center justify-center text-white hover:bg-omniv-primary hover:border-omniv-primary transition-all duration-300 hover:scale-110 hover:translate-x-2"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Enhanced Bottom Text */}
        <div 
          className="text-center mt-16 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-omniv-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Get custom solutions for your business that help you leverage AI and
            Automation for the processes.{' '}
            <a 
              href="#" 
              className="text-omniv-primary hover:text-omniv-secondary underline font-semibold transition-colors hover:scale-105 inline-block"
            >
              Talk to an expert!
            </a>
          </p>
        </div>
      </div>

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

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 15s ease-in-out infinite;
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
    </section>
  );
}