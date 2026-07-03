"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layers, Globe, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Image from "next/image";

const traits = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing readable, maintainable, purposeful code.",
  },
  {
    icon: Layers,
    title: "Full-Stack Vision",
    desc: "From UI pixels to database queries — end to end.",
  },
  {
    icon: Globe,
    title: "Modern Web",
    desc: "React, Next.js, Tailwind — the tools of today.",
  },
  {
    icon: BookOpen,
    title: "Always Learning",
    desc: "Curiosity is the engine, every project a lesson.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });

  return (
    <SectionWrapper id="about" className="bg-[#EFF6FF]">
      {/* Subtle background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 h-px bg-[#FACC15]" />
          <span className="font-mono text-xs tracking-[0.2em] text-[#B45309] uppercase">
            About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-tight text-[#0F172A] mb-6"
            >
              Crafting software that <span className="gold-text">matters.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-4 text-[#334155] leading-relaxed font-body text-[0.95rem]"
            >
              <p>
                I&apos;m{" "}
                <span className="text-[#0F172A] font-medium">
                  Aishwarya Dahal
                </span>
                , a bachelor&apos;s student majoring in Software Engineering. I&apos;m passionate about turning ideas into
                clean, modern digital experiences that solve real problems.
              </p>
              <p>
                My focus lies in{" "}
                <span className="text-[#B45309]">web development</span> —
                building fast, responsive, and accessible interfaces with React
                and Next.js — while also deepening my understanding of back-end
                systems, databases, and software architecture.
              </p>
              <p>
                I believe great software is both technically sound and
                thoughtfully designed. Every project I build is an opportunity
                to grow, ship something useful, and push closer to becoming the
                full-stack engineer I&apos;m striving to be.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[rgba(245,158,11,0.2)]"
            >
              {[
                { label: "Projects Built", value: "3+" },
                { label: "Technologies", value: "12+" },
                { label: "Commitment", value: "∞" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-semibold gold-text">
                    {value}
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-[#64748B] mt-1 uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo + trait cards */}
          <div className="flex flex-col gap-6">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full aspect-square max-w-[280px] mx-auto rounded-2xl overflow-hidden ring-2 ring-[rgba(245,158,11,0.35)] shadow-[0_8px_32px_rgba(245,158,11,0.15)]"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/photos/aishwarya.jpg`}
                alt="Aishwarya Dahal"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-4">
              {traits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 32, scale: 0.95 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card gold-glow rounded-2xl p-5 cursor-default group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[rgba(250,204,21,0.1)] flex items-center justify-center mb-3 group-hover:bg-[rgba(250,204,21,0.16)] transition-colors">
                    <Icon size={18} className="text-[#FACC15]" />
                  </div>
                  <h3 className="font-body font-semibold text-[#0F172A] text-sm mb-1">
                    {title}
                  </h3>
                  <p className="font-body text-[#64748B] text-xs leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
