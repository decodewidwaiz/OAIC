'use client';

import Link from 'next/link';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-900" aria-label="Hero">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-dark-900 to-dark-800" />

        {/* Animated radial glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse at center, #ffb347 0%, #C5A359 30%, transparent 70%)',
            animation: 'pulse-glow 4s ease-in-out infinite',
          }}
        />

        {/* Floating particles simulation */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-glow-amber opacity-[0.06]"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 6 + 's',
              animationDuration: Math.random() * 8 + 4 + 's',
              animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
            }}
          />
        ))}

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,179,71,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,179,71,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Silhouette-style Odisha landscape SVG */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-10"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,180 L60,150 L120,170 L180,130 L240,160 L300,110 L360,140 L420,90 L480,120 L540,80 L600,100 L660,60 L720,90 L780,70 L840,100 L900,80 L960,110 L1020,70 L1080,100 L1140,120 L1200,90 L1260,130 L1320,110 L1380,150 L1440,120 L1440,200 L0,200 Z"
            fill="url(#silhouette-grad)"
          />
          <defs>
            <linearGradient id="silhouette-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C5A359" />
              <stop offset="100%" stopColor="#3b1c05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero content — code.html card overlay style */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-8 lg:px-16 w-full py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A359]/15 border border-[#C5A359]/30 text-[#C5A359] text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A359] animate-pulse" />
            October 15–17, 2026 · Bhubaneswar, Odisha, India
          </div>

          {/* Main title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-earth-100 leading-tight mb-4">
            2026 1<sup className="text-2xl md:text-3xl">st</sup>
            <br />
            <span className="text-gradient-amber">Odisha AI</span>
            <br />
            Conference
          </h1>

          {/* Sub-location — code.html secondary-container text pattern */}
          <p className="font-display text-xl md:text-2xl text-[#C5A359] mb-2">
            Bhubaneswar, Odisha, India
          </p>
          <p className="font-body text-earth-300 text-lg mb-8">
            Advancing Artificial Intelligence Research Across India
          </p>

          {/* Countdown */}
          <div className="mb-8 p-4 bg-dark-800/60 border border-earth-700 rounded-xl inline-block backdrop-blur-sm">
            <p className="text-earth-500 text-xs font-mono uppercase tracking-widest mb-3">Conference begins in</p>
            <CountdownTimer targetDate="2026-10-15T09:00:00+05:30" />
          </div>

          {/* CTAs — code.html three-button pattern */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/authors/call-for-papers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold bg-[#C5A359] hover:bg-[#b08e48] text-dark-900 transition-all shadow-md hover:shadow-glow-amber-sm"
            >
              Submit a Paper
            </Link>
            <Link
              href="/authors/call-for-papers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold bg-dark-800 border border-earth-600 text-earth-200 hover:border-[#C5A359] hover:text-earth-100 transition-all"
            >
              Call for Papers
            </Link>
            <Link
              href="/patrons-exhibitors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-body font-semibold bg-transparent border border-earth-700 text-earth-300 hover:border-earth-500 hover:text-earth-100 transition-all"
            >
              Become a Patron/Exhibitor
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-earth-600 text-xs font-mono animate-bounce">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
