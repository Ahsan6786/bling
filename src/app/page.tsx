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
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://wa.me/919546243078"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform flex items-center gap-3 group"
          >
            <img
              src="/images/blingish/whats.png"
              alt="WhatsApp"
              width={20}
              height={20}
              className="opacity-80 group-hover:opacity-100 transition-opacity"
            />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--accent-color)]">WhatsApp Us</span>
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
