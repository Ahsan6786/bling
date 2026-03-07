"use client";

import { useEffect, useState, useMemo } from "react";
import { getCurrentOccasion, Occasion } from "@/lib/occasions";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

// Individual Particle Component
const Particle = ({ type, color }: { type?: string, color: string }) => {
    const randomX = useMemo(() => Math.random() * 100, []);
    const randomDelay = useMemo(() => Math.random() * 20, []);
    const randomDuration = useMemo(() => 10 + Math.random() * 20, []);
    const randomSize = useMemo(() => 15 + Math.random() * 25, []);

    const getIcon = () => {
        switch (type) {
            case "flower": return "🌸";
            case "heart": return "❤️";
            case "snow": return "❄️";
            case "light": return "✨";
            default: return "✨";
        }
    };

    return (
        <motion.div
            initial={{ y: -50, x: `${randomX}vw`, opacity: 0, rotate: 0 }}
            animate={{
                y: "110vh",
                x: `${randomX + (Math.random() * 10 - 5)}vw`,
                opacity: [0, 0.4, 0.4, 0.4, 0],
                rotate: 360
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
                ease: "linear"
            }}
            style={{
                position: 'fixed',
                zIndex: 40,
                fontSize: randomSize,
                pointerEvents: 'none',
                filter: type === "light" ? `drop-shadow(0 0 10px ${color})` : 'none'
            }}
        >
            {getIcon()}
        </motion.div>
    );
};

const ThemeManager = () => {
    const [activeOccasion, setActiveOccasion] = useState<Occasion | null>(null);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const occasion = getCurrentOccasion();
        if (occasion) {
            setActiveOccasion(occasion);
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
        <>
            {/* Immersive Particles */}
            <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <Particle
                        key={i}
                        type={activeOccasion.themeProps.particleType}
                        color={activeOccasion.themeProps.accent}
                    />
                ))}
            </div>

            {/* Premium Theme Banner */}
            <AnimatePresence>
                {showBanner && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-28 left-1/2 -translate-x-1/2 z-[1001] w-[calc(100%-2rem)] max-w-xl"
                    >
                        <div
                            className="relative overflow-hidden rounded-[2.5rem] border border-[var(--border-color)] shadow-[0_40px_100px_rgba(0,0,0,0.15)] group"
                            style={{ background: 'var(--card-bg)', backdropFilter: 'blur(20px)' }}
                        >
                            {/* Animated Background Glow */}
                            <motion.div
                                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                style={{ background: activeOccasion.themeProps.gradient }}
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{ duration: 15, repeat: Infinity }}
                            />

                            <div className="relative p-6 px-10 flex items-center justify-between gap-8">
                                <div className="flex items-center gap-6">
                                    <div
                                        className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center relative overflow-hidden shadow-2xl"
                                        style={{ background: activeOccasion.themeProps.gradient }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                                        <span className="text-3xl relative z-10 drop-shadow-lg">{activeOccasion.themeProps.emoji}</span>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-1.5">
                                            <span
                                                className="text-[10px] uppercase tracking-[0.5em] font-black"
                                                style={{ color: activeOccasion.themeProps.accent }}
                                            >
                                                {activeOccasion.name}
                                            </span>
                                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeOccasion.themeProps.accent }} />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-serif italic text-[var(--text-color)] leading-tight tracking-tight">
                                            {activeOccasion.themeProps.greeting}
                                        </h3>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowBanner(false)}
                                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--border-color)] hover:bg-[var(--accent-color)]/10 transition-colors group"
                                >
                                    <X size={18} className="text-[var(--text-color)] opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500" />
                                </button>
                            </div>

                            {/* Luxury Progression Bar */}
                            <motion.div
                                className="h-1.5 w-full"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 2.5, delay: 0.5 }}
                                style={{
                                    background: activeOccasion.themeProps.gradient,
                                    transformOrigin: 'left'
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemeManager;
