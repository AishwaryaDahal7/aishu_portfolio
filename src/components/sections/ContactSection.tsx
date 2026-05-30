"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Github, Send, CheckCircle2, MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GoldButton from "@/components/ui/GoldButton";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/AishwaryaDahal7",
    href: "https://github.com/AishwaryaDahal7",
    color: "#94A3B8",
  },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `From: ${form.name}\nReply-to: ${form.email}\n\n${form.message}`,
    );
    window.open(`mailto:your@email.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" className="bg-[#EFF6FF]">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 60%, rgba(245,158,11,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FACC15]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#B45309] uppercase">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-[#FACC15]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-[#0F172A]"
          >
            Let&apos;s <span className="gold-text">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="font-body text-[#64748B] mt-3 text-sm max-w-lg mx-auto"
          >
            Whether you have a project idea, an opportunity, or just want to say
            hello — my inbox is always open.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            {/* Location */}
            <div className="flex items-center gap-3 text-[#64748B]">
              <MapPin size={16} className="text-[#B45309] flex-shrink-0" />
              <span className="font-body text-sm">Nepal 🇳🇵</span>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                <span className="font-mono text-xs tracking-widest text-[#34D399] uppercase">
                  Available for opportunities
                </span>
              </div>
              <p className="font-body text-[#64748B] text-xs leading-relaxed">
                Open to internships, freelance projects, collaborations, and
                full-time roles starting 2026.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
                  }
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 group transition-all duration-300"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: `${color}18`, color }}
                  >
                    <Icon size={15} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase">
                      {label}
                    </p>
                    <p className="font-body text-xs text-[#64748B] group-hover:text-[#0F172A] transition-colors truncate">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm font-body"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="contact-input w-full px-4 py-3 rounded-xl text-sm font-body"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-mono text-[10px] tracking-widest text-[#64748B] uppercase block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="contact-input w-full px-4 py-3 rounded-xl text-sm font-body resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <p className="font-mono text-[10px] text-[#64748B] tracking-wide">
                  I&apos;ll reply within 24 hours.
                </p>
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      className="flex items-center gap-2 text-[#34D399] font-body text-sm font-medium"
                    >
                      <CheckCircle2 size={16} />
                      Message sent!
                    </motion.div>
                  ) : (
                    <motion.div
                      key="btn"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <GoldButton type="submit" variant="primary">
                        Send Message
                        <Send size={14} />
                      </GoldButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
