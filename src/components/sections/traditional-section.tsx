"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";

const TraditionalSection = () => {
    // Product IDs for traditional section
    const traditionalIds = ["52", "53", "earring-01", "35", "36", "37", "38", "39", "95", "96", "91", "92", "93", "94", "82"];
    const traditionalProducts = products.filter(p => traditionalIds.includes(p.id));

    // Maintain the order of IDs
    const sortedProducts = traditionalIds
        .map(id => products.find(p => p.id === id))
        .filter((p): p is (typeof products)[0] => p !== undefined);

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
        <section id="traditional" className="py-20 md:py-40 bg-[var(--bg-color)] overflow-hidden transition-all duration-1000 border-t border-[var(--border-color)]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold text-[var(--accent-color)] mb-6 block">
                            Our Heritage
                        </span>
                        <h2 className="text-4xl md:text-8xl font-serif italic tracking-[0.05em] uppercase leading-[0.9] text-[var(--text-color)]">
                            Traditional <br /> <span className="not-italic font-sans font-extralight tracking-tight">Masterpieces</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 md:gap-x-12 gap-y-8 md:gap-y-24">
                    {sortedProducts.map((product, idx) => (
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
                                <div className="relative aspect-square bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden mb-6 md:mb-10 shadow-[0_30px_60px_rgba(0,0,0,0.02)] transition-all duration-1000 group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-[var(--border-color)]">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-2 md:p-4 transition-all duration-[1.5s] group-hover:scale-105 rounded-[1rem] md:rounded-[2.5rem]"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
                                    <span className="w-4 md:w-8 h-[1px] bg-[var(--border-color)]" />
                                    <span className="text-sm md:text-lg font-light tracking-widest text-[var(--text-color)]">
                                        {product.price === 0 ? "₹XX" : `₹${product.price.toLocaleString('en-IN')}`}
                                    </span>
                                    <span className="w-4 md:w-8 h-[1px] bg-[var(--border-color)]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TraditionalSection;
