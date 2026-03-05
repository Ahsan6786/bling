"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Sparkles, ShieldCheck, Truck, RotateCcw, Gem, HelpCircle, ShoppingBag, Info, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: Date;
}

const KNOWLEDGE_BASE: Record<string, { keywords: string[], answer: string, route?: string }> = {
    care: {
        keywords: ["care", "clean", "wash", "protect", "maintain", "storage", "water", "perfume", "sweat"],
        answer: "To keep your Blingish jewelry in pristine condition:\n• Avoid contact with water, perfumes, and hairsprays.\n• Store each piece separately in its soft pouch/box to prevent scratches.\n• Clean with a dry, soft cloth after each wear.\n• Since our pieces are gold-toned/plated, avoiding moisture is key to longevity."
    },
    shipping: {
        keywords: ["shipping", "delivery", "track", "courier", "time", "days", "india"],
        answer: "We offer secure shipping across India! Standard delivery typically takes 5-7 business days. You will receive a tracking link via WhatsApp/Email once your order is dispatched."
    },
    international: {
        keywords: ["international", "worldwide", "global", "export", "outside india", "usa", "uk"],
        answer: "Currently, Blingish exclusively delivers within India. We do not offer international shipping at this time."
    },
    materials: {
        keywords: ["gold", "real", "pure", "diamond", "metal", "plated", "original", "material"],
        answer: "Blingish pieces are high-quality artisanal jewelry with premium gold-toned/matt finishes. They are not solid gold or real diamonds, which allows us to offer stunning, accessible luxury designs for everyday style."
    },
    custom: {
        keywords: ["custom", "personalize", "make", "own", "order", "bespoke", "design"],
        answer: "Currently, we do not offer customization or bespoke creation services. Our collection is carefully curated and ready-to-wear."
    },
    returns: {
        keywords: ["return", "exchange", "refund", "cancel", "defect"],
        answer: "We handle returns and exchanges on a case-by-case basis, primarily for transport-related defects. Please contact us within 24 hours of delivery with unboxing proof for assistance."
    },
    collection: {
        keywords: ["collection", "buy", "shop", "items", "products", "earrings", "pendant", "catalog"],
        answer: "Explore our latest collection of artisanal earrings and pendants right here on our website. Would you like me to take you to the Collection page?",
        route: "/collection"
    },
    contact: {
        keywords: ["contact", "reach", "support", "help", "whatsapp", "phone", "email", "address"],
        answer: "You can reach us directly via WhatsApp at +91 95462 43078 or through our Contact page for any specialized queries.",
        route: "/contact"
    },
    story: {
        keywords: ["story", "about", "who", "brand", "heritage", "legacy"],
        answer: "Blingish is where Art meets Legacy. We blend modern design with artisanal craftsmanship to create jewelry that tells a story. Learn more on our Story section.",
        route: "/#story"
    },
    reviews: {
        keywords: ["review", "customer", "truth", "genuine", "feedback", "rating"],
        answer: "Our customers love their Blingish pieces! You can read their stories on our dedicated Reviews page.",
        route: "/reviews"
    }
};

const GREETINGS = ["hello", "hi", "hey", "hola", "greetings", "good morning", "good evening"];

const Chatbot = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Namaste! Welcome to Blingish. I'm your virtual concierge. How can I assist you with our artisanal jewelry today?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && window.innerWidth < 768) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(text);

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponse.answer,
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);

            if (botResponse.route) {
                setTimeout(() => {
                    const navMsg: Message = {
                        id: (Date.now() + 2).toString(),
                        text: "Click here to view this page.",
                        sender: "bot",
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, navMsg]);
                }, 500);
            }

            if (botResponse.isUnknown) {
                setTimeout(() => {
                    const whatsappMsg: Message = {
                        id: (Date.now() + 3).toString(),
                        text: "For more specialized help, you can chat directly with our team on WhatsApp.",
                        sender: "bot",
                        timestamp: new Date()
                    };
                    setMessages(prev => [...prev, whatsappMsg]);
                }, 800);
            }
        }, 1000);
    };

    const getBotResponse = (input: string): { answer: string, route?: string, isUnknown?: boolean } => {
        const lowerInput = input.toLowerCase();

        if (GREETINGS.some(word => lowerInput.includes(word))) {
            return { answer: "Hello! I can help you with jewelry care, shipping updates, finding products, or brand information. What's on your mind?" };
        }

        for (const key in KNOWLEDGE_BASE) {
            const item = KNOWLEDGE_BASE[key];
            if (item.keywords.some(word => lowerInput.includes(word))) {
                return { answer: item.answer, route: item.route };
            }
        }

        return {
            answer: "That's an interesting question about our artisanship! While I'm still learning every detail of our studio, I can certainly put you in touch with our founders.",
            isUnknown: true
        };
    };

    const quickActions = [
        { label: "Shop Collection", icon: <ShoppingBag size={14} />, route: "/collection" },
        { label: "Jewelry Care", icon: <RotateCcw size={14} /> },
        { label: "Delivery Info", icon: <Truck size={14} /> },
        { label: "Our Story", icon: <Info size={14} />, route: "/#story" }
    ];

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[200]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 100 }}
                        className="fixed inset-0 md:absolute md:inset-auto md:bottom-20 md:right-0 w-full h-full md:w-[400px] md:h-[650px] bg-[var(--bg-color)] md:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden z-[210] md:border md:border-[var(--border-color)]"
                    >
                        {/* Header */}
                        <div className="bg-brand-maroon p-6 text-white safe-top">
                            <div className="flex justify-between items-center mb-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                                        <Gem size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-widest uppercase">Blingish Assistant</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                            <span className="text-[10px] opacity-60 uppercase tracking-widest">Always Online</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow overflow-y-auto p-4 md:p-6 flex flex-col gap-4 bg-[var(--bg-color)]">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-[1.25rem] text-[13px] md:text-sm leading-relaxed ${msg.sender === "user"
                                            ? "bg-brand-maroon text-white rounded-tr-none shadow-lg shadow-brand-maroon/10"
                                            : "bg-[var(--card-bg)] text-[var(--text-color)] shadow-sm border border-[var(--border-color)] rounded-tl-none"
                                            }`}
                                    >
                                        <p className="whitespace-pre-line">{msg.text}</p>

                                        {/* Navigation Link UI */}
                                        {msg.text.includes("Click here to view this page") && (
                                            <button
                                                onClick={() => {
                                                    const lastBotMsg = [...messages].reverse().find(m => m.sender === "bot" && m.id !== msg.id);
                                                    const matchedEntry = Object.values(KNOWLEDGE_BASE).find(item => item.answer === lastBotMsg?.text);
                                                    if (matchedEntry?.route) {
                                                        router.push(matchedEntry.route);
                                                        setIsOpen(false);
                                                    }
                                                }}
                                                className="mt-4 flex items-center gap-2 px-4 py-2 bg-brand-maroon text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-brown transition-colors w-full justify-center"
                                            >
                                                Go to Page
                                            </button>
                                        )}

                                        {msg.text.includes("chat directly with our team on WhatsApp") && (
                                            <button
                                                onClick={() => {
                                                    const lastUserMsg = [...messages].reverse().find(m => m.sender === "user");
                                                    const phoneNumber = "919546243078";
                                                    const message = lastUserMsg ? `Hello Blingish, I have a question: "${lastUserMsg.text}"` : "Hello Blingish, I need help.";
                                                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
                                                }}
                                                className="mt-4 flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-green-700 transition-colors w-full justify-center"
                                            >
                                                <Phone size={12} />
                                                WhatsApp Support
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-[var(--card-bg)] p-4 rounded-[1.25rem] rounded-tl-none shadow-sm border border-[var(--border-color)] flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-brand-maroon/30 rounded-full animate-bounce" />
                                        <span className="w-1.5 h-1.5 bg-brand-maroon/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <span className="w-1.5 h-1.5 bg-brand-maroon/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 py-3 bg-[var(--bg-color)] flex gap-2 overflow-x-auto no-scrollbar border-t border-[var(--border-color)] mb-2">
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => {
                                        if (action.route) {
                                            router.push(action.route);
                                            setIsOpen(false);
                                        } else {
                                            handleSend(action.label);
                                        }
                                    }}
                                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full text-[10px] font-bold text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all shadow-sm active:scale-95"
                                >
                                    {action.icon}
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 md:p-6 bg-[var(--card-bg)] border-t border-[var(--border-color)] safe-bottom">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend();
                                }}
                                className="flex gap-3"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Ask anything about Blingish..."
                                    className="flex-grow bg-[var(--bg-color)] px-6 py-4 rounded-full text-sm outline-none focus:ring-1 focus:ring-[var(--accent-color)]/20 font-light border border-[var(--border-color)] text-[var(--text-color)]"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="w-12 h-12 bg-brand-maroon text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-maroon/20 disabled:opacity-50 disabled:scale-100"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-500 z-[220] group ${isOpen ? "bg-white text-brand-maroon md:rotate-90 hidden md:flex" : "bg-brand-maroon text-white"
                    }`}
            >
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <MessageSquare size={26} className="md:size-[28px] absolute transition-transform group-hover:scale-0" />
                        <Sparkles size={22} className="md:size-[24px] absolute scale-0 transition-transform group-hover:scale-110 text-brand-cream" />
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
