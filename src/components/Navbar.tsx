"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import MobileMenuBar from './Navlink';
import { Bungee } from 'next/font/google';
import Image from 'next/image';

const bungee = Bungee({
    subsets: ['latin'],
    weight: '400',
})

interface DropdownItem {
    label: string;
    href: string;
    description?: string;
}

interface NavItem {
    label: string;
    href?: string;
    dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    console.log(hoveredDropdown)
    const navRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Sample dropdown data
    const navItems: NavItem[] = [
        {
            label: 'ABOUT',
            dropdown: [
                { label: 'Our Story', href: '/our-story', description: 'Learn about our journey' },
                { label: 'Our Team', href: '/team', description: 'Meet our experts' },
                { label: 'Careers', href: '/careers', description: 'Join our team' },
                { label: 'Press', href: '/press', description: 'Media resources' }
            ]
        },
        {
            label: 'FEATURES',
            dropdown: [
                { label: 'AI Solutions', href: '/ai-solutions', description: 'Cutting-edge AI technology' },
                { label: 'Machine Learning', href: '/ml', description: 'Advanced ML capabilities' },
                { label: 'Data Analytics', href: '/analytics', description: 'Data-driven insights' },
                { label: 'Custom Development', href: '/development', description: 'Tailored solutions' }
            ]
        },
        {
            label: 'PAGES',
            dropdown: [
                { label: 'Case Studies', href: '/case-studies', description: 'Success stories' },
                { label: 'Blog', href: '/blog', description: 'Latest insights' },
                { label: 'Resources', href: '/resources', description: 'Helpful materials' },
                { label: 'Support', href: '/support', description: 'Get help' }
            ]
        }
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
                setHoveredDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Clean up hover timeout on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeoutRef.current) {
                clearTimeout(hoverTimeoutRef.current);
            }
        };
    }, []);

    // Handle dropdown hover
    const handleDropdownHover = (itemLabel: string) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setHoveredDropdown(itemLabel);
        setActiveDropdown(itemLabel);
    };

    // Handle dropdown leave
    const handleDropdownLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredDropdown(null);
            setActiveDropdown(null);
        }, 150); // 150ms delay before closing
    };

    // Handle dropdown toggle
    const toggleDropdown = (itemLabel: string) => {
        setActiveDropdown(activeDropdown === itemLabel ? null : itemLabel);
    };


    return (
        <nav className="bg-omniv-dark border-b border-omniv" ref={navRef}>
            <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-dropdown {
          animation: dropdown 0.2s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
            <div className="sm:pr-0 pr-4 sm:px-6 lg:px-8 xl:px-20 sm:py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-3">

                        <span className={`${bungee.className} text-2xl font-bold text-white`}>
                            <Link href={"/"}><Image src="/images/unitzero.png" alt="logo" width={200} height={200} className='h-full sm:w-[200px] w-[100px]'/></Link>

                        </span>
                    </div>

                    <div className='flex items-center lg:space-x-4 '>
                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-baseline lg:space-x-4">
                                <div className="flex items-center text-omniv-primary hover:text-omniv-secondary px-3 py-2 text-sm font-bold transition-all duration-200 group">HOME</div>
                                {navItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => handleDropdownHover(item.label)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center text-white hover:text-omniv-primary px-3 py-2 text-sm font-bold transition-all duration-200 group"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`ml-1 h-4 w-4 transition-all duration-300 ease-in-out ${activeDropdown === item.label ? 'rotate-180 text-omniv-primary' : 'group-hover:text-omniv-primary'
                                                    }`}
                                            />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item.label && item.dropdown && (
                                            <div className="absolute top-full left-0 mt-2 w-72 bg-omniv-card rounded-lg shadow-lg border border-omniv z-50 opacity-0 translate-y-2 animate-dropdown">
                                                <div className="py-2">
                                                    {item.dropdown.map((dropdownItem, index) => (
                                                        <a
                                                            key={dropdownItem.label}
                                                            href={dropdownItem.href}
                                                            className="block px-4 py-3 text-sm text-white hover:bg-omniv-muted hover:text-omniv-primary transition-all duration-200 transform hover:translate-x-1"
                                                            onClick={() => setActiveDropdown(null)}
                                                            style={{
                                                                animationDelay: `${index * 50}ms`,
                                                                animationFillMode: 'both'
                                                            }}
                                                        >
                                                            <div className="font-medium text-white transition-colors duration-200">{dropdownItem.label}</div>
                                                            {dropdownItem.description && (
                                                                <div className="text-omniv-muted text-xs mt-1 transition-colors duration-200">{dropdownItem.description}</div>
                                                            )}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right side buttons */}
                        <div className="hidden md:flex items-center lg:space-x-4">
                            <Link
                                href="/contact"
                                className="text-white hover:text-omniv-primary px-3 py-2 text-sm font-bold transition-colors duration-200"
                            >
                                CONTACT
                            </Link>
                            <button className="bg-gradient-to-r from-[#ff6b35] to-[#00d4aa] text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-omniv-primary/90 hover:to-omniv-secondary/90 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                                GET STARTED
                            </button>
                        </div>
                    </div>
                    <MobileMenuBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;