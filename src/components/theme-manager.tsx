"use client";

import { useEffect, useState } from "react";
import { getCurrentOccasion, Occasion } from "@/lib/occasions";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

const ThemeManager = () => {
    const [activeOccasion, setActiveOccasion] = useState<Occasion | null>(null);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const occasion = getCurrentOccasion();
        if (occasion) {
            setActiveOccasion(occasion);
            // Inject theme specific CSS variables
            const root = document.documentElement;
            if (occasion.themeProps.accent) {
                root.style.setProperty("--accent-color", occasion.themeProps.accent);
            }
            if (occasion.themeProps.accentSecondary) {
                root.style.setProperty("--accent-secondary", occasion.themeProps.accentSecondary);
            }
        }
    }, []);

    if (!activeOccasion) return null;

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] max-w-lg"
                >
                    <div className="bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-[var(--border-color)] p-4 rounded-3xl shadow-2xl flex items-center justify-between gap-6 overflow-hidden relative">
                        {/* Decorative background element for the occasion */}
                        <div
                            className="absolute -right-4 -bottom-4 text-6xl opacity-10 pointer-events-none select-none"
                            style={{ color: activeOccasion.themeProps.accent }}
                        >
                            {activeOccasion.themeProps.emoji}
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${activeOccasion.themeProps.accent}20` }}
                            >
                                <Sparkles size={18} style={{ color: activeOccasion.themeProps.accent }} />
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-1">
                                    {activeOccasion.name} Edition
                                </h4>
                                <p className="text-xs md:text-sm font-medium text-[var(--text-color)] leading-tight">
                                    {activeOccasion.themeProps.greeting}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowBanner(false)}
                            className="text-[var(--text-color)] opacity-30 hover:opacity-100 transition-opacity p-2"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ThemeManager;
