"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Check } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

const WaistChainSection = () => {
    // Filter products by category "Waist Chain"
    const waistChains = products.filter(p => p.category === "Waist Chain");

    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleShare = (e: React.MouseEvent, slug: string, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/products/${slug}`;

        if (navigator.share) {
            navigator.share({
                title: 'Blingish Fine Jewelry',
                text: 'Check out this exquisite waist chain!',
                url: url,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(url);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        }
    };

    if (waistChains.length === 0) return null;

    return (
        <section id="waist-chains" className="py-20 md:py-40 bg-[var(--bg-color)] overflow-hidden transition-all duration-1000 border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold text-[var(--accent-color)] mb-6 block">
                            Adorn Your Waist
                        </span>
                        <h2 className="text-4xl md:text-8xl font-serif italic tracking-[0.05em] uppercase leading-[0.9] text-[var(--text-color)]">
                            Waist <br /> <span className="not-italic font-sans font-extralight tracking-tight">Chains</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {waistChains.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
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
                                <div className="relative aspect-[16/9] md:aspect-[3/2] bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-6 md:mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.02)] transition-all duration-1000 group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[var(--border-color)]">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-4 md:p-8 transition-all duration-[1.5s] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                </div>
                            </Link>

                            <div className="text-center px-4">
                                <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase opacity-40 font-bold mb-3 block text-[var(--accent-color)]">{product.category}</span>
                                <Link href={`/products/${product.slug}`}>
                                    <h3 className="text-sm md:text-base uppercase tracking-[0.2em] font-medium leading-relaxed mb-3 group-hover:text-[var(--accent-color)] transition-colors duration-500 text-[var(--text-color)]">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-center gap-4">
                                    <span className="w-8 h-[1px] bg-[var(--border-color)]" />
                                    <span className="text-lg md:text-xl font-light tracking-widest text-[var(--text-color)]">
                                        ₹{product.price.toLocaleString('en-IN')}
                                    </span>
                                    <span className="w-8 h-[1px] bg-[var(--border-color)]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WaistChainSection;
