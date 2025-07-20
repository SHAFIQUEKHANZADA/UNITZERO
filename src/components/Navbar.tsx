"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    console.log(hoveredDropdown)
    const navRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Sample dropdown data
    const navItems: NavItem[] = [
        {
            label: 'Home',
            dropdown: [
                { label: 'Dashboard', href: '/dashboard', description: 'Main dashboard overview' },
                { label: 'Analytics', href: '/analytics', description: 'View your analytics' },
                { label: 'Reports', href: '/reports', description: 'Generate reports' },
                { label: 'Settings', href: '/settings', description: 'Configure your account' }
            ]
        },
        {
            label: 'Pages',
            dropdown: [
                { label: 'About Us', href: '/about', description: 'Learn about our company' },
                { label: 'Our Team', href: '/team', description: 'Meet our team members' },
                { label: 'Careers', href: '/careers', description: 'Join our team' },
                { label: 'Press', href: '/press', description: 'Media resources' },
                { label: 'Case Studies', href: '/case-studies', description: 'Success stories' }
            ]
        },
        {
            label: 'Services',
            dropdown: [
                { label: 'AI Consulting', href: '/ai-consulting', description: 'Expert AI guidance' },
                { label: 'Machine Learning', href: '/ml', description: 'ML solutions' },
                { label: 'Data Analytics', href: '/analytics', description: 'Data-driven insights' },
                { label: 'Custom Development', href: '/development', description: 'Tailored solutions' },
                { label: 'Training & Support', href: '/training', description: 'Learn and grow' }
            ]
        },
        {
            label: 'Blog',
            dropdown: [
                { label: 'Latest Posts', href: '/blog', description: 'Recent articles' },
                { label: 'AI News', href: '/blog/ai-news', description: 'Industry updates' },
                { label: 'Tutorials', href: '/blog/tutorials', description: 'Step-by-step guides' },
                { label: 'Case Studies', href: '/blog/case-studies', description: 'Real-world examples' }
            ]
        },
        {
            label: 'Shop',
            dropdown: [
                { label: 'AI Tools', href: '/shop/tools', description: 'Powerful AI software' },
                { label: 'Templates', href: '/shop/templates', description: 'Ready-to-use templates' },
                { label: 'Courses', href: '/shop/courses', description: 'Online learning' },
                { label: 'Consulting', href: '/shop/consulting', description: 'Professional services' }
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

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white" ref={navRef}>
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
            <div className="px-4 sm:px-6 lg:px-8 xl:px-10 sm:py-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Image src={"/images/logo.png"} alt='logo' width={100} height={100} />

                    <div className='flex items-center space-x-4 '>
                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <div
                                        key={item.label}
                                        className="relative"
                                        onMouseEnter={() => handleDropdownHover(item.label)}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold transition-all duration-200 group"
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`ml-1 h-4 w-4 transition-all duration-300 ease-in-out ${activeDropdown === item.label ? 'rotate-180 text-gray-900' : 'group-hover:text-gray-900'
                                                    }`}
                                            />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {activeDropdown === item.label && item.dropdown && (
                                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 opacity-0 translate-y-2 animate-dropdown">
                                                <div className="py-2">
                                                    {item.dropdown.map((dropdownItem, index) => (
                                                        <a
                                                            key={dropdownItem.label}
                                                            href={dropdownItem.href}
                                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 transform hover:translate-x-1"
                                                            onClick={() => setActiveDropdown(null)}
                                                            style={{
                                                                animationDelay: `${index * 50}ms`,
                                                                animationFillMode: 'both'
                                                            }}
                                                        >
                                                            <div className="font-medium text-gray-900 transition-colors duration-200">{dropdownItem.label}</div>
                                                            {dropdownItem.description && (
                                                                <div className="text-gray-500 text-xs mt-1 transition-colors duration-200">{dropdownItem.description}</div>
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
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/contact"
                                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-bold transition-colors duration-200"
                            >
                                Contact Us
                            </Link>
                            <button className="text-gray-700 hover:text-gray-900 p-2 transition-all duration-200 transform hover:scale-110">
                                <Search className="h-5 w-5" />
                            </button>
                            <button className="bg-[#222222] text-white px-4 py-3 rounded-3xl text-sm font-bold hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                                Get Started
                            </button>
                        </div>

                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-700 hover:text-gray-900 p-2 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden animate-fadeInUp">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                            {navItems.map((item) => (
                                <div key={item.label}>
                                    <button
                                        onClick={() => toggleDropdown(item.label)}
                                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 text-base font-medium transition-all duration-200"
                                    >
                                        {item.label}
                                        <ChevronDown
                                            className={`h-4 w-4 transition-all duration-300 ease-in-out ${activeDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Mobile Dropdown */}
                                    {activeDropdown === item.label && item.dropdown && (
                                        <div className="pl-6 space-y-1 animate-fadeInUp">
                                            {item.dropdown.map((dropdownItem, index) => (
                                                <a
                                                    key={dropdownItem.label}
                                                    href={dropdownItem.href}
                                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1"
                                                    onClick={() => {
                                                        setActiveDropdown(null);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                    style={{
                                                        animationDelay: `${index * 50}ms`,
                                                        animationFillMode: 'both'
                                                    }}
                                                >
                                                    {dropdownItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Contact and Get Started */}
                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                <a
                                    href="/contact"
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:translate-x-1"
                                >
                                    Contact Us
                                </a>
                                <button className="w-full bg-black text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;