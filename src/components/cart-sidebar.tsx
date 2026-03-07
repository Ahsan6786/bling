"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/cart-context";
import { X, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <img
        src="/images/blingish/whats.png"
        alt="WhatsApp"
        width={size}
        height={size}
        className={className}
    />
);

const CartSidebar = () => {
    const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, total } = useCart();

    const handlePlaceOrder = () => {
        if (cart.length === 0) return;

        const phoneNumber = "919546243078";
        let message = "Hello Blingish, I would like to place an order:\n\n";

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - ${item.price === 0 ? "₹XX" : `₹${(item.price * item.quantity).toLocaleString()}`}\n`;
        });

        message += `\n*TOTAL: ₹${total.toLocaleString()}*`;
        message += "\n\nPlease let me know the next steps for payment and delivery.";

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[200]"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed top-0 right-0 w-full max-w-md h-full bg-[var(--bg-color)] text-[var(--text-color)] z-[210] shadow-2xl flex flex-col p-8 md:p-12 border-l border-[var(--border-color)]"
                    >
                        <div className="flex justify-between items-center mb-10 border-b border-[var(--border-color)] pb-6">
                            <h3 className="text-lg font-medium tracking-widest uppercase">
                                Your Cabinet
                            </h3>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-grow overflow-y-auto pr-4 mb-8 custom-scrollbar">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <p className="text-gray-400 italic mb-6">
                                        Your cabinet is empty.
                                    </p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="text-xs uppercase tracking-widest border-b border-[var(--text-color)] pb-1 hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-colors"
                                    >
                                        Continue Exploring
                                    </button>
                                </div>
                            ) : (
                                <ul className="flex flex-col gap-8">
                                    {cart.map((item) => (
                                        <motion.li
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex gap-4 items-center group"
                                        >
                                            <Link
                                                href={`/products/${item.slug}`}
                                                onClick={() => setIsCartOpen(false)}
                                                className="w-16 h-16 bg-[var(--card-bg-secondary)] rounded-lg overflow-hidden flex-shrink-0 border border-[var(--border-color)]"
                                            >
                                                <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                                            </Link>
                                            <div className="flex-grow">
                                                <Link
                                                    href={`/products/${item.slug}`}
                                                    onClick={() => setIsCartOpen(false)}
                                                    className="block hover:text-[var(--accent-color)] transition-colors"
                                                >
                                                    <h4 className="text-[10px] uppercase tracking-widest font-medium mb-1">{item.name}</h4>
                                                </Link>
                                                <p className="text-xs text-gray-400 mb-2">
                                                    {item.price === 0 ? "₹XX" : `₹${item.price.toLocaleString()}`}
                                                </p>
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-6 h-6 rounded-full border border-[var(--border-color)] flex items-center justify-center text-xs hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-6 h-6 rounded-full border border-[var(--border-color)] flex items-center justify-center text-xs hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Free Gift Notice */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mb-8 p-4 rounded-2xl bg-[#F5E6D3] dark:bg-[#3D3022] border border-[#8B4A3A]/10 flex items-center gap-4 group"
                        >
                            <div className="w-10 h-10 bg-white dark:bg-black/20 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B4A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect width="20" height="5" x="2" y="7" /><line x1="12" x2="12" y1="22" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] uppercase tracking-[0.1em] font-bold text-[#8B4A3A] dark:text-[#D4A574]">Free Mystery Gift</h4>
                                <p className="text-[9px] text-[#8B4A3A] dark:text-[#D4A574] opacity-70">Applied to your first order</p>
                            </div>
                        </motion.div>

                        <div className="border-t border-[var(--border-color)] pt-8">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-sm uppercase tracking-widest font-medium opacity-60">
                                    Total
                                </span>
                                <span className="text-xl font-medium text-[var(--accent-color)]">
                                    ₹{total.toLocaleString()}
                                </span>
                            </div>
                            <button
                                onClick={handlePlaceOrder}
                                disabled={cart.length === 0}
                                className="w-full bg-black dark:bg-[var(--accent-color)] text-white dark:text-black py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-maroon dark:hover:bg-brand-gold transition-luxury disabled:bg-gray-200 disabled:cursor-not-allowed mb-4 flex items-center justify-center gap-3 shadow-xl"
                            >
                                <WhatsAppIcon size={20} />
                                Place Order via WhatsApp
                            </button>
                            <Link
                                href="/cart"
                                onClick={() => setIsCartOpen(false)}
                                className="w-full border border-[var(--border-color)] text-[var(--text-color)] py-4 rounded-full text-[10px] uppercase tracking-widest font-bold text-center block hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-luxury"
                            >
                                View Full Cabinet
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
