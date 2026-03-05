"use client";

import React from "react";
import { motion } from "framer-motion";

const GridFeatures = () => {
    const slideInLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };

    const slideInRight = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };




    return (
        <section className="py-20 md:py-40 bg-[#fcfcf7] overflow-hidden transition-colors duration-1000">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold mb-4 block text-[#2D000D]">The Blingish Standard</span>
                    <h2 className="text-[28px] md:text-[46px] font-light tracking-widest uppercase text-[#1a1a1a]">
                        Crafted with Purpose
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">


                    {/* Card 1: Text */}
                    <motion.div
                        {...slideInLeft}
                        className="aspect-square bg-white flex flex-col justify-center items-center text-center p-8 md:p-14 shadow-sm rounded-[2rem] md:rounded-[3rem] border border-black/5"
                    >
                        <h2 className="text-[18px] md:text-[26px] font-serif italic font-bold tracking-widest uppercase mb-6 text-[#1a1a1a] whitespace-nowrap">
                            PIECES WITH MEANING
                        </h2>
                        <p className="text-xs md:text-base text-[#1a1a1a] opacity-80 leading-relaxed max-w-sm font-bold italic">
                            From everyday shine to once in a lifetime, we design for your story—crafting each piece with care, intention, and a touch of timeless beauty.
                        </p>
                    </motion.div>


                    {/* Card 2: Image with Always Visible Label */}
                    <motion.div
                        {...slideInRight}
                        className="aspect-square overflow-hidden group rounded-[3rem] md:rounded-[5rem] relative border border-black/5"
                    >
                        <img
                            src="/images/blingish/jwm.jpg"
                            alt="Blingish Premium Jewelry With Meaning - Handcrafted Artificial Jewellery India"
                            className="w-full h-full object-cover bg-white transition-luxury group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md py-6 md:py-8 text-center border-t border-black/5">
                            <span className="text-[#1a1a1a] text-sm md:text-lg font-bold tracking-widest uppercase italic">Jewelry with meaning</span>
                        </div>
                    </motion.div>

                    {/* Card 3: Image with Always Visible Label */}
                    <motion.div
                        {...slideInLeft}
                        className="aspect-square overflow-hidden group rounded-[3rem] md:rounded-[5rem] relative order-4 md:order-3 border border-black/5"
                    >
                        <img
                            src="/images/blingish/apf.png"
                            alt="Blingish Artisanal Petal Finish - Trendy Artificial Jewelry Design"
                            className="w-full h-full object-cover bg-white transition-luxury group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md py-6 md:py-8 text-center border-t border-black/5">
                            <span className="text-[#1a1a1a] text-sm md:text-lg font-bold tracking-widest uppercase italic">Artisanal Petal Finish</span>
                        </div>
                    </motion.div>

                    {/* Card 4: Text */}
                    <motion.div
                        {...slideInRight}
                        className="aspect-square bg-white flex flex-col justify-center items-center text-center p-8 md:p-14 shadow-sm rounded-[2rem] md:rounded-[3rem] order-3 md:order-4 border border-black/5"
                    >
                        <h2 className="text-[18px] md:text-[26px] font-serif italic font-bold tracking-widest uppercase mb-6 text-[#1a1a1a] whitespace-nowrap">
                            OUR PROMISE
                        </h2>

                        <ul className="flex flex-col gap-4 text-xs md:text-base text-[#1a1a1a] font-bold text-center italic opacity-80">
                            <li>Ethically sourced materials and responsible crafting.</li>
                            <li>Carefully curated ready-to-wear collections.</li>
                            <li>Premium packaging and reliable India-wide delivery.</li>
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default GridFeatures;
