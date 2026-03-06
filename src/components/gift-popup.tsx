"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift, Sparkles } from "lucide-react";

const GiftPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        console.log("GiftPopup initialized, waiting 10s...");

        // Appear after 10 seconds
        const initialTimer = setTimeout(() => {
            console.log("10s passed, showing gift popup");
            setIsVisible(true);
        }, 10000);

        // Re-show every 60 seconds if it was closed
        const repeatInterval = setInterval(() => {
            console.log("1 minute check, ensuring gift popup visibility");
            setIsVisible(true);
        }, 60000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(repeatInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-sm bg-[var(--bg-color)] rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-color)] p-8 text-center"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[var(--text-color)] transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-20 h-20 bg-[#8B4A3A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Gift size={40} className="text-[#8B4A3A]" />
                        </div>

                        <h2 className="text-2xl font-serif italic mb-4 text-[var(--text-color)]">
                            Welcome Surprise!
                        </h2>

                        <p className="text-sm text-[var(--text-color)] opacity-60 mb-8 leading-relaxed">
                            Get a <span className="font-bold">FREE mystery gift</span> on your first order. Claim it now before it's gone!
                        </p>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="w-full bg-[#1a1a1a] dark:bg-white dark:text-black text-white py-4 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:opacity-90 transition-opacity"
                        >
                            Claim My Gift
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default GiftPopup;
