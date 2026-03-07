"use client";

import Hero from "@/components/sections/hero";
import GridFeatures from "@/components/sections/grid-features";
import Cabinet from "@/components/sections/cabinet";
import Story from "@/components/sections/story";
import Reviews from "@/components/sections/reviews";
import FAQ from "@/components/sections/faq";
import CartSidebar from "@/components/cart-sidebar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <Hero />
      <GridFeatures />
      <Cabinet />
      <Story />
      <Reviews />
      <FAQ />

      <footer className="py-20 bg-[var(--bg-color)] border-t border-[var(--border-color)] text-center px-6 transition-colors duration-1000">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-10">
          <a
            href="https://wa.me/919546243078"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform flex items-center justify-center gap-3 group"
          >
            <img
              src="/images/blingish/whats.png"
              alt="WhatsApp"
              width={20}
              height={20}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent-color)]">WhatsApp</span>
          </a>

          <a
            href="https://www.facebook.com/people/Blingish-Jewels/61587587948549/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform flex items-center justify-center gap-3 group text-[var(--text-color)]"
          >
            <div className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Facebook</span>
          </a>

          <a
            href="mailto:blingishjewels@gmail.com"
            className="hover:scale-110 transition-transform flex items-center justify-center gap-3 group text-[var(--text-color)]"
          >
            <div className="w-5 h-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Email</span>
          </a>
        </div>

        <p className="text-[10px] tracking-[0.4em] uppercase text-[var(--text-color)] opacity-40 font-light">
          &copy; 2026 BLINGISH JEWELRY. ALL RIGHTS
        </p>
      </footer>

      <CartSidebar />
    </motion.main>
  );
}
