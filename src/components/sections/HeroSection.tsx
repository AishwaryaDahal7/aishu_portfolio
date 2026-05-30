"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import GoldButton from "@/components/ui/GoldButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Fix React StrictMode double-mount: video is already loaded but onLoadedData won't fire again
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 2) {
      setVideoLoaded(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.ended || video.paused) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handleScrollDown = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <motion.div
        className="absolute inset-0 z-0 -bottom-24"
        style={{ y: videoY }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="hero-video absolute inset-0 w-full h-full"
        >
          <source
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/himalayan-sunrise.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Fallback gradient when video is absent */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${videoLoaded ? "opacity-0" : "opacity-100"}`}
          style={{
            background:
              "radial-gradient(ellipse 120% 60% at 50% 100%, rgba(245,158,11,0.25) 0%, rgba(217,119,6,0.12) 30%, rgba(2,6,23,0.95) 70%)",
          }}
        />
      </motion.div>

      {/* ── CINEMATIC OVERLAYS ── */}
      {/* Top gradient for navbar contrast */}
      <div
        className="absolute top-0 left-0 right-0 z-[11] pointer-events-none"
        style={{
          height: "18%",
          background:
            "linear-gradient(to bottom, rgba(2,6,23,0.45) 0%, transparent 100%)",
        }}
      />
      {/* Base dark overlay — thin strip only at bottom for text readability */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(2,6,23,0.25) 0%, rgba(2,6,23,0.06) 20%, transparent 32%, transparent 100%)",
        }}
      />

      {/* Vignette edges — bottom and sides only, not top */}
      <div
        className="absolute inset-0 z-11 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 110%, transparent 40%, rgba(2,6,23,0.2) 75%)",
        }}
      />

      {/* Golden horizon glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-12 pointer-events-none"
        style={{
          height: "45%",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.22) 0%, rgba(250,204,21,0.10) 40%, transparent 70%)",
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── MIST LAYERS ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ y: mistY }}
      >
        {/* Mist layer 1 - dense bottom */}
        <div
          className="mist-layer-1 absolute bottom-0 left-[-10%] w-[120%] h-[30%]"
          style={{
            background:
              "linear-gradient(to top, rgba(2,6,23,0.12) 0%, rgba(15,23,42,0.05) 40%, transparent 100%)",
            filter: "blur(16px)",
          }}
        />
        {/* Mist layer 2 - mid wisp */}
        <div
          className="mist-layer-2 absolute bottom-[8%] left-[-5%] w-[110%] h-[20%]"
          style={{
            background:
              "linear-gradient(to top, rgba(30,41,59,0.10) 0%, rgba(245,158,11,0.04) 50%, transparent 100%)",
            filter: "blur(32px)",
          }}
        />
        {/* Mist layer 3 - top whisp with faint golden tint */}
        <div
          className="mist-layer-3 absolute bottom-[18%] left-[-8%] w-[116%] h-[12%]"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>

      {/* ── HERO CONTENT ── */}
      <motion.div
        className="relative z-30 text-center px-6 max-w-5xl w-full mx-auto mt-[12vh]"
        style={{ y: textY }}
      >
        {/* Pre-title label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.2em] text-[#F59E0B] border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.06)] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse" />
            Software Engineering Portfolio
          </span>
        </motion.div>

        {/* Name is shown by the video itself */}

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-[clamp(0.85rem,2.2vw,1.1rem)] text-[#94A3B8] tracking-wide max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Software Engineering Student&nbsp;
          <span className="text-[rgba(250,204,21,0.5)]">|</span>&nbsp; Aspiring
          Full-Stack Developer&nbsp;
          <span className="text-[rgba(250,204,21,0.5)]">|</span>&nbsp; Building
          Modern Web Experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <GoldButton variant="primary" onClick={() => handleNavTo("projects")}>
            View Projects
            <ArrowRight size={15} />
          </GoldButton>
          <GoldButton variant="outline" onClick={() => handleNavTo("contact")}>
            Contact Me
          </GoldButton>
        </motion.div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        onClick={handleScrollDown}
      >
        <span className="font-mono text-[10px] tracking-[0.25em] text-[#475569] uppercase group-hover:text-[#FACC15] transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#475569] group-hover:text-[#FACC15] transition-colors"
        >
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* ── NOISE TEXTURE ── */}
      <div className="noise-overlay absolute inset-0 z-25 pointer-events-none opacity-30" />
    </section>
  );
}
