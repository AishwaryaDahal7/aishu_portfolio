# Aishwarya Dahal — Cinematic Portfolio

A premium personal portfolio website with a cinematic Himalayan sunrise theme. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎬 **Cinematic Hero** — Fullscreen Himalayan sunrise video background with golden glow overlays and animated mist layers
- 🔤 **Rising Name Animation** — Name letters rise from the mist with staggered Framer Motion animations
- 🪟 **Glassmorphism Design** — Frosted-glass cards throughout the site with gold-tinted borders
- 🃏 **3D Card Hover Effects** — Mouse-tracking perspective tilt on skill and project cards
- 📜 **Parallax Depth** — Video, mist, and text layers respond to scroll at different speeds
- ⏳ **Golden Timeline** — Glowing vertical timeline for the learning journey section
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- ⚡ **Smooth Animations** — Section reveals, stagger effects, and micro-interactions via Framer Motion

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your Himalayan sunrise video

Place your video file at:

```
public/videos/himalayan-sunrise.mp4
```

> **Tip:** If you don't have the video yet, the hero will gracefully fall back to a golden gradient background.

### 3. Customize your details

Update the following files with your real information:

| File | What to update |
|------|---------------|
| `src/components/ui/Navbar.tsx` | Your name/initials |
| `src/components/sections/AboutSection.tsx` | Bio text, stats |
| `src/components/sections/ProjectsSection.tsx` | Your real projects and links |
| `src/components/sections/JourneySection.tsx` | Your actual timeline dates |
| `src/components/sections/ContactSection.tsx` | Your GitHub, LinkedIn, email |
| `src/app/layout.tsx` | SEO metadata |

### 4. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm start
```

## 🎨 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#020617` | Page background |
| Gold Primary | `#FACC15` | Primary accent, headings |
| Gold Warm | `#F59E0B` | Secondary accent, glows |
| Soft White | `#F8FAFC` | Body text |
| Muted Gray | `#94A3B8` | Secondary text |
| Glass BG | `rgba(15,23,42,0.45)` | Card backgrounds |
| Glass Border | `rgba(250,204,21,0.2)` | Card borders |

## 🏗 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, animations
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx        # Sticky glass navbar
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── GoldButton.tsx    # Reusable CTA button (primary/outline)
│   │   └── SectionWrapper.tsx # Scroll-reveal section container
│   └── sections/
│       ├── HeroSection.tsx   # Video hero + rising name + mist
│       ├── AboutSection.tsx  # Bio + trait cards + stats
│       ├── SkillsSection.tsx # 3D skill cards with progress bars
│       ├── ProjectsSection.tsx # 3D project cards with tilt
│       ├── JourneySection.tsx  # Animated timeline
│       └── ContactSection.tsx  # Form + social links
├── hooks/
│   ├── useScrollAnimation.ts # IntersectionObserver hook
│   └── useParallax.ts        # Scroll parallax value hook
└── lib/
    └── utils.ts              # cn() utility for Tailwind merging
```

## 🚢 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## 📦 Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Production-ready animations
- [Lucide React](https://lucide.dev/) — Icon library

---

*Built with ☀️ and the spirit of the Himalayas.*
