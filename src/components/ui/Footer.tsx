"use client";

import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/AishwaryaDahal7", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(245,158,11,0.2)] bg-[#E0EBF5] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          className="font-display text-2xl font-semibold gold-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Aishwarya Dahal
        </motion.p>

        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-[#64748B] hover:text-[#D97706] transition-colors duration-300"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-[#64748B] flex items-center gap-1.5">
          Built with{" "}
          <Heart size={12} className="text-[#FACC15] fill-[#FACC15]" /> by
          Aishwarya Dahal
        </p>
      </div>
    </footer>
  );
}
