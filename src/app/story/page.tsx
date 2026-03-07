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
                        className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <div className="p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] group hover:border-[var(--accent-color)]/30 transition-all duration-700">
                            <div className="w-12 h-12 bg-[var(--accent-color)]/10 rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Certified Purity</h3>
                            <p className="text-xs text-[var(--text-color)] opacity-50 leading-relaxed font-light">
                                Every piece is rigorously tested for material purity and skin-friendliness, ensuring high-quality hypoallergenic wear.
                            </p>
                        </div>

                        <div className="p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] group hover:border-[var(--accent-color)]/30 transition-all duration-700">
                            <div className="w-12 h-12 bg-[var(--accent-color)]/10 rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16 10-4 4-2-2" /></svg>
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Artisanal Ethos</h3>
                            <p className="text-xs text-[var(--text-color)] opacity-50 leading-relaxed font-light">
                                We work directly with master craftsmen in Bihar, preserving traditional heritage while providing fair, ethical wages.
                            </p>
                        </div>

                        <div className="p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] group hover:border-[var(--accent-color)]/30 transition-all duration-700">
                            <div className="w-12 h-12 bg-[var(--accent-color)]/10 rounded-2xl flex items-center justify-center mb-8 text-[var(--accent-color)] group-hover:scale-110 transition-transform duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Lifetime Promise</h3>
                            <p className="text-xs text-[var(--text-color)] opacity-50 leading-relaxed font-light">
                                Our commitment doesn't end at delivery. We offer guidance on jewelry care to ensure your pieces remain radiant for a lifetime.
                            </p>
                        </div>
                    </motion.div>

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
