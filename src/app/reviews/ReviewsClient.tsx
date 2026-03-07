"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, StarHalf } from "lucide-react";
import Link from "next/link";

const allReviews = [
    {
        id: 7,
        name: "Ananya V.",
        location: "Bengaluru",
        text: "The Wandering Ethereal Earrings are absolutely stunning! They have this magical quality that just elevates any outfit. Truly a real jewel.",
        rating: 4.5,
        collection: "Wanderer Series",
        image: "/images/reviews/rev1.png",
        productSlug: "wandering-ethereal-earrings"
    },
    {
        id: 8,
        name: "Ishita K.",
        location: "Mumbai",
        text: "The Midnight Glow Earrings are simply mesmerizing. The way they catch the light in the evening is magical. Definitely my go-to for special occasions.",
        rating: 5,
        collection: "Stellar Series",
        image: "/images/reviews/rev2.png",
        productSlug: "we41-earrings"
    }
];

const ReviewsClient = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-32 pb-20 bg-[var(--bg-color)] min-h-screen"
        >
            <div className="container mx-auto px-6 md:px-12">

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Header */}
                <header className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] tracking-[0.6em] uppercase text-[var(--accent-color)] font-bold mb-6 block"
                    >
                        Client Stories
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[42px] md:text-[84px] font-serif italic tracking-tight uppercase leading-[0.9] text-[var(--text-color)]"
                    >
                        Show your <span className="not-italic">piece</span>
                    </motion.h1>
                </header>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {allReviews.map((review, idx) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 2) * 0.1, duration: 0.8 }}
                            className="bg-[var(--card-bg)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.03)] border border-[var(--border-color)] flex flex-col md:flex-row gap-8 items-center"
                        >
                            {/* Image Container */}
                            <div className="w-[120px] md:w-[200px] aspect-square rounded-[1.5rem] overflow-hidden shadow-xl shrink-0 border border-[var(--border-color)] bg-white">
                                <img
                                    src={review.image}
                                    alt={`${review.name}'s review of Blingish jewellery`}
                                    className="w-full h-full object-contain p-6"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => {
                                        const rating = review.rating;
                                        if (i < Math.floor(rating)) {
                                            return <Star key={i} size={14} className="fill-[var(--accent-color)] text-[var(--accent-color)] opacity-70" />;
                                        } else if (i < rating) {
                                            return <StarHalf key={i} size={14} className="fill-[var(--accent-color)] text-[var(--accent-color)] opacity-70" />;
                                        } else {
                                            return <Star key={i} size={14} className="text-[var(--accent-color)] opacity-20" />;
                                        }
                                    })}
                                </div>
                                <Quote className="text-[var(--accent-color)] opacity-10 mb-4 hidden md:block" size={32} />
                                <p className="text-sm md:text-lg font-serif italic text-[var(--text-color)] opacity-80 leading-relaxed mb-6">
                                    "{review.text}"
                                </p>
                                <div className="mt-auto w-full flex justify-between items-center border-t border-[var(--border-color)] pt-6">
                                    <div>
                                        <h4 className="text-[11px] md:text-sm font-bold tracking-[0.2em] text-[var(--text-color)] uppercase">{review.name}</h4>
                                        <p className="text-[9px] md:text-[10px] tracking-[0.2em] text-[var(--text-color)] opacity-40 uppercase">{review.location}</p>
                                    </div>
                                    <Link
                                        href={`/products/${review.productSlug}`}
                                        className="flex items-center gap-2 text-[8px] md:text-[10px] uppercase tracking-[0.4em] font-bold text-[var(--accent-color)] group hover:text-[var(--text-color)] transition-all"
                                    >
                                        View Piece <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.main>
    );
};

export default ReviewsClient;
