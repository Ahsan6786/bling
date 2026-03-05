"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/navbar";

const StoryPage = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-32 pb-20 bg-[var(--bg-color)] min-h-screen"
        >

            <section className="pt-40 pb-20 md:pt-60 md:pb-40 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                        >
                            <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold mb-8 block text-[var(--accent-color)]">Our Story</span>
                            <h1 className="text-5xl md:text-8xl font-light tracking-tight uppercase leading-[0.9] mb-12 text-[var(--text-color)]">
                                Art <br /><span className="italic font-serif">meeting</span> <br />Legacy
                            </h1>
                            <div className="space-y-8 text-sm md:text-lg text-[var(--text-color)] opacity-60 leading-relaxed max-w-lg font-light tracking-wide">
                                <p>
                                    Blingish began as a single whisper—a desire to create jewelry that doesn't just rest on the skin, but resonates with the soul. We blend the raw honesty of hand-crafted metals with the refined precision of modern design.
                                </p>
                                <p>
                                    Our collection—from diamond engagement rings to artisanal gold necklaces—is a testament to the beauty of hand-forged luxury, designed to be worn today and cherished forever.
                                </p>
                                <p>
                                    Discover a curated world of high-craftsmanship. Each piece is hand-forged in India, carrying the legacy of artisanal excellence into a modern aesthetic.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5 }}
                            className="aspect-[3/4] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-[var(--border-color)]"
                        >
                            <img
                                src="/images/lifestyle_chain.webp"
                                alt="Blingish Artisanship"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = "/images/meaning_jewelry.webp";
                                }}
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-40 p-12 md:p-24 bg-[var(--card-bg)] rounded-[3rem] border border-[var(--border-color)] text-center"
                    >
                        <p className="text-2xl md:text-4xl font-serif italic mb-12 leading-relaxed text-[var(--text-color)] opacity-80 max-w-4xl mx-auto">
                            "Jewellery should capture more than beauty—it should hold a story, a moment, a feeling."
                        </p>
                        <div className="flex flex-col gap-2">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--accent-color)]">Creative Visionary</span>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--text-color)] opacity-40 font-light italic">Director, Blingish House</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer className="py-20 bg-[var(--card-bg-secondary)] border-t border-[var(--border-color)] text-center px-6">
                <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 font-light">
                    &copy; {new Date().getFullYear()} Blingish Jewelry. All Rights Reserved.
                </p>
            </footer>
        </motion.main>
    );
};

export default StoryPage;
