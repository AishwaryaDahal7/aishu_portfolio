"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import SectionWrapper from "@/components/ui/SectionWrapper";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  tech: string[];
  gradient: string;
  accent: string;
  emoji: string;
}

const projects: Project[] = [
  {
    title: "DuePulse",
    description:
      "A student-focused assignment and deadline tracking web app designed to help users manage academic tasks more efficiently.",
    longDesc:
      "Streamlined deadline management with smart reminders, priority tagging, and a clean dashboard overview for busy students.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    gradient: "from-[rgba(250,204,21,0.12)] to-[rgba(245,158,11,0.04)]",
    accent: "#FACC15",
    emoji: "⏱️",
  },
  {
    title: "Mountain Guide Nepal",
    description:
      "A web platform for exploring climbable mountains in Nepal, including cost, accommodation, best season, health services, travel options, and reviews.",
    longDesc:
      "An explorer's companion for Nepal's peaks — rich data on each mountain, visual maps, and curated travel logistics.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    gradient: "from-[rgba(16,185,129,0.10)] to-[rgba(5,150,105,0.04)]",
    accent: "#34D399",
    emoji: "🏔️",
  },
  {
    title: "Cinematic Portfolio",
    description:
      "A premium personal portfolio website inspired by Himalayan sunrise visuals, glassmorphism, parallax depth, and smooth motion.",
    longDesc:
      "This very portfolio — built with cinematic intent, golden aesthetics, and obsessive attention to motion design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-[rgba(99,102,241,0.10)] to-[rgba(139,92,246,0.04)]",
    accent: "#818CF8",
    emoji: "🎬",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48, scale: 0.94 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 48, scale: 0.94 }
      }
      transition={{
        duration: 0.75,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255, 255, 255, 0.65)",
        border: `1px solid rgba(245,158,11,0.15)`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition:
          "transform 0.15s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}50, transparent)`,
        }}
      />

      <div className="relative z-10 p-8">
        {/* Project header */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              background: `${project.accent}18`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            {project.emoji}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-2xl text-[#0F172A] mb-3 group-hover:text-[#0F172A] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-body text-[#334155] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full font-mono text-[11px] tracking-wide font-medium"
              style={{
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}28`,
                color: project.accent,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${project.accent}08, transparent)`,
        }}
      />
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <SectionWrapper id="projects" className="bg-[#EFF6FF]">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(250,204,21,0.04) 0%, transparent 60%)",
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
              Featured Work
            </span>
            <div className="w-8 h-px bg-[#FACC15]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2rem,5vw,3rem)] font-semibold text-[#0F172A]"
          >
            Things I&apos;ve <span className="gold-text">Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="font-body text-[#94A3B8] mt-3 text-sm max-w-lg mx-auto"
          >
            A selection of projects where I&apos;ve translated ideas into
            functional, well-crafted software.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
