"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Instagram } from "lucide-react";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 250]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

    return (
        <section className="relative h-screen w-full flex items-end justify-center overflow-hidden bg-[#0a0a0a] pb-32 md:pb-48">

            {/* Background Wrapper */}
            <motion.div
                style={{ y: y1, opacity, scale }}
                className="absolute inset-0 z-0"
            >

                {/* 🔥 Desktop & Mobile Floral Background */}
                <div
                    className="absolute inset-0 bg-[url('/images/blingish/floral_hero.png')] bg-cover bg-center"
                    style={{ filter: "contrast(1.05) brightness(0.85)" }}
                />

                {/* Animated Floating Petals Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                x: 0,
                                y: 100,
                                rotate: 0
                            }}
                            animate={{
                                opacity: [0, 0.4, 0],
                                x: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                                y: [-100, -1000],
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 20
                            }}
                            className="absolute bottom-0 left-1/2 w-4 h-4 bg-[var(--accent-color)]/20 rounded-full blur-sm"
                            style={{
                                width: Math.random() * 20 + 5 + "px",
                                height: Math.random() * 20 + 5 + "px",
                            }}
                        />
                    ))}
                </div>

            </motion.div>

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 z-0" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                <span className="sr-only">
                    Blingish: Premium Handcrafted Jewelry India, Diamond Rings, Gold Necklaces
                </span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col gap-6 mb-12"
                >
                    <span className="text-[42px] md:text-[84px] lg:text-[110px] font-serif italic tracking-[0.05em] leading-[1.1] md:leading-[1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Shine <span className="not-italic">Bright</span>
                    </span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 1.2, duration: 2 }}
                        className="text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-[var(--accent-color)] dark:text-[var(--accent-color)] filter brightness-150"
                    >
                        In Our Botanical Garden
                    </motion.span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href="/collection"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 md:px-14 md:py-6 bg-white rounded-full overflow-hidden transition-all duration-700 shadow-2xl hover:shadow-white/20"
                    >
                        <span className="relative z-10 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold text-[#1a1a1a] group-hover:text-white transition-colors duration-700">
                            Explore the Collection
                        </span>
                        <div className="absolute inset-0 bg-brand-maroon translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                    </Link>

                    <a
                        href="https://www.instagram.com/blingish_jewels_?igsh=YXUxNjUyemUxZ2x4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-6 border border-white/20 rounded-full overflow-hidden transition-all duration-700 hover:border-brand-maroon/60 backdrop-blur-sm"
                    >
                        <span className="relative z-10 text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold flex items-center gap-3">
                            <Instagram size={16} className="text-white transition-colors" />
                            <span className="opacity-80 group-hover:opacity-100">
                                @blingish_jewels_
                            </span>
                        </span>
                        <div className="absolute inset-0 bg-brand-maroon/40 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[9px] tracking-[0.4em] uppercase text-white/50 font-medium">
                    Scroll
                </span>
                <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>

        </section>
    );
};

export default Hero;