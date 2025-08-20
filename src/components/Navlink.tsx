"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlMenu } from "react-icons/sl";
import Image from "next/image";

const MobileMenuBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 400,
        });
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) setActiveSubMenu(null);
    };

    // Navigation items matching the navbar
    const navItems = [
        {
            label: 'ABOUT',
            items: [
                { label: 'Our Story', href: '/our-story', description: 'Learn about our journey' },
                { label: 'Our Team', href: '/team', description: 'Meet our experts' },
                { label: 'Careers', href: '/careers', description: 'Join our team' },
                { label: 'Press', href: '/press', description: 'Media resources' }
            ]
        },
        {
            label: 'FEATURES',
            items: [
                { label: 'AI Solutions', href: '/ai-solutions', description: 'Cutting-edge AI technology' },
                { label: 'Machine Learning', href: '/ml', description: 'Advanced ML capabilities' },
                { label: 'Data Analytics', href: '/analytics', description: 'Data-driven insights' },
                { label: 'Custom Development', href: '/development', description: 'Tailored solutions' }
            ]
        },
        {
            label: 'PAGES',
            items: [
                { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
                { label: 'Blog', href: '/blog', description: 'Latest insights' },
                { label: 'Resources', href: '/resources', description: 'Helpful materials' },
                { label: 'Support', href: '/support', description: 'Get help' }
            ]
        }
    ];
 
    return (
        <div className="md:hidden">
            {/* Menu Button / Close Button */}
            <div onClick={toggleMenu} className="cursor-pointer">
                {isMenuOpen ? (
                    <AiOutlineClose className="h-[22px] w-[22px]" />
                ) : (
                    <SlMenu className="h-[22px] w-[22px]" />
                )}
            </div>

            {/* Main Menu Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 h-[95%] w-full mt-16 text-white">
                    <div
                        className={`relative w-full bg-omniv-dark border border-omniv-primary/30 p-4 h-full flex flex-col items-start overflow-hidden transition-transform duration-500 ${activeSubMenu ? "-translate-x-full" : "translate-x-0"
                            }`}
                    >
                        {/* HOME Link */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                        >
                            <Link href="/" className="text-[16px] font-medium py-[10px] text-omniv-primary hover:text-omniv-secondary transition-colors">
                                HOME
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="600" className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>

                        {/* Navigation Items */}
                        {navItems.map((item, index) => (
                            <div key={item.label} className="flex items-center justify-between w-full">
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 100}
                                    onClick={() => setActiveSubMenu(item.label)}
                                    className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                                >
                                    <span className="text-[16px] font-medium py-[10px] text-white hover:text-omniv-primary transition-colors">
                                        {item.label}
                                    </span>
                                    <Image
                                        src="/icons/arrow-right.svg"
                                        alt="arrow"
                                        width={100}
                                        height={100}
                                        className="w-[18px] h-[18px] font-extralight filter invert"
                                    />
                                </div>
                                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100} className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                            </div>
                        ))}

                        {/* CONTACT Link */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={400}
                            className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                        >
                            <Link href="/contact" className="text-[16px] font-medium py-[10px] text-white hover:text-omniv-primary transition-colors">
                                CONTACT
                            </Link>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay={400} className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>

                        {/* GET STARTED Button */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={500}
                            className="w-full mt-4"
                        >
                            <button className="w-full bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-omniv-primary/90 hover:to-omniv-secondary/90 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                                GET STARTED
                            </button>
                        </div>

                        {/* Brain Icon - Right Side */}
                        <div className="absolute bottom-6 right-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-omniv-primary to-omniv-secondary rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <svg 
                                    className="w-6 h-6 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Submenu Drawer */}
                    <div
                        className={`absolute inset-0 bg-omniv-dark border border-omniv-primary/30 p-4 h-full flex flex-col items-start overflow-hidden transition-transform duration-500 ${activeSubMenu ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        {/* Back Button */}
                        <div className="flex items-center cursor-pointer mb-4 hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300" onClick={() => setActiveSubMenu(null)}>
                            <Image
                                src="/icons/arrow-back.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className="w-[22px] h-[22px] font-extralight filter invert"
                            />
                            <span className="ml-2 text-white text-sm">Back</span>
                        </div>

                        {/* Submenu Content */}
                        {activeSubMenu && (
                            <>
                                <h1 className="py-4 text-[19px] font-semibold uppercase text-omniv-primary">{activeSubMenu}</h1>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                
                                {navItems.find(item => item.label === activeSubMenu)?.items.map((subItem) => (
                                    <div key={subItem.label}>
                                        <Link 
                                            href={subItem.href} 
                                            className="block text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2"
                                            onClick={() => setActiveSubMenu(null)}
                                        >
                                            <div className="font-medium text-white transition-colors duration-200">{subItem.label}</div>
                                            {subItem.description && (
                                                <div className="text-omniv-muted text-xs mt-1 transition-colors duration-200">{subItem.description}</div>
                                            )}
                                        </Link>
                                        <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenuBar;