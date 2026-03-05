"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { Trash2, ShoppingBag, ArrowLeft, Ticket, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
    <img
        src="/images/blingish/whats.png"
        alt="WhatsApp"
        width={size}
        height={size}
        className={className}
    />
);

const CartClient = () => {
    const { cart, removeFromCart, updateQuantity, total } = useCart();
    const [isCouponApplied, setIsCouponApplied] = useState(false);

    const discountRate = 0.05;
    const isEligibleForCoupon = total > 999;

    // Auto-remove coupon if total drops below threshold
    React.useEffect(() => {
        if (!isEligibleForCoupon && isCouponApplied) {
            setIsCouponApplied(false);
        }
    }, [total, isEligibleForCoupon, isCouponApplied]);

    const discountAmount = isCouponApplied ? Math.round(total * discountRate) : 0;
    const finalTotal = total - discountAmount;

    const handlePlaceOrder = () => {
        if (cart.length === 0) return;

        const phoneNumber = "919546243078";
        let message = "Hello Blingish, I would like to place an order:\n\n";

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${item.price === 0 ? "XX" : (item.price * item.quantity).toLocaleString('en-IN')}\n`;
        });

        if (isCouponApplied) {
            message += `\nSubtotal: ₹${total.toLocaleString('en-IN')}`;
            message += `\nCoupon Discount (5%): -₹${discountAmount.toLocaleString('en-IN')}`;
            message += `\n*Final Total: ₹${finalTotal.toLocaleString('en-IN')}*`;
        } else {
            message += `\n*Total: ₹${total > 0 ? total.toLocaleString('en-IN') : "XX"}*`;
        }

        message += "\n\nKindly let me know the courier charges and next steps.";

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-h-screen bg-[var(--bg-color)] pt-28 pb-20"
        >
            <div className="max-w-3xl mx-auto px-5 md:px-8">

                {/* Back link */}
                <Link
                    href="/collection"
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors mb-10 group"
                >
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </Link>

                {/* Page Title */}
                <div className="mb-10 border-b border-[var(--border-color)] pb-8">
                    <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] uppercase text-[var(--text-color)]">
                        Your <span className="italic font-serif">Cabinet</span>
                    </h1>
                    <p className="text-[9px] tracking-[0.3em] uppercase text-[var(--text-color)] opacity-40 font-bold mt-3">
                        {cart.reduce((sum, item) => sum + item.quantity, 0)} {cart.length === 1 && cart[0].quantity === 1 ? "item" : "items"} selected
                    </p>
                </div>

                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center text-center py-24"
                    >
                        <div className="w-16 h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center mb-8">
                            <ShoppingBag size={20} className="text-[var(--accent-color)] opacity-50" />
                        </div>
                        <p className="text-sm font-light tracking-widest uppercase opacity-50 mb-10">
                            Your cabinet is empty
                        </p>
                        <Link
                            href="/collection"
                            className="px-10 py-4 bg-[var(--text-color)] text-[var(--bg-color)] rounded-full text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[var(--accent-color)] transition-all duration-500"
                        >
                            Explore Collection
                        </Link>
                    </motion.div>
                ) : (
                    <div className="flex flex-col gap-12">

                        {/* Cart Items */}
                        <ul className="flex flex-col gap-4">
                            <AnimatePresence mode="popLayout">
                                {cart.map((item, idx) => (
                                    <motion.li
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ delay: idx * 0.08, duration: 0.5 }}
                                        className="flex items-center gap-5 p-4 md:p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] group"
                                    >
                                        {/* Image */}
                                        <Link
                                            href={`/products/${item.slug}`}
                                            className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-[var(--border-color)]"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </Link>

                                        {/* Info */}
                                        <div className="flex-1 min-w-0">
                                            <Link href={`/products/${item.slug}`}>
                                                <h3 className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors truncate mb-1">
                                                    {item.name}
                                                </h3>
                                            </Link>
                                            <p className="text-[9px] uppercase tracking-widest text-gray-400 font-medium mb-3">
                                                Fine Jewelry Piece
                                            </p>

                                            {/* Quantity and Price Row */}
                                            <div className="flex items-center justify-between mt-2">
                                                <div className="flex items-center gap-4 bg-black/5 dark:bg-white/5 rounded-full px-4 py-2 border border-[var(--border-color)]">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="text-lg font-light hover:text-[var(--accent-color)] transition-colors w-6"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-xs font-bold w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="text-lg font-light hover:text-[var(--accent-color)] transition-colors w-6"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="text-base md:text-lg font-light tracking-wider text-[var(--text-color)]">
                                                    {item.price === 0 ? "₹XX" : `₹${item.price.toLocaleString('en-IN')}`}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Remove */}
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-gray-300 hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-300 flex-shrink-0"
                                        >
                                            <Trash2 size={15} strokeWidth={1.5} />
                                        </button>
                                    </motion.li>
                                ))}
                            </AnimatePresence>
                        </ul>

                        {/* Coupon Section */}
                        {isEligibleForCoupon && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`p-6 rounded-2xl border ${isCouponApplied ? 'border-green-600/30 bg-green-600/5' : 'border-dashed border-[var(--accent-color)]/30 bg-[var(--accent-color)]/5'} transition-all duration-500`}
                            >
                                <div className="flex justify-between items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-full ${isCouponApplied ? 'bg-green-600/10' : 'bg-[var(--accent-color)]/10'}`}>
                                            <Ticket size={20} className={isCouponApplied ? 'text-green-600' : 'text-[var(--accent-color)]'} />
                                        </div>
                                        <div>
                                            <h3 className="text-xs uppercase tracking-widest font-bold text-[var(--text-color)]">
                                                {isCouponApplied ? 'Coupon Applied!' : '5% Discount Available'}
                                            </h3>
                                            <p className="text-[9px] uppercase tracking-widest text-gray-400 mt-1">
                                                Use code <span className="text-[var(--accent-color)] font-bold">BLING5</span> on checkout
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setIsCouponApplied(!isCouponApplied)}
                                        className={`px-6 py-2 rounded-full text-[9px] uppercase tracking-widest font-bold transition-all duration-500 ${isCouponApplied
                                            ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                                            : 'bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)]'
                                            }`}
                                    >
                                        {isCouponApplied ? 'Applied' : 'Apply'}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Order Summary */}
                        <div className="rounded-2xl border border-[var(--border-color)] bg-[var(--card-bg)] overflow-hidden">
                            <div className="p-6 md:p-8">
                                <h2 className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-40 text-[var(--text-color)] mb-6">
                                    Order Summary
                                </h2>

                                <div className="flex flex-col gap-4 text-xs tracking-widest uppercase">
                                    <div className="flex justify-between items-center">
                                        <span className="opacity-40">Subtotal</span>
                                        <span className="font-bold text-[var(--text-color)]">
                                            {total > 0 ? `₹${total.toLocaleString('en-IN')}` : "₹XX"}
                                        </span>
                                    </div>
                                    {isCouponApplied && (
                                        <div className="flex justify-between items-center text-green-600">
                                            <span className="opacity-60">Coupon Discount (5%)</span>
                                            <span className="font-bold">-₹{discountAmount.toLocaleString('en-IN')}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between items-center">
                                        <span className="opacity-40">Courier</span>
                                        <span className="text-[var(--accent-color)] font-bold text-[9px]">
                                            Will be informed on WhatsApp
                                        </span>
                                    </div>
                                </div>

                                <div className="my-6 h-px bg-[var(--border-color)]" />

                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-[var(--text-color)]">Total</span>
                                    <span className="text-2xl md:text-3xl font-light tracking-tighter text-[var(--accent-color)]">
                                        {finalTotal > 0 ? `₹${finalTotal.toLocaleString('en-IN')}` : "₹XX"}
                                    </span>
                                </div>

                                {/* WhatsApp CTA */}
                                <button
                                    onClick={handlePlaceOrder}
                                    disabled={cart.length === 0}
                                    className="w-full flex items-center justify-center gap-3 bg-[#1a1a1a] text-white py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#2D000D] transition-all duration-500 disabled:bg-gray-100 disabled:text-gray-400 shadow-lg group relative overflow-hidden"
                                >
                                    <WhatsAppIcon size={18} className="relative z-10" />
                                    <span className="relative z-10">Finalize via WhatsApp</span>
                                    <div className="absolute inset-0 bg-[#2D000D] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>

                                <p className="text-[8px] text-center text-gray-400 tracking-widest uppercase italic mt-5 leading-relaxed opacity-70">
                                    Each piece is handcrafted for you — your order request initiates the process.
                                </p>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </motion.main>
    );
};

export default CartClient;
