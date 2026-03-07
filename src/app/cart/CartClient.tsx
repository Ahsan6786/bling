"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { Trash2, ShoppingBag, ArrowLeft, Ticket, CheckCircle2, Gift, Sparkles } from "lucide-react";
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
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

    const isEligibleFor30 = total > 2499;
    const isEligibleFor5 = total > 999 && total <= 2499;

    // Auto-update coupon based on eligibility
    React.useEffect(() => {
        if (total > 2499) {
            // Keep BLING30 if applied, or stay null
        } else if (total > 999) {
            if (appliedCoupon === 'BLING30') setAppliedCoupon('BLING5');
        } else {
            setAppliedCoupon(null);
        }
    }, [total, appliedCoupon]);

    const discountRate = appliedCoupon === 'BLING30' ? 0.30 : appliedCoupon === 'BLING5' ? 0.05 : 0;
    const discountAmount = Math.round(total * discountRate);
    const finalTotal = total - discountAmount;

    const handlePlaceOrder = () => {
        if (cart.length === 0) return;

        const phoneNumber = "919546243078";
        let message = "Hello Blingish, I would like to place an order:\n\n";

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${item.price === 0 ? "XX" : (item.price * item.quantity).toLocaleString('en-IN')}\n`;
        });

        if (appliedCoupon) {
            message += `\nSubtotal: ₹${total.toLocaleString('en-IN')}`;
            message += `\nCoupon Discount (${appliedCoupon === 'BLING30' ? '30%' : '5%'}): -₹${discountAmount.toLocaleString('en-IN')}`;
            message += `\n*Final Total: ₹${finalTotal.toLocaleString('en-IN')}*`;
        } else {
            message += `\n*Total: ₹${total > 0 ? total.toLocaleString('en-IN') : "XX"}*`;
        }

        message += "\n\nKindly let me know the courier charges and next steps.";

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");
    };

    const CouponCard = ({ code, rate, active }: { code: string, rate: number, active: boolean }) => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative flex bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-sm border border-[var(--border-color)] group"
        >
            {/* Ticket Left Side */}
            <div className="w-12 bg-[#F5E6D3] dark:bg-[#3D3022] flex items-center justify-center border-r border-dashed border-black/10 dark:border-white/10 relative">
                <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[var(--bg-color)] -translate-y-1/2" />
                <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-bold tracking-[0.2em] text-[#8B4A3A] dark:text-[#D4A574] uppercase">
                    {rate}% OFF
                </span>
            </div>

            {/* Ticket Main Content */}
            <div className="flex-1 p-5 flex justify-between items-center bg-[var(--card-bg)]">
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold tracking-widest text-[var(--text-color)] uppercase">{code}</h3>
                    <p className="text-[10px] text-green-600 dark:text-green-500 font-medium tracking-tight">
                        Save ₹{Math.round(total * (rate / 100)).toLocaleString('en-IN')} on this purchase!
                    </p>
                    <p className="text-[8px] text-[var(--text-color)] opacity-50 tracking-tight leading-relaxed max-w-[200px]">
                        Enjoy {rate}% discount on minimum order value of ₹{rate === 30 ? '2499' : '999'}. Use code {code} ...
                    </p>
                </div>
                <button
                    onClick={() => setAppliedCoupon(active ? null : code)}
                    className={`px-5 py-2 rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${active
                        ? 'bg-green-600 text-white'
                        : 'bg-[var(--text-color)] text-[var(--bg-color)] hover:bg-[var(--accent-color)] hover:text-white'
                        }`}
                >
                    {active ? 'Applied' : 'Apply'}
                </button>
            </div>
            {/* Perforated edge marks */}
            <div className="absolute top-1/2 right-[-6px] w-3 h-3 rounded-full bg-[var(--bg-color)] -translate-y-1/2" />
        </motion.div>
    );

    const FreeGiftSection = () => (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center gap-5 relative overflow-hidden group shadow-sm"
        >
            {/* Mystery Box Icon */}
            <div className="w-14 h-14 bg-[#F5E6D3] dark:bg-[#3D3022] rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-black/5 dark:border-white/5">
                <Gift size={24} className="text-[#8B4A3A] dark:text-[#D4A574]" />
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8B4A3A] dark:text-[#D4A574]">Reward Unlocked</span>
                </div>
                <h3 className="text-sm font-bold tracking-tight text-[var(--text-color)] mb-1">
                    Free Surprise Gift
                </h3>
                <p className="text-[11px] text-[var(--text-color)] opacity-60 leading-relaxed">
                    A beautiful mystery piece will be added to your first order.
                </p>
            </div>

            {/* Delicate Sparkle */}
            <Sparkles size={16} className="absolute top-4 right-4 text-[#D4A574] opacity-20" />
        </motion.div>
    );

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
                        {/* Gift Section */}
                        <FreeGiftSection />

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
                        <div className="flex flex-col gap-4">
                            <h2 className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-40 text-[var(--text-color)] px-2">
                                Available Offers
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {/* First Gift Reward */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="relative flex bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-sm border border-[var(--accent-color)]/30 group"
                                >
                                    <div className="w-12 bg-[var(--accent-color)]/10 flex items-center justify-center border-r border-dashed border-[var(--accent-color)]/20 relative">
                                        <div className="absolute top-1/2 -left-2 w-4 h-4 rounded-full bg-[var(--bg-color)] -translate-y-1/2" />
                                        <span className="rotate-[-90deg] whitespace-nowrap text-[8px] font-bold tracking-[0.2em] text-[var(--accent-color)] uppercase">
                                            FREE GIFT
                                        </span>
                                    </div>
                                    <div className="flex-1 p-5 flex justify-between items-center">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-sm font-bold tracking-widest text-[var(--text-color)] uppercase">FIRSTGIFT</h3>
                                            <p className="text-[10px] text-[var(--accent-color)] font-medium">Claim Your Mystery Piece</p>
                                            <p className="text-[8px] opacity-40 leading-relaxed uppercase tracking-wider">Valid on your first luxury purchase</p>
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600">
                                            <CheckCircle2 size={16} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Active</span>
                                        </div>
                                    </div>
                                </motion.div>
                                {total > 2499 && (
                                    <CouponCard code="BLING30" rate={30} active={appliedCoupon === 'BLING30'} />
                                )}
                                {total > 999 && (
                                    <CouponCard code="BLING5" rate={5} active={appliedCoupon === 'BLING5'} />
                                )}
                            </div>
                        </div>

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
                                    {appliedCoupon && (
                                        <div className="flex justify-between items-center text-green-600">
                                            <span className="opacity-60">Coupon Discount ({appliedCoupon === 'BLING30' ? '30%' : '5%'})</span>
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
