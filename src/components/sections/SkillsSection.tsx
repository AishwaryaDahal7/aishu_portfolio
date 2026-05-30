"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

interface Skill {
  name: string;
  icon: string;
  level: number; // 0–100
  category: "frontend" | "language" | "tools" | "design";
}

const skills: Skill[] = [
  { name: "HTML", icon: "🌐", level: 92, category: "frontend" },
  { name: "CSS", icon: "🎨", level: 88, category: "frontend" },
  { name: "JavaScript", icon: "⚡", level: 84, category: "frontend" },
  { name: "TypeScript", icon: "🔷", level: 78, category: "frontend" },
  { name: "React", icon: "⚛️", level: 82, category: "frontend" },
  { name: "Next.js", icon: "▲", level: 80, category: "frontend" },
  { name: "Tailwind CSS", icon: "💨", level: 88, category: "frontend" },
  { name: "Java", icon: "☕", level: 74, category: "language" },
  { name: "C++", icon: "⚙️", level: 70, category: "language" },
  { name: "Git & GitHub", icon: "🐙", level: 82, category: "tools" },
  { name: "Supabase", icon: "🟢", level: 68, category: "tools" },
  { name: "UI/UX Design", icon: "✏️", level: 62, category: "design" },
];

const categoryColors: Record<Skill["category"], string> = {
  frontend: "rgba(245, 158, 11, 0.12)",
  language: "rgba(79, 70, 229, 0.12)",
  tools: "rgba(5, 150, 105, 0.12)",
  design: "rgba(225, 29, 72, 0.12)",
};

const categoryBorder: Record<Skill["category"], string> = {
  frontend: "rgba(245, 158, 11, 0.4)",
  language: "rgba(79, 70, 229, 0.4)",
  tools: "rgba(5, 150, 105, 0.4)",
  design: "rgba(225, 29, 72, 0.4)",
};

const categoryText: Record<Skill["category"], string> = {
  frontend: "#B45309",
  language: "#4338CA",
  tools: "#059669",
  design: "#E11D48",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.04,1.04,1.04)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, scale: 0.93 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 32, scale: 0.93 }
      }
      transition={{
        duration: 0.65,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="skill-badge-glow rounded-2xl p-5 cursor-default transition-all duration-150"
      style={{
        background: `rgba(255, 255, 255, 0.7)`,
        border: `1px solid ${categoryBorder[skill.category]}`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" role="img" aria-label={skill.name}>
          {skill.icon}
        </span>
        <span
          className="font-body font-semibold text-sm"
          style={{ color: categoryText[skill.category] }}
        >
          {skill.name}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 rounded-full bg-[rgba(15,23,42,0.1)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{
            duration: 1.1,
            delay: 0.4 + (index % 6) * 0.07,
            ease: "easeOut",
          }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${categoryText[skill.category]}99, ${categoryText[skill.category]})`,
          }}
        />
      </div>
      <p className="font-mono text-[10px] text-[#64748B] mt-1.5 text-right">
        {skill.level}%
      </p>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <SectionWrapper id="skills" className="bg-[#E8F2FF]">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(250,204,21,0.04) 0%, transparent 65%)",
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
              Technical Skills
            </span>
            <div className="w-8 h-px bg-[#FACC15]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-[#0F172A]"
          >
            Tools I <span className="gold-text">Work With</span>
          </motion.h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >
          {(
            [
              { label: "Frontend", color: "#B45309" },
              { label: "Languages", color: "#4338CA" },
              { label: "Tools", color: "#059669" },
              { label: "Design", color: "#E11D48" },
            ] as const
          ).map(({ label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
