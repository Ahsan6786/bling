"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/cart-context";
import { ShoppingBag, Menu, X, Instagram, Facebook, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
    <img
        src="/images/blingish/whats.png"
        alt="WhatsApp support for Blingish jewellery"
        width={size}
        height={size}
        className={className}
    />
);

const Navbar = () => {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart } = useCart();

    const isHomePage = pathname === "/";
    const isDark = theme === "dark";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);

        // Prevent scroll when menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Collection", href: "/collection" },
        { name: "Story", href: "/#story" },
        { name: "Reviews", href: "/reviews" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/#faq" },
    ];

    const shouldShowSolid = isScrolled || !isHomePage;

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${shouldShowSolid
                ? "py-4 bg-[var(--bg-color)]/95 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,0,0,0.05)] border-b border-[var(--border-color)] text-[var(--text-color)]"
                : "py-8 bg-transparent text-white"
                }`}
        >
            <nav className="container mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Left Side: Brand Identity */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex-1 hidden md:flex"
                >
                    <Link href="/" className="group flex flex-col">
                        <span className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase group-hover:text-[var(--accent-color)] transition-colors duration-500">
                            BLINGISH
                        </span>
                        <span className="text-[10px] tracking-[0.4em] uppercase opacity-60 mt-0.5 font-light">Fine Jewelry</span>
                    </Link>
                </motion.div>

                {/* Mobile/Small Screen Center Brand */}
                <div className="md:hidden flex-shrink-0">
                    <Link href="/" className="text-xl font-bold tracking-[0.3em] uppercase">
                        BLINGISH
                    </Link>
                </div>

                {/* Right Side: Navigation & Actions */}
                <div className="flex-1 flex justify-end items-center gap-8 md:gap-12">
                    <ul className="hidden md:flex gap-8 lg:gap-12">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-sm uppercase tracking-[0.2em] font-bold hover:text-[var(--accent-color)] transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-color)] transition-all duration-500 group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4 md:gap-8">
                        {/* Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={toggleTheme}
                            className="p-2 transition-colors duration-500 rounded-full hover:bg-[var(--text-color)]/10"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <Sun size={20} className="text-[var(--accent-color)]" />
                            ) : (
                                <Moon size={20} className={shouldShowSolid ? "text-[var(--text-color)]" : "text-white"} />
                            )}
                        </motion.button>

                        {/* Desktop WhatsApp Link */}
                        <a
                            href="https://wa.me/919546243078"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block transition-transform hover:scale-110"
                        >
                            <WhatsAppIcon size={22} />
                        </a>

                        <Link
                            href="/cart"
                            className="relative group p-1"
                        >
                            <ShoppingBag size={24} className="group-hover:text-[var(--accent-color)] transition-colors stroke-[1.5px]" />
                            <AnimatePresence>
                                {cart.length > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -top-1 -right-1 bg-[var(--accent-color)] text-white dark:text-black text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm"
                                    >
                                        {cart.length}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-1 relative z-[120] ${isMobileMenuOpen ? "text-black dark:text-white" : ""}`}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fixed Mobile Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[var(--bg-color)] text-[var(--text-color)] z-[110] flex flex-col pt-24 px-6 pb-8 h-screen w-screen overflow-y-auto"
                    >
                        {/* Mobile Menu Content */}
                        <div className="flex flex-col h-full">
                            <div className="flex justify-between items-center mb-10">
                                <span className="text-[10px] tracking-[0.4em] uppercase opacity-40 font-bold">Menu</span>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={toggleTheme}
                                    className="p-3 bg-[var(--text-color)]/5 rounded-full"
                                >
                                    {isDark ? <Sun size={18} className="text-[var(--accent-color)]" /> : <Moon size={18} />}
                                </motion.button>
                            </div>

                            <ul className="flex flex-col gap-3 border-t border-[var(--border-color)] pt-6">
                                {navLinks.map((link, idx) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-[clamp(1.8rem,7vw,2.5rem)] font-serif italic tracking-tight flex items-center justify-between group py-1"
                                        >
                                            <span className="group-hover:text-[var(--accent-color)] transition-colors">{link.name}</span>
                                            <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[var(--accent-color)]" />
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-auto space-y-8">
                                <div className="p-6 bg-[var(--card-bg)] rounded-[2rem] border border-[var(--border-color)] mb-2 shadow-sm">
                                    <p className="text-[9px] tracking-[0.3em] uppercase opacity-40 mb-3 font-bold text-[var(--accent-color)]">Priority Assistance</p>
                                    <a
                                        href="https://wa.me/919546243078"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-[var(--text-color)] text-[var(--bg-color)] p-4 rounded-xl hover:bg-[var(--accent-color)] dark:hover:text-black transition-all shadow-lg"
                                    >
                                        <WhatsAppIcon size={22} />
                                        <div className="flex flex-col">
                                            <span className="text-base font-bold tracking-tight">Chat on WhatsApp</span>
                                            <span className="text-[9px] uppercase tracking-widest opacity-80">Instant connection to our experts</span>
                                        </div>
                                    </a>
                                </div>

                                <div className="flex justify-between items-center px-4">
                                    <div className="flex gap-6 items-center">
                                        <a href="https://wa.me/919546243078" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                            <WhatsAppIcon size={26} />
                                        </a>
                                        <a href="https://www.instagram.com/blingish_jewels_?igsh=YXUxNjUyemUxZ2x4" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all">
                                            <Instagram size={24} />
                                        </a>
                                        <a href="#" className="text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all">
                                            <Facebook size={24} />
                                        </a>
                                    </div>
                                    <span className="text-[8px] tracking-[0.2em] uppercase opacity-40 font-bold truncate max-w-[140px]">© 2026 Blingish</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
