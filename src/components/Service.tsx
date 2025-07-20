"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const services = [
  {
    title: 'AI Training and Workshops',
    description: 'Integrating intelligent data analytics to help businesses gain deeper insights...',
    bgColor: 'bg-[#D5EAD6]',
    bubbleColor: 'bg-[#AFDBB1]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service4.png'
  },
  {
    title: 'Robotic Process Automation',
    description: 'Integrating intelligent data analytics to help businesses gain deeper insights...',
    bgColor: 'bg-[#FFF0CE]',
    bubbleColor: 'bg-[#F9E0AC]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-srv-build.png'
  },
  {
    title: 'Data Analytics & Insights',
    description: 'Integrating intelligent data analytics to help businesses gain deeper insights...',
    bgColor: 'bg-[#F5D9D9]',
    bubbleColor: 'bg-[#F2C6C6]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service3.png'
  },
  {
    title: 'Machine Learning Solutions',
    description: 'Integrating intelligent data analytics to help businesses gain deeper insights...',
    bgColor: 'bg-[#B5DEE1]',
    bubbleColor: 'bg-[#91CFD3]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service3.png'
  },
  {
    title: 'Custom AI Model Development',
    description: 'Our company creates intelligent models of AI tech that utilize the power of advanced algorithms...',
    bgColor: 'bg-[#FFE7D4]',
    bubbleColor: 'bg-[#FBCFAC]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service1.png'
  },
  {
    title: 'Neural Network Integration',
    description: 'Leverage the power of AI to build scalable artificial and biological neural networks...',
    bgColor: 'bg-[#F5D9D9]',
    bubbleColor: 'bg-[#F2C6C6]',
    icon: 'https://demo.casethemes.net/aimo/wp-content/uploads/2025/03/img-service3.png'
  }
];

export default function ServicesSection() {


  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="xl:px-40 md:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Services Designed To Meet<br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              All Your Needs
            </span>
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
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
              640: {
                slidesPerView: 1,
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
                <div className={`relative ${service.bgColor} p-8 rounded-2xl h-[450px] flex flex-col justify-between hover:shadow-2xl group overflow-hidden cursor-grab active:cursor-grabbing`}>
                  {/* Floating bubble on right top */}
                  <div className={`${service.bubbleColor} cards z-0`}></div>

                  {/* 3D Icon */}
                  <div className="flex justify-end">
                    <div className={`w-32 h-32 mt-4 mr-4 flex items-center justify-center text-3xl transform rotate-3 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}>

                      {/* Animated icon */}
                      <span className="relative z-10 transform group-hover:saturate-100 group-hover:rotate-12 transition-all duration-300"><Image src={service.icon} alt='icon' width={400} height={400} /></span>


                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow mt-14 z-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-1 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <ChevronLeft size={20} />
          </button>

          <button className="swiper-button-next-custom absolute right-1 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Get custom solutions for your business that help you leverage AI and
            Automation for the processes.{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline font-semibold transition-colors">
              Talk to an expert!
            </a>
          </p>
        </div>
      </div>


    </section>
  );
}