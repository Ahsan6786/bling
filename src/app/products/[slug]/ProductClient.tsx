"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, RotateCcw, Share2, Check, Sparkles, ZoomIn, Search } from "lucide-react";
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
    const [showNotification, setShowNotification] = useState(false);

    const handleAddToCart = () => {
        addToCart(product.name, product.price, product.images[0], product.slug);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

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
            className="pt-40 pb-20 bg-[var(--bg-color)] min-h-screen"
        >
            <Script
                id="product-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-6 md:px-12">

                {/* Breadcrumbs / Back */}
                <div className="flex justify-between items-center mb-16 md:mb-24">
                    <Link href="/collection" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors group">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Collection
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left: Image Gallery (8 columns on lg) */}
                    <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 md:sticky md:top-32">
                        {/* Thumbnails - Vertical on desktop, Horizontal on mobile */}
                        <div className="order-2 md:order-1 flex md:flex-col gap-5 overflow-x-auto md:overflow-y-auto no-scrollbar py-4 md:py-0 min-w-[100px]">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleThumbnailClick(idx)}
                                    className={`relative flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden border-2 transition-all duration-500 bg-[var(--card-bg)] ${activeImage === idx ? 'border-[var(--accent-color)] scale-105 shadow-2xl' : 'border-[var(--border-color)] opacity-70 hover:opacity-100 hover:border-gray-400'}`}
                                >
                                    <img src={img} className="w-full h-full object-contain p-2.5" alt={`${product.name} view ${idx + 1}`} loading="lazy" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image Container */}
                        <div
                            className={`order-1 md:order-2 flex-grow relative aspect-[4/5] md:aspect-square rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-[var(--card-bg)] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-[var(--border-color)] ${isZooming ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                            onMouseMove={handleMouseMove}
                            onClick={handleImageClick}
                        >
                            <motion.img
                                key={activeImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                src={product.images[activeImage]}
                                alt={`${product.name} - Close-up view`}
                                fetchPriority="high"
                                className={`w-full h-full object-contain p-8 md:p-12 transition-opacity duration-300 ${isZooming ? 'opacity-0' : 'opacity-100'}`}
                            />

                            {/* Zoom Overlay */}
                            <div
                                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 bg-[var(--card-bg)] ${isZooming ? 'opacity-100' : 'opacity-0'}`}
                                style={{
                                    backgroundImage: `url(${product.images[activeImage]})`,
                                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                                    backgroundSize: '250%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            />

                            {/* Zoom Hint - Repositioned for optimal visibility */}
                            {!isZooming && (
                                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 p-4 rounded-full bg-[var(--accent-color)] text-white shadow-2xl z-20 hover:scale-110 transition-transform">
                                    <ZoomIn size={22} />
                                </div>
                            )}

                            {/* Mobile Zoom Hint Label */}
                            {!isZooming && (
                                <div className="absolute bottom-6 right-6 md:hidden bg-black/40 text-white text-[8px] px-3 py-1.5 rounded-full tracking-[0.2em] uppercase font-bold backdrop-blur-md">
                                    Tap to Zoom
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Product Informatics (5 columns on lg) */}
                    <div className="lg:col-span-5 flex flex-col space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-4 mb-8">
                                <span className="text-[10px] tracking-[0.5em] uppercase text-[var(--accent-color)] font-bold">
                                    {product.category}
                                </span>
                                {product.trending && (
                                    <div className="flex items-center gap-2 bg-[var(--accent-color)]/5 text-[var(--accent-color)] text-[9px] px-3 py-1.5 rounded-full uppercase tracking-[0.2em] font-bold border border-[var(--accent-color)]/10">
                                        <Sparkles size={10} />
                                        Trending
                                    </div>
                                )}
                                {product.soldInLast7Days && (
                                    <span className="text-[10px] text-green-600/70 font-bold tracking-widest uppercase">
                                        {product.soldInLast7Days} sold recently
                                    </span>
                                )}
                            </div>

                            {/* Title & Price */}
                            <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-[var(--text-color)] leading-[0.9] mb-8">
                                {product.name}
                            </h1>

                            <div className="flex items-baseline gap-4 mb-12">
                                <span className="text-3xl md:text-4xl font-light tracking-[0.1em] text-[var(--text-color)]">
                                    {product.price === 0 ? "₹XX" : `₹${product.price.toLocaleString('en-IN')}`}
                                </span>
                                <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">Inclusive of all taxes</span>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-4 mb-12">
                                <div className="flex gap-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-grow bg-[var(--accent-color)] text-white h-16 rounded-full text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-[var(--accent-color)]/90 transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-[var(--accent-color)]/10 group relative overflow-hidden"
                                    >
                                        <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={handleShare}
                                        className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-500 bg-[var(--card-bg)] relative shadow-sm"
                                    >
                                        {isCopied ? <Check size={20} /> : <Share2 size={20} />}
                                    </button>
                                </div>

                                <a
                                    href={`https://wa.me/919546243078?text=Hello Blingish, I'm interested in the ${product.name}. Could you share more details?`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full h-16 flex items-center justify-center gap-3 bg-white border border-green-600/20 text-green-600 rounded-full text-[11px] uppercase font-bold tracking-[0.4em] hover:bg-green-600 hover:text-white transition-all duration-700 shadow-lg shadow-green-600/5 group"
                                >
                                    <WhatsAppIcon size={18} className="group-hover:scale-110 transition-transform" />
                                    Personal Concierge
                                </a>
                            </div>

                            {/* Description & Specs */}
                            <div className="space-y-12 pt-12 border-t border-[var(--border-color)]">
                                <div>
                                    <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 text-[var(--accent-color)]">The Story</h3>
                                    <p className="text-lg font-light leading-relaxed text-gray-500">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-y-10">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Metal Finish</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.metal}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Ornamentation</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.stone}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Artisan Origin</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.origin}</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-2">Secure Closure</p>
                                        <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">{product.specs.closure}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Assurance Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="mt-32 pt-20 border-t border-[var(--border-color)] grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {[
                        { icon: ShieldCheck, title: "Artisan Quality", subtitle: "Hand-finished masterworks" },
                        { icon: Truck, title: "Secure Delivery", subtitle: "Trusted transit Pan-India" },
                        { icon: RotateCcw, title: "Aesthetic Luxury", subtitle: "Modern timeless designs" }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                            <div className="p-4 rounded-full bg-[var(--card-bg)] border border-[var(--border-color)] group-hover:scale-110 transition-transform duration-500">
                                <item.icon className="text-[var(--accent-color)] opacity-60" size={24} />
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-[var(--text-color)]">{item.title}</h4>
                                <p className="text-[9px] uppercase tracking-widest text-gray-400">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Notifications */}
                <AnimatePresence>
                    {showNotification && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 20, x: "-50%" }}
                            className="fixed bottom-10 left-1/2 z-[1000] bg-[var(--accent-color)] text-white px-8 py-4 rounded-full shadow-2xl text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-3"
                        >
                            <Check size={14} />
                            Added to Bag
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.main>
    );
};

export default ProductClient;
