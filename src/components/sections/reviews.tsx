"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const reviews = [
    {
        id: 1,
        name: "Aditi S.",
        location: "Mumbai",
        text: "The Blooming Petal earrings are delicate and catch the light beautifully. Perfect for daily wear!",
        rating: 5,
        collection: "Nature's Grace",
        image: "/images/earrings/b.png",
        productSlug: "ethereal-blossom-earrings"
    },
    {
        id: 2,
        name: "Rajesh K.",
        location: "Delhi",
        text: "Ordered the Imperial Radiance Pendant for my wife. The finish is excellent and it arrived in a very premium box.",
        rating: 5,
        collection: "Royal Heritage",
        image: "/images/pendant/pen1.png",
        productSlug: "imperial-radiance-pendant"
    },
    {
        id: 3,
        name: "Sneha P.",
        location: "Bangalore",
        text: "The Moonlit Serenity earrings have a beautiful matte finish. They looks much more expensive than they are!",
        rating: 5,
        collection: "Midnight Series",
        image: "/images/earrings/d.png",
        productSlug: "moonlit-serenity-earrings"
    },
    {
        id: 4,
        name: "Arjun M.",
        location: "Hyderabad",
        text: "The Celestial Pearl earrings are stunning. Great quality and fast delivery. Very satisfied.",
        rating: 5,
        collection: "Celestial Series",
        image: "/images/earrings/j.png",
        productSlug: "celestial-pearl-intertwined-earrings"
    }
];

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const nextStep = useCallback(() => {
        setIndex((prev) => (prev + 1) % reviews.length);
    }, []);

    const prevStep = useCallback(() => {
        setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    }, []);

    useEffect(() => {
        const timer = setInterval(nextStep, 6000); // 6s per review
        return () => clearInterval(timer);
    }, [nextStep]);

    return (
        <section className="py-24 md:py-40 bg-[var(--bg-color)] overflow-hidden transition-all duration-1000">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 font-bold mb-4 block text-[var(--accent-color)]">Testimonials</span>
                    <h2 className="text-[32px] md:text-[56px] font-serif italic tracking-tight text-[var(--text-color)] underline-brand-maroon/10">
                        Stories of <span className="not-italic">Radiance</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto min-h-[550px] md:min-h-[450px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 1.05, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="bg-[var(--card-bg)] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-16 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-[var(--border-color)] flex flex-col md:flex-row gap-12 items-center w-full"
                        >
                            {/* Piece Image Section */}
                            <div className="w-[200px] md:w-[320px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative shrink-0 group border border-[var(--border-color)] bg-white">
                                <img
                                    src={reviews[index].image}
                                    alt="Product image"
                                    className="w-full h-full object-contain p-8 transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-maroon/5 mix-blend-multiply pointer-events-none" />
                            </div>

                            {/* Content Section */}
                            <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(reviews[index].rating)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-[var(--accent-color)] text-[var(--accent-color)] opacity-70" />
                                    ))}
                                </div>

                                <div className="relative mb-8 md:mb-12">
                                    <Quote className="absolute -left-12 -top-6 text-[var(--accent-color)] opacity-10 hidden md:block" size={64} />
                                    <p className="text-lg md:text-3xl font-serif italic text-[var(--text-color)] leading-relaxed tracking-tight">
                                        "{reviews[index].text}"
                                    </p>
                                </div>

                                <div className="mt-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[var(--border-color)] pt-8 md:pt-10">
                                    <div>
                                        <h4 className="text-[13px] md:text-base font-bold tracking-[0.3em] text-[var(--text-color)] uppercase">{reviews[index].name}</h4>
                                        <span className="text-[10px] md:text-xs tracking-[0.2em] text-[var(--text-color)] opacity-40 uppercase font-medium">{reviews[index].location}</span>
                                    </div>
                                    <Link
                                        href={`/products/${reviews[index].productSlug}`}
                                        className="group flex items-center gap-3 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[var(--accent-color)] hover:text-[var(--text-color)] transition-all"
                                    >
                                        View Piece
                                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Desktop Navigation Arrows */}
                    <button
                        onClick={prevStep}
                        className="absolute left-[-80px] top-1/2 -translate-y-1/2 p-6 rounded-full bg-[var(--card-bg)] shadow-2xl text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all hidden lg:flex border border-[var(--border-color)] hover:scale-110"
                    >
                        <ChevronLeft size={28} strokeWidth={1.5} />
                    </button>
                    <button
                        onClick={nextStep}
                        className="absolute right-[-80px] top-1/2 -translate-y-1/2 p-6 rounded-full bg-[var(--card-bg)] shadow-2xl text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all hidden lg:flex border border-[var(--border-color)] hover:scale-110"
                    >
                        <ChevronRight size={28} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Progress & Pagination */}
                <div className="mt-20 text-center">
                    <div className="flex justify-center gap-4 mb-16">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-1.5 transition-all duration-700 rounded-full ${index === i ? "w-16 bg-[var(--accent-color)]" : "w-3 bg-[var(--accent-color)]/20 hover:bg-[var(--accent-color)]/40"}`}
                            />
                        ))}
                    </div>

                    <Link
                        href="/reviews"
                        className="text-[11px] md:text-sm uppercase tracking-[0.5em] font-bold text-[var(--text-color)] opacity-70 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors border-b border-[var(--border-color)] pb-2"
                    >
                        Explore More Stories
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
