"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
  status: "completed" | "current";
}

const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Started Bachelor's Journey",
    description:
      "Enrolled in a bachelor's program in Software Engineering / Computer Science, beginning a dedicated path into the world of technology and problem-solving.",
    icon: "🎓",
    status: "completed",
  },
  {
    year: "2022",
    title: "Programming Fundamentals",
    description:
      "Mastered core programming concepts through C++ and Java — data structures, algorithms, OOP principles, and the logic that powers software at its base.",
    icon: "⚙️",
    status: "completed",
  },
  {
    year: "2023",
    title: "Entered the Web World",
    description:
      "Discovered a deep passion for web development. Started building modern, interactive web applications with React and Next.js, embracing component-based thinking.",
    icon: "🌐",
    status: "completed",
  },
  {
    year: "2024",
    title: "Backend & Databases",
    description:
      "Explored the full stack — integrating Supabase for databases and authentication, understanding how data flows from client to server and back.",
    icon: "🗄️",
    status: "completed",
  },
  {
    year: "2025",
    title: "Building Real Products",
    description:
      "Currently improving full-stack development skills, UI/UX design sensibility, and software engineering fundamentals while shipping real projects for real users.",
    icon: "🚀",
    status: "current",
  },
];

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }
      }
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative flex items-center gap-0 mb-12 last:mb-0 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      } md:flex-row md:flex-none`}
    >
      {/* Card — desktop alternates, mobile always right */}
      <div
        className={`w-full md:w-[calc(50%-2.5rem)] ${isLeft ? "md:text-right md:pr-8" : "md:ml-auto md:text-left md:pl-8"} pl-12 md:pl-0`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.25 }}
          className="glass-card rounded-2xl p-6 gold-glow cursor-default group"
          style={{
            background:
              item.status === "current"
                ? "rgba(245, 158, 11, 0.1)"
                : "rgba(255, 255, 255, 0.7)",
            border:
              item.status === "current"
                ? "1px solid rgba(245, 158, 11, 0.4)"
                : "1px solid rgba(245, 158, 11, 0.2)",
          }}
        >
          {item.status === "current" && (
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-[#FACC15] uppercase">
                Currently Here
              </span>
            </div>
          )}
          <div
            className={`flex items-center gap-2 mb-2 ${isLeft ? "md:justify-end" : ""}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-mono text-xs tracking-widest text-[#B45309]">
              {item.year}
            </span>
          </div>
          <h3 className="font-display font-semibold text-lg text-[#0F172A] mb-2">
            {item.title}
          </h3>
          <p className="font-body text-[#334155] text-sm leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>

      {/* Center dot — hidden on mobile, shown via absolute positioning */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
          className="relative w-5 h-5 rounded-full flex items-center justify-center"
          style={{
            background:
              item.status === "current"
                ? "radial-gradient(circle, #FACC15, #F59E0B)"
                : "radial-gradient(circle, rgba(250,204,21,0.6), rgba(245,158,11,0.3))",
            boxShadow:
              item.status === "current"
                ? "0 0 16px rgba(250,204,21,0.7), 0 0 32px rgba(250,204,21,0.3)"
                : "0 0 10px rgba(250,204,21,0.3)",
          }}
        >
          {item.status === "current" && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(250,204,21,0.5)" }}
              animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>

      {/* Mobile dot */}
      <div className="md:hidden absolute left-0 top-6 z-10">
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background:
              item.status === "current" ? "#FACC15" : "rgba(250,204,21,0.5)",
            boxShadow: "0 0 10px rgba(250,204,21,0.4)",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <SectionWrapper id="journey" className="bg-[#E8F2FF]">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(250,204,21,0.03) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-px bg-[#FACC15]" />
            <span className="font-mono text-xs tracking-[0.2em] text-[#B45309] uppercase">
              My Journey
            </span>
            <div className="w-8 h-px bg-[#FACC15]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-[#0F172A]"
          >
            The <span className="gold-text">Learning Path</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div
              className="timeline-connector w-full h-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FACC15] to-[rgba(250,204,21,0.1)]" />

          {/* Items */}
          <div>
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
