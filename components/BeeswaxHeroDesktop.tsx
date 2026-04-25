"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function BeeswaxHeroDesktop() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 55, damping: 18, restDelta: 0.001 });

  // Desktop sequence 0 to 0.4 unwrap
  const op4 = useTransform(smooth, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
  const op3 = useTransform(smooth, [0.1, 0.15, 0.22, 0.27], [0, 1, 1, 0]);
  const op2 = useTransform(smooth, [0.22, 0.27, 0.35, 0.4], [0, 1, 1, 0]);
  const op1 = useTransform(smooth, [0.35, 0.4], [0, 1]);

  const wrapScale = useTransform(smooth, [0, 1.0], [0.95, 1.05]);
  const floatY = useTransform(smooth, [0, 0.15], [0, -10]);

  const headlineOpacity = useTransform(smooth, [0.4, 0.6], [0, 1]);
  const headlineY = useTransform(smooth, [0.4, 0.6], [40, 0]);

  const featOpacity = useTransform(smooth, [0.6, 0.75], [0, 1]);
  const featY = useTransform(smooth, [0.6, 0.75], [20, 0]);

  const ctaOpacity = useTransform(smooth, [0.75, 0.9], [0, 1]);

  // Parallax background text
  const parallaxY = useTransform(smooth, [0, 1], [150, -150]);
  const parallaxOpacity = useTransform(smooth, [0, 0.2, 0.8, 1], [0, 0.05, 0.05, 0]);

  const scrollIndicatorOpacity = useTransform(smooth, [0, 0.15], [1, 0]);

  const sage = "#6B705C";
  const sageDk = "#4f5444";
  const cream = "#F4F1DE";
  const earth = "#A07850";
  const muted = "#7a7d6d";

  return (
    <section ref={containerRef} className="relative z-10 min-h-screen hidden md:block" style={{ height: "300vh" }}>
      <div className="sticky top-0 z-10 flex h-screen flex-col items-center justify-start px-8 pt-36 pb-8 overflow-hidden" style={{ backgroundColor: cream }}>
        
        {/* Parallax Background Text */}
        <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0" style={{ y: parallaxY, opacity: parallaxOpacity }}>
          <h2 className="text-[15vw] font-black tracking-tighter whitespace-nowrap text-[#6B705C]">AMERTA</h2>
        </motion.div>

        <div className="relative z-10 flex flex-row items-center justify-center w-full max-w-7xl mx-auto gap-12 lg:gap-20">
          {/* Text Container (Left) */}
          <div className="flex-1 flex flex-col items-start text-left">
            <motion.div style={{ opacity: headlineOpacity, y: headlineY }}>
              <span className="mb-6 inline-block rounded-full border px-6 py-2 text-sm font-bold uppercase tracking-widest shadow-sm bg-white/40" style={{ borderColor: sage, color: sage }}>🌿 Organik · Zero Plastic</span>
              <h1 className="mt-4 text-5xl lg:text-7xl font-black leading-tight" style={{ color: sage, fontFamily: 'var(--font-montserrat), sans-serif' }}>AMERTA<br /><span className="text-4xl lg:text-5xl font-semibold" style={{ color: sageDk }}>Kehangatan Alam<br />dalam Genggaman.</span></h1>
              <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed" style={{ color: muted }}>Lupakan plastik sekali pakai. Lindungi makanan Anda dengan bungkus lilin lebah organik yang ramah lingkungan.</p>
            </motion.div>

            <motion.div className="mt-10 flex flex-col gap-4" style={{ opacity: featOpacity, y: featY }}>
              <div className="flex items-center gap-3"><span className="rounded-full border px-4 py-2 text-sm font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>♻️ Reusable & Washable</span><span className="rounded-full border px-4 py-2 text-sm font-bold shadow-sm bg-white/40" style={{ borderColor: earth, color: sageDk }}>🌱 100% Compostable</span></div>
              <div className="flex items-center gap-3"><span className="rounded-full border px-4 py-2 text-sm font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>🍯 Natural Antibacterial</span></div>
            </motion.div>

            <motion.div className="mt-12" style={{ opacity: ctaOpacity }}>
              <a href="#shop" className="inline-flex animate-pulse items-center gap-3 rounded-full px-10 py-4 text-lg font-bold shadow-xl transition-all hover:scale-105 active:scale-95" style={{ backgroundColor: sage, color: cream }}>Mulai Langkah Hijau →</a>
            </motion.div>
          </div>

          {/* Wrap Stage (Right) */}
          <motion.div className="relative flex-shrink-0 w-[500px] lg:w-[600px] aspect-[4/3] z-20 md:-mt-22 lg:-mt-38 xl:-mt-48" style={{ scale: wrapScale, y: floatY }}>
            <motion.div className="absolute inset-0" style={{ opacity: op1, zIndex: 1 }}><Image src="/images/beeswax/3D_OPEN.png" alt="Beeswax fully opened" fill className="object-contain" sizes="600px" priority /></motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: op2, zIndex: 2 }}><Image src="/images/beeswax/3D_FOLD_LEFT.png" alt="One side open" fill className="object-contain" sizes="600px" priority /></motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: op3, zIndex: 3 }}><Image src="/images/beeswax/3D_FOLD_RIGHT.png" alt="Side folded" fill className="object-contain" sizes="600px" priority /></motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: op4, zIndex: 4 }}><Image src="/images/beeswax/3D_FOLD_FINAL.png" alt="Folded closed" fill className="object-contain" sizes="600px" priority /></motion.div>

            <motion.div className="relative flex flex-wrap justify-center gap-2" style={{ opacity: featOpacity, y: featY }}>
              <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>♻️ Reusable</span>
              <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: earth, color: sageDk }}>🌱 100% Compostable</span>
              <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>🍯 Antibacterial</span>
            </motion.div>
          </motion.div>
          
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-15 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-black uppercase tracking-[0.4em] ml-[0.4em]" style={{ color: sage }}>Scroll</span>
          <div className="h-10 w-px bg-current opacity-20" style={{ color: sage }} />
          <motion.div 
            className="w-1 h-1 rounded-full bg-current"
            style={{ color: sage }}
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
