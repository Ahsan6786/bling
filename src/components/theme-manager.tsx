"use client";

import { useEffect, useState, useMemo } from "react";
import { getCurrentOccasion, Occasion } from "@/lib/occasions";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

// Individual Particle Component
const Particle = ({ type, color }: { type?: string, color: string }) => {
    const randomX = useMemo(() => Math.random() * 100, []);
    const randomDelay = useMemo(() => Math.random() * 20, []);
    const randomDuration = useMemo(() => 15 + Math.random() * 25, []);
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
                opacity: [0, 0.25, 0.25, 0.25, 0], // Significantly lowered opacity as requested
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
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const occasion = getCurrentOccasion();
        if (occasion) {
            setActiveOccasion(occasion);

            // Check if shown in this session
            const hasSeenOverlay = sessionStorage.getItem(`seen_occasion_${occasion.name}`);
            if (!hasSeenOverlay) {
                // Show fullscreen celebrate overlay after a short delay
                const timer = setTimeout(() => {
                    setShowOverlay(true);
                    sessionStorage.setItem(`seen_occasion_${occasion.name}`, "true");
                }, 1500);
                return () => clearTimeout(timer);
            }

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
        <>
            {/* Immersive Particles - Lowered Opacity */}
            <div className="fixed inset-0 pointer-events-none z-[40] overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <Particle
                        key={i}
                        type={activeOccasion.themeProps.particleType}
                        color={activeOccasion.themeProps.accent}
                    />
                ))}
            </div>

            {/* Premium Fullscreen Occasion Celebration */}
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-xl px-6"
                    >
                        {/* Background Animated Glow */}
                        <motion.div
                            className="absolute inset-0 opacity-30"
                            style={{ background: activeOccasion.themeProps.gradient }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 10, repeat: Infinity }}
                        />

                        <motion.div
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 30, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-2xl bg-[var(--card-bg)] rounded-[3rem] p-12 md:p-20 text-center border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
                        >
                            {/* Icon / Emoji Section */}
                            <motion.div
                                initial={{ rotate: -15, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ delay: 0.3, type: "spring" }}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] mx-auto mb-10 flex items-center justify-center shadow-2xl relative overflow-hidden"
                                style={{ background: activeOccasion.themeProps.gradient }}
                            >
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                                <span className="text-5xl md:text-7xl relative z-10 drop-shadow-lg">
                                    {activeOccasion.themeProps.emoji}
                                </span>
                            </motion.div>

                            {/* Text Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span
                                    className="text-[12px] uppercase tracking-[0.6em] font-black mb-6 block"
                                    style={{ color: activeOccasion.themeProps.accent }}
                                >
                                    {activeOccasion.name} Edition
                                </span>
                                <h2 className="text-4xl md:text-6xl font-serif italic text-[var(--text-color)] leading-[1.1] mb-8 drop-shadow-sm">
                                    {activeOccasion.themeProps.greeting}
                                </h2>
                                <p className="text-sm md:text-lg text-[var(--text-color)] opacity-60 max-w-md mx-auto leading-relaxed mb-12">
                                    A special celebration of our artisanal legacy, crafted just for this moment.
                                </p>
                            </motion.div>

                            {/* Action / Close */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col md:flex-row items-center justify-center gap-6"
                            >
                                <button
                                    onClick={() => setShowOverlay(false)}
                                    className="px-12 py-5 bg-[var(--accent-color)] text-white rounded-full text-[11px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:scale-105 transition-all duration-500"
                                >
                                    Explore Edition
                                </button>
                                <button
                                    onClick={() => setShowOverlay(false)}
                                    className="p-5 text-[var(--text-color)] opacity-40 hover:opacity-100 transition-opacity"
                                >
                                    <X size={24} />
                                </button>
                            </motion.div>

                            {/* Decorative Sparkles */}
                            <Sparkles
                                className="absolute top-12 left-12 opacity-20 animate-pulse"
                                style={{ color: activeOccasion.themeProps.accent }}
                                size={24}
                            />
                            <Sparkles
                                className="absolute bottom-12 right-12 opacity-20 animate-pulse"
                                style={{ color: activeOccasion.themeProps.accent }}
                                size={24}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemeManager;
