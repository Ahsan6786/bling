"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Story = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0.3, 0.6], [100, 0]);

    return (
        <section id="story" className="py-20 md:py-40 bg-white dark:bg-[#f8f4f0] overflow-hidden transition-colors duration-1000">
            <div className="container mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
                >
                    <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold mb-8 block text-[#8B4A3A]">Our Story</span>
                    <h2 className="text-4xl md:text-8xl font-light tracking-tight uppercase leading-[0.9] mb-12 text-[#1a1a1a]">
                        Art <span className="italic font-serif">meeting</span> Legacy
                    </h2>

                    <p className="text-sm md:text-lg text-[#1a1a1a] opacity-70 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
                        Blingish began as a single whisper—a desire to create jewelry that doesn't just rest on the skin, but resonates with the soul. We blend the raw honesty of hand-crafted metals with the refined precision of modern design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                    {/* Visual Side */}
                    <div className="relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                            className="aspect-[4/5] max-w-[280px] md:max-w-[380px] mx-auto rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-[var(--border-color)] bg-white"
                        >
                            <img
                                src="/images/blingish/logoo.jpg"
                                alt="Blingish Premium Artisanal Jewellery - Art Meeting Legacy"
                                className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110 rounded-[2.5rem] md:rounded-[4.5rem]"
                            />
                        </motion.div>

                        {/* Floating Signature Accent */}
                        <motion.div
                            style={{ x }}
                            className="absolute -right-8 -bottom-8 bg-[var(--card-bg)] p-10 rounded-[2rem] shadow-2xl hidden md:block border border-[var(--border-color)]"
                        >
                            <span className="text-3xl md:text-5xl font-serif italic text-[var(--accent-color)] opacity-30">◈</span>
                        </motion.div>
                    </div>

                    {/* Meta Side */}
                    <div className="flex flex-col gap-10 md:gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="p-10 md:p-14 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.04)] rounded-[2.5rem] border border-black/5 relative"
                        >
                            <p className="text-xl md:text-2xl font-serif italic mb-10 leading-relaxed opacity-80 decoration-[var(--accent-color)]/30 underline decoration-1 underline-offset-8 text-[#1a1a1a]">
                                "Jewellery should capture more than beauty—it should hold a story, a moment, a feeling."
                            </p>
                            <div className="flex flex-col gap-2">
                                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1a1a1a]">Creative Visionary</span>
                                <span className="text-[9px] uppercase tracking-[0.3em] text-[#1a1a1a] opacity-40 font-light italic">Director, Blingish House</span>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Story;
