"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "How does Blingish ensure ethical sourcing?",
        a: "Blingish is committed to responsible production. We work closely with our material suppliers to ensure ethical practices and prioritize environmental sustainability throughout our manufacturing process.",
    },
    {
        q: "Can I customize a piece from the Blingish Cabinet?",
        a: "Currently, our collection is curated for immediate style and ready-to-wear convenience. We do not offer customization or bespoke design services at this time, focusing on providing consistent house-designed excellence.",
    },
    {
        q: "How do I take care of my Blingish jewelry?",
        a: "To maintain the beauty of your pieces, keep them away from water, perfumes, lotions, and cleaning chemicals. We recommend wiping them with a soft, dry cloth after use and storing them in an airtight container or original Blingish pouch to prevent oxidation.",
    },
    {
        q: "What is the Blingish 3D design process?",
        a: "Every piece begins as a conceptual digital sketch. We use 3D modeling to refine textures and proportions, ensuring each aesthetic creation meets our high standards before it reaches your hands.",
    },
    {
        q: "How long does shipping take for Blingish orders?",
        a: "Orders are processed promptly and typically delivered across India within 5-7 business days. You will receive a tracking link via SMS or email once your package is on its way.",
    },
    {
        q: "Does Blingish offer international shipping?",
        a: "At this stage, Blingish ships exclusively within India. We are strictly focused on providing the best experience to our domestic customers before expanding to international shores.",
    },
];

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-40 bg-[var(--bg-color)] transition-all duration-1000">
            <div className="container mx-auto px-6 max-w-3xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-light tracking-widest text-center mb-20 md:mb-32 uppercase text-[var(--text-color)]"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="flex flex-col gap-6">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="border-b border-[var(--border-color)] pb-6"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full flex justify-between items-center text-left group"
                            >
                                <span className={`text-xs md:text-sm uppercase tracking-widest font-bold transition-colors group-hover:text-[var(--accent-color)] ${openIdx === idx ? 'text-[var(--accent-color)]' : 'text-[var(--text-color)]'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-500 text-[var(--text-color)] ${openIdx === idx ? "rotate-180 text-[var(--accent-color)]" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pt-6 text-sm text-[var(--text-color)] opacity-60 leading-relaxed font-medium pr-10">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
