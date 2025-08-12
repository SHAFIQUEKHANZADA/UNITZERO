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
                        {/* Main Menu */}
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            onClick={() => setActiveSubMenu("SHOP")}
                            className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                        >
                            <Link href="#" className="text-[16px] font-medium py-[10px] text-white hover:text-omniv-primary transition-colors">
                                SHOP
                            </Link>
                            <Image
                                src="/icons/arrow-right.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className="w-[18px] h-[18px] font-extralight filter invert"
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="600" className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            onClick={() => setActiveSubMenu("CORE_COLLECTION")}
                            className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                        >
                            <Link href="#" className="text-[16px] font-medium py-[10px] text-white hover:text-omniv-primary transition-colors">
                                CORE COLLECTION
                            </Link>
                            <Image
                                src="/icons/arrow-right.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className="w-[18px] h-[18px] font-extralight filter invert"
                            />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="600" className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="600"
                            onClick={() => setActiveSubMenu("ABOUT_ROBIZ")}
                            className="flex items-center justify-between w-full hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300"
                        >
                            <Link href="#" className="text-[16px] font-medium py-[10px] text-white hover:text-omniv-primary transition-colors">
                                ABOUT UNITZERO
                            </Link>
                            <Image
                                src="/icons/arrow-right.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className="w-[18px] h-[18px] font-extralight filter invert"
                            />
                        </div>
                    </div>

                    {/* Submenu Drawer */}
                    <div
                        className={`absolute inset-0 bg-omniv-dark border border-omniv-primary/30 p-4 h-full flex flex-col items-start overflow-hidden transition-transform duration-500 ${activeSubMenu ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex items-center cursor-pointer mb-4 hover:bg-omniv-card/50 rounded-lg p-2 transition-all duration-300" onClick={() => setActiveSubMenu(null)}>
                            <Image
                                src="/icons/arrow-back.svg"
                                alt="arrow"
                                width={100}
                                height={100}
                                className="w-[22px] h-[22px] font-extralight filter invert"
                            />
                        </div>
                        {activeSubMenu === "SHOP" && (
                            <>
                                <h1 className="py-4 text-[19px] font-semibold uppercase text-omniv-primary">SHOP</h1>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/men" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    MEN&apos;s
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/women" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    WOMEN&apos;s
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/shirts" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    SHIRT
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/pants" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    PANTS
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/products" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    ALL
                                </Link>
                            </>
                        )}
                        {activeSubMenu === "CORE_COLLECTION" && (
                            <>
                                <h1 className="py-4 text-[19px] font-semibold uppercase text-omniv-primary">CORE COLLECTION</h1>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/products" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    ALL PRODUCTS
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/shirts" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    SHIRTS
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/dress" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    DRESS
                                </Link>
                            </>
                        )}
                        {activeSubMenu === "ABOUT_ROBIZ" && (
                            <>
                                <h1 className="py-4 text-[19px] font-semibold uppercase text-omniv-primary">ABOUT UNITZERO</h1>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/press" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    PRESS
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/lookbook" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    LOOKBOOK
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/about-us" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    ABOUT US
                                </Link>
                                <div className="w-full h-[0.1px] bg-omniv-primary/30 my-2"></div>
                                <Link href="/contact-us" className="text-[16px] font-medium py-2 text-white hover:text-omniv-primary transition-colors hover:bg-omniv-card/50 rounded-lg px-2 py-1">
                                    CONTACT US
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileMenuBar;