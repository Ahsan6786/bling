"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Share2, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

const Cabinet = () => {
    // Only show first 4 for cabinet
    const cabinetProducts = products.slice(0, 4);
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleShare = (e: React.MouseEvent, slug: string, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/products/${slug}`;

        if (navigator.share) {
            navigator.share({
                title: 'Blingish Fine Jewelry',
                text: 'Check out this exquisite piece!',
                url: url,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(url);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        }
    };

    return (
        <section id="cabinet" className="py-20 md:py-40 bg-[var(--bg-color)] overflow-hidden transition-all duration-1000">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col items-center text-center gap-10 mb-20 md:mb-32 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 className="text-4xl md:text-8xl font-serif italic tracking-[0.05em] uppercase leading-[0.9] mb-12 text-[var(--text-color)]">
                            Shine Bright
                        </h2>

                        <p className="text-gray-400 tracking-[0.05em] leading-relaxed font-light max-w-xl mx-auto">
                            A curated glimpse into our finest artisanal creations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="relative"
                    >
                        {/* Pulsing glow ring behind the button */}
                        <motion.div
                            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 rounded-full bg-[var(--accent-color)] blur-lg"
                        />
                        <Link
                            href="/collection"
                            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 border border-black dark:border-[var(--accent-color)] rounded-full overflow-hidden transition-all duration-700 hover:shadow-xl hover:shadow-black/10 bg-black dark:bg-[var(--accent-color)]"
                        >
                            <Sparkles size={13} className="relative z-10 text-white group-hover:text-white transition-colors duration-700" />
                            <span className="relative z-10 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold text-white group-hover:text-white transition-colors duration-700">
                                Explore All Collection
                            </span>
                            <ArrowRight size={14} className="relative z-10 text-white group-hover:text-white group-hover:translate-x-1 transition-all duration-700" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1]" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-12 gap-y-8 md:gap-y-24">
                    {cabinetProducts.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                            className="group relative"
                        >
                            {/* Share Button */}
                            <button
                                onClick={(e) => handleShare(e, product.slug, product.id)}
                                className="absolute top-4 right-4 z-20 p-3 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] text-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-sm"
                            >
                                {copiedId === product.id ? <Check size={14} /> : <Share2 size={14} />}
                            </button>

                            <Link href={`/products/${product.slug}`} className="block">
                                <div className="relative aspect-square bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-6 md:mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.02)] transition-all duration-1000 group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[var(--border-color)]">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-1 md:p-1 transition-all duration-[1.5s] group-hover:scale-105 rounded-[1rem] md:rounded-[2.5rem]"
                                    />

                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] py-4 bg-[var(--card-bg)] shadow-2xl rounded-full text-[9px] tracking-[0.4em] uppercase font-bold opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 hover:bg-[var(--accent-color)] hover:text-white dark:hover:text-black text-[var(--text-color)] flex justify-center items-center gap-2 hidden md:flex">
                                        <span>View Details</span>
                                    </div>
                                </div>
                            </Link>

                            <div className="text-center px-2 md:px-4">
                                <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mb-2 md:mb-3 block text-[var(--accent-color)]">{product.category}</span>
                                <Link href={`/products/${product.slug}`}>
                                    <h3 className="text-[9px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-medium leading-tight md:leading-loose mb-2 md:mb-3 group-hover:text-[var(--accent-color)] transition-colors duration-500 line-clamp-2 min-h-[2.5em] flex items-center justify-center text-[var(--text-color)]">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-center gap-2 md:gap-4">
                                    <span className="w-4 md:w-8 h-[1px] bg-[var(--border-color)] transition-luxury group-hover:w-12 group-hover:bg-[var(--accent-color)]" />
                                    <span className="text-sm md:text-lg font-light tracking-widest text-[var(--text-color)]">
                                        {product.price === 0 ? "₹XX" : `₹${product.price.toLocaleString('en-IN')}`}
                                    </span>
                                    <span className="w-4 md:w-8 h-[1px] bg-[var(--border-color)] transition-luxury group-hover:w-12 group-hover:bg-[var(--accent-color)]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Cabinet;
