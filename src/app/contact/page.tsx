"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowLeft, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "919546243078";
        const text = `Hello Blingish,\n\nName: ${formData.name}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;

        const encodedMessage = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pt-32 pb-20 bg-[var(--bg-color)] min-h-screen"
        >
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="max-w-4xl mx-auto mb-10"
                >
                    <Link href="/" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400 hover:text-[var(--accent-color)] transition-colors">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-8 text-center text-[var(--text-color)]">
                        Contact Blingish
                    </h1>
                    <p className="text-[var(--text-color)] opacity-60 text-center mb-16 max-w-2xl mx-auto font-light leading-relaxed">
                        Have a question about a piece or interested in a custom commission? We'd love to hear from you. For quick answers regarding <span className="text-[var(--accent-color)] font-bold underline decoration-[var(--accent-color)]/20">Jewelry Care</span> or <span className="text-[var(--accent-color)] font-bold underline decoration-[var(--accent-color)]/20">Shipping</span>, try our AI Assistant in the bottom corner.
                    </p>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Info Section */}
                        <div className="flex flex-col gap-10">
                            <div className="flex gap-6 items-start">
                                <div className="p-3 bg-[var(--card-bg)] rounded-full shadow-sm border border-[var(--border-color)]">
                                    <MapPin size={20} className="text-[var(--accent-color)]" />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-medium mb-2 text-[var(--text-color)]">Our Studio</h3>
                                    <p className="text-sm text-[var(--text-color)] opacity-60 font-light leading-relaxed italic">
                                        In Your Heart<br />
                                        Always and Forever
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="p-3 bg-[var(--card-bg)] rounded-full shadow-sm border border-[var(--border-color)]">
                                    <Phone size={20} className="text-[var(--accent-color)]" />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-medium mb-2 text-[var(--text-color)]">Phone</h3>
                                    <p className="text-sm font-bold text-[var(--text-color)]">
                                        +91 95462 43078
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="p-3 bg-[var(--card-bg)] rounded-full shadow-sm border border-[var(--border-color)]">
                                    <Mail size={20} className="text-[var(--accent-color)]" />
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-medium mb-2 text-[var(--text-color)]">Email</h3>
                                    <p className="text-sm font-bold text-[var(--text-color)]">
                                        blingishjewels@gmail.com
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://www.facebook.com/people/Blingish-Jewels/61587587948549/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-6 items-start group"
                            >
                                <div className="p-3 bg-[var(--card-bg)] rounded-full shadow-sm border border-[var(--border-color)] group-hover:bg-[#1877F2] group-hover:text-white transition-all duration-500">
                                    <Facebook size={20} className="transition-colors" />
                                </div>
                                <div className="border-b border-transparent group-hover:border-[#1877F2]/20 pb-1 transition-all">
                                    <h3 className="text-xs uppercase tracking-widest font-medium mb-2 text-[var(--text-color)]">Facebook</h3>
                                    <p className="text-sm text-[#1877F2] font-bold tracking-widest">
                                        Blingish Jewels
                                    </p>
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/blingish_jewels_?igsh=YXUxNjUyemUxZ2x4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-6 items-start group"
                            >
                                <div className="p-3 bg-[var(--card-bg)] rounded-full shadow-sm border border-[var(--border-color)] group-hover:bg-[var(--accent-color)] group-hover:text-black transition-all duration-500">
                                    <Instagram size={20} className="transition-colors" />
                                </div>
                                <div className="border-b border-transparent group-hover:border-[var(--accent-color)]/20 pb-1 transition-all">
                                    <h3 className="text-xs uppercase tracking-widest font-medium mb-2 text-[var(--text-color)]">Instagram</h3>
                                    <p className="text-sm text-[var(--accent-color)] font-bold tracking-widest">
                                        @blingish_jewels_
                                    </p>
                                </div>
                            </a>
                        </div>

                        {/* Form Section */}
                        <motion.form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const phoneNumber = "919546243078";
                                const text = `Hello Blingish,\n\nName: ${formData.name}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`;
                                const encodedMessage = encodeURIComponent(text);
                                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[var(--card-bg)] p-8 md:p-12 shadow-sm rounded-[2rem] border border-[var(--border-color)] flex flex-col gap-6"
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-color)] opacity-40">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--accent-color)] outline-none transition-colors font-light text-sm text-[var(--text-color)]"
                                    placeholder="Harsh"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-color)] opacity-40">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--accent-color)] outline-none transition-colors font-light text-sm text-[var(--text-color)]"
                                    placeholder="Custom Commission"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-[var(--text-color)] opacity-40">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-[var(--border-color)] py-2 focus:border-[var(--accent-color)] outline-none transition-colors font-light text-sm text-[var(--text-color)] resize-none"
                                    placeholder="Tell us what's on your mind..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-6 bg-black dark:bg-[var(--accent-color)] text-white dark:text-black py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-brand-maroon dark:hover:bg-brand-gold transition-luxury flex items-center justify-center gap-3 group"
                            >
                                <span>Send Message via WhatsApp</span>
                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </motion.main>
    );
};

export default ContactPage;
