"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Share2, Check } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";

interface CollectionClientProps {
    products: Product[];
}

const CollectionClient = ({ products }: CollectionClientProps) => {
    const [copiedId, setCopiedId] = useState<string | null>(null);
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Earrings", "Pendant/Necklace"];

    const filteredProducts = activeFilter === "All"
        ? products
        : products.filter(p => p.category === activeFilter);

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
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-32 md:pt-48 pb-20 bg-[var(--bg-color)] min-h-screen overflow-hidden"
        >
            <div className="container mx-auto px-2 md:px-12">

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-6 md:mb-12 px-4 md:px-0"
                >
                    <Link href="/" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-4xl mb-12 md:mb-16 text-center mx-auto"
                >
                    <h1 className="text-[42px] md:text-[84px] font-serif italic tracking-[0.05em] uppercase mb-10 leading-[1.1] text-[var(--text-color)]">
                        Shine Bright
                    </h1>

                    <p className="hidden md:block text-sm md:text-base text-[var(--text-color)] opacity-60 tracking-[0.05em] leading-relaxed max-w-2xl font-light mx-auto mb-12">
                        Discover a curated world of high-craftsmanship. Each piece in our collection is a testament to the beauty of hand-finished luxury, designed to be worn today and cherished forever.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 md:mb-24">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold py-2 px-6 rounded-full border transition-all duration-200 ${activeFilter === filter
                                ? "bg-[var(--accent-color)] text-white border-[var(--accent-color)] shadow-lg shadow-[var(--accent-color)]/20"
                                : "text-gray-400 border-[var(--border-color)] hover:border-gray-300"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-10 gap-y-6 md:gap-y-20">
                    <AnimatePresence>
                        {filteredProducts.map((product, idx) => (
                            <ProductCard key={product.id} product={product} idx={idx} copiedId={copiedId} handleShare={handleShare} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </motion.main>
    );
};

const ProductCard = ({ product, idx, copiedId, handleShare }: { product: Product, idx: number, copiedId: string | null, handleShare: (e: React.MouseEvent, slug: string, id: string) => void }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative"
        >
            {/* Share Button */}
            <button
                onClick={(e) => handleShare(e, product.slug, product.id)}
                className="absolute top-2 right-2 md:top-4 md:right-4 z-10 p-2 md:p-3 rounded-full bg-[var(--card-bg)]/80 backdrop-blur-md border border-[var(--border-color)] text-[var(--text-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all duration-300 md:opacity-0 group-hover:opacity-100 shadow-sm"
            >
                {copiedId === product.id ? <Check size={12} /> : <Share2 size={12} />}
            </button>

            <Link href={`/products/${product.slug}`} className="block">
                {/* Media Container */}
                <div
                    className="relative aspect-square bg-white rounded-[1.25rem] md:rounded-[3rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-[var(--border-color)] mb-3 md:mb-10 transition-luxury group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={isHovered && product.images.length > 1 ? 1 : imgIndex}
                            src={product.images[isHovered && product.images.length > 1 ? 1 : imgIndex]}
                            alt={`${product.name} - Premium Artificial Jewellery by Blingish`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            loading="lazy"
                            className={`w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 rounded-[1.25rem] md:rounded-[2.5rem] ${isHovered ? "p-0" : "p-0.5 md:p-1"}`}
                        />
                    </AnimatePresence>

                    {/* Mobile Swipe Simulation via Dots */}
                    {product.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 md:hidden">
                            {product.images.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={(e) => { e.preventDefault(); setImgIndex(i); }}
                                    className={`w-1 h-1 rounded-full transition-all ${imgIndex === i ? "bg-[var(--accent-color)] w-2" : "bg-gray-300"}`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 hidden md:block">
                        <div className="w-full bg-[var(--card-bg)]/90 backdrop-blur-xl text-[var(--accent-secondary)] py-5 rounded-full text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[var(--accent-color)] hover:text-white dark:hover:text-black transition-all duration-500 shadow-xl text-center">
                            Discover Piece
                        </div>
                    </div>
                </div>
            </Link>

            {/* Info */}
            <div className="px-1 md:px-4 text-center">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-[10px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-medium leading-tight md:leading-loose mb-1 md:mb-2 text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-500 truncate px-2">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-xs md:text-xl font-light tracking-widest text-[var(--text-color)]">
                    {product.price === 0 ? "₹XX" : `₹${product.price.toLocaleString('en-IN')}`}
                </p>
            </div>
        </motion.div>
    );
};

export default CollectionClient;
