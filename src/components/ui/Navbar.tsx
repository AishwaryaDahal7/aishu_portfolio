"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[rgba(239,246,255,0.92)] backdrop-blur-xl border-b border-[rgba(245,158,11,0.2)] shadow-sm"
            : "py-5 bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl font-semibold gold-text cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            AD
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "text-sm font-body font-medium transition-colors duration-300 tracking-wide relative group",
                    scrolled
                      ? "text-[#475569] hover:text-[#B45309]"
                      : "text-[#F1F5F9] hover:text-[#FACC15]",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300",
                      scrolled ? "bg-[#B45309]" : "bg-[#FACC15]",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              onClick={() => handleNav("#contact")}
              className={cn(
                "px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 tracking-wide",
                scrolled
                  ? "glass-card text-[#B45309] border border-[rgba(180,83,9,0.4)] hover:border-[rgba(180,83,9,0.7)] hover:bg-[rgba(180,83,9,0.06)]"
                  : "backdrop-blur-md bg-[rgba(2,6,23,0.3)] text-[#FACC15] border border-[rgba(250,204,21,0.5)] hover:border-[rgba(250,204,21,0.8)] hover:bg-[rgba(2,6,23,0.5)]",
              )}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className={cn(
              "md:hidden transition-colors",
              scrolled
                ? "text-[#475569] hover:text-[#B45309]"
                : "text-[#F1F5F9] hover:text-[#FACC15]",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[rgba(239,246,255,0.97)] backdrop-blur-xl border-b border-[rgba(245,158,11,0.2)] py-6 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left text-base font-medium text-[#334155] hover:text-[#D97706] transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
