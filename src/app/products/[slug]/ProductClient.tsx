"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Share2, Check } from "lucide-react";
import Link from "next/link";
import { Product } from "@/data/products";
import { useCart } from "@/context/cart-context";
import Script from "next/script";

const WhatsAppIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
    <img
        src="/images/blingish/whats.png"
        alt="WhatsApp icon"
        width={size}
        height={size}
        className={className}
    />
);

interface ProductClientProps {
    product: Product;
}

const ProductClient = ({ product }: ProductClientProps) => {
    const { addToCart } = useCart();
    const [activeImage, setActiveImage] = useState(0);
    const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
    const [isZooming, setIsZooming] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // When switching thumbnail, always reset zoom to show full image
    const handleThumbnailClick = (idx: number) => {
        setActiveImage(idx);
        setIsZooming(false);
    };

    const handleShare = () => {
        const url = window.location.href;

        if (navigator.share) {
            navigator.share({
                title: product.name || 'Blingish Fine Jewelry',
                text: product.description || 'Check out this exquisite piece!',
                url: url,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(url);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": product.images.map(img => `https://blingish.in${img}`),
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "Blingish"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://blingish.in/products/${product.slug}`,
            "priceCurrency": "INR",
            "price": product.price === 0 ? "999" : product.price.toString(),
            "availability": "https://schema.org/InStock"
        }
    };

    // Track mouse position for zoom, only active when user has clicked to zoom
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isZooming) return;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setZoomPos({ x, y });
    };

    // Click toggles zoom on/off
    const handleImageClick = () => {
        setIsZooming(prev => !prev);
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-32 pb-20 bg-[var(--bg-color)] min-h-screen"
        >
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 md:px-12">

                {/* Header Actions */}
                <div className="flex justify-between items-center mb-16">
                    <Link href="/collection" className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

                    {/* Left: Dynamic Image Gallery */}
                    <div className="flex flex-col gap-10">
                        <div
                            className={`relative aspect-square rounded-[2rem] md:rounded-[4rem] overflow-hidden bg-[var(--card-bg)] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-[var(--border-color)] ${isZooming ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                            onMouseMove={handleMouseMove}
                            onClick={handleImageClick}
                        >
                            <motion.img
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                src={product.images[activeImage]}
                                alt={`${product.name} - Close-up view of premium artificial jewellery`}
                                fetchPriority="high"
                                className={`w-full h-full object-contain p-10 md:p-20 transition-opacity duration-300 ${isZooming ? 'opacity-0' : 'opacity-100'}`}
                            />

                            {/* Zoom Overlay — only visible after user clicks */}
                            <div
                                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 bg-[var(--card-bg)] ${isZooming ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    backgroundImage: `url(${product.images[activeImage]})`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                    backgroundSize: '280%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />

                            {/* Tap to zoom hint on mobile */}
                            {!isZooming && (
                                <div className="absolute bottom-3 right-3 md:hidden bg-black/40 text-white text-[8px] px-2 py-1 rounded-full tracking-wider uppercase backdrop-blur-sm">
                                    Tap to Zoom
                                </div>
                            )}

                            <div className="absolute bottom-10 left-10 flex gap-4 z-10" onClick={(e) => e.stopPropagation()}>
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleThumbnailClick(idx)}
                                        className={`w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all duration-500 ${activeImage === idx ? 'border-[var(--accent-color)] scale-110 shadow-lg shadow-black/10' : 'border-[var(--border-color)] opacity-40 hover:opacity-100'}`}
                                    >
                                        <img src={img} className="w-full h-full object-contain p-1" alt={`${product.name} view ${idx + 1}`} loading="lazy" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTAs moved under image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="flex gap-3 md:gap-6">
                                <button
                                    onClick={() => addToCart(product.name, product.price, product.images[0], product.slug)}
                                    className="flex-grow bg-[var(--text-color)] text-[var(--bg-color)] py-3 md:py-2 px-3 md:px-4 rounded-full text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] hover:bg-[var(--accent-color)] dark:hover:text-black transition-all duration-700 flex items-center justify-center gap-2 md:gap-4 group shadow-xl"
                                >
                                    <ShoppingBag size={16} className="group-hover:scale-110 transition-transform" />
                                    Add to Cart
                                </button>
                                <div className="flex gap-2">
                                    <button className="p-3 md:p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-500">
                                        <Heart size={16} />
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="p-3 md:p-2.5 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-500 relative"
                                    >
                                        {isCopied ? <Check size={16} /> : <Share2 size={16} />}
                                    </button>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/919546243078?text=Hello, I am interested in the ${product.name}. Can you provide more details?`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[var(--bg-color)] border border-green-600/30 text-green-600 py-3 md:py-2 rounded-full text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] hover:bg-green-600 hover:text-white transition-all duration-700 shadow-lg shadow-green-600/5 group"
                            >
                                <WhatsAppIcon size={16} className="group-hover:scale-110 transition-transform" />
                                Inquire on WhatsApp
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Product Informatics */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="text-[10px] tracking-[0.6em] uppercase text-[var(--accent-color)] font-bold">
                                    {product.category}
                                </span>
                                {product.trending && (
                                    <span className="bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-[8px] px-3 py-1 rounded-full uppercase tracking-[0.2em] font-bold border border-[var(--accent-color)]/20">
                                        Trending
                                    </span>
                                )}
                                {product.soldInLast7Days && (
                                    <span className="text-[9px] text-green-600 font-bold tracking-widest uppercase italic opacity-80">
                                        {product.soldInLast7Days}+ sold in last 7 days
                                    </span>
                                )}
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight uppercase leading-[0.9] mb-8 text-[var(--text-color)]">
                                {product.name.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {i % 2 !== 0 ? <span className="italic font-serif block">{word}</span> : word + ' '}
                                    </React.Fragment>
                                ))}
                            </h1>
                            <p className="text-2xl md:text-3xl font-light tracking-[0.2em] mb-16 text-[var(--text-color)] opacity-60">
                                {product.price === 0 ? "₹XX" : `₹${product.price.toLocaleString('en-IN')}`}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="space-y-12"
                            >
                                <section>
                                    <p className="text-xl font-light leading-relaxed text-gray-400 max-w-xl">
                                        {product.description}
                                    </p>
                                </section>

                                {/* Technical Specs Grid */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5, delay: 0.6 }}
                                    className="grid grid-cols-2 gap-y-10 border-t border-[var(--border-color)] pt-12"
                                >
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Metal</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.metal}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Stone</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.stone}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Origin</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.origin}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Closure</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.closure}</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>

                {/* Trust Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="mt-32 pt-20 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                >
                    <div className="flex flex-col items-center gap-6">
                        <ShieldCheck className="text-[var(--accent-color)] opacity-40" size={32} />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[var(--text-color)]">Hand-Finished Quality</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Artisanal Craftsmanship</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <Truck className="text-[var(--accent-color)] opacity-40" size={32} />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[var(--text-color)]">Reliable Shipping</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Secure Delivery India-Wide</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <RotateCcw className="text-[var(--accent-color)] opacity-40" size={32} />
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[var(--text-color)]">Aesthetic Finish</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Modern Jewelry Design</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.main>
    );
};

export default ProductClient;
