"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function BeeswaxHeroMobile() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    restDelta: 0.001,
  });

  // Aggressive scaling 0.0 to 0.5: scale 1 to 1.3
  const wrapScale = useTransform(smooth, [0, 0.5], [1, 1.3]);
  const floatY = useTransform(smooth, [0, 0.25], [0, -5]);

  // Images 0 to 0.5
  const op4 = useTransform(smooth, [0, 0.05, 0.12, 0.16], [1, 1, 1, 0]);
  const op3 = useTransform(smooth, [0.12, 0.16, 0.25, 0.29], [0, 1, 1, 0]);
  const op2 = useTransform(smooth, [0.25, 0.29, 0.38, 0.42], [0, 1, 1, 0]);
  const op1 = useTransform(smooth, [0.38, 0.45], [0, 1]);

  // Seamless reveal: headline fades in at 30% scroll
  const headlineOpacity = useTransform(smooth, [0.3, 0.5], [0, 1]);
  const headlineY = useTransform(smooth, [0.3, 0.5], [20, 0]);

  // Feature pills and CTA
  const featOpacity = useTransform(smooth, [0.5, 0.6], [0, 1]);
  const featY = useTransform(smooth, [0.5, 0.6], [20, 0]);
  const ctaOpacity = useTransform(smooth, [0.6, 0.7], [0, 1]);

  // Brand colors
  const sage = "#6B705C";
  const sageDk = "#4f5444";
  const cream = "#F4F1DE";
  const earth = "#A07850";
  const muted = "#7a7d6d";

  return (
    <section ref={containerRef} className="relative z-10 min-h-screen block md:hidden" style={{ height: "300vh" }}>
      <div className="sticky top-0 z-10 flex h-screen flex-col items-center justify-between px-6 pt-24 pb-12 overflow-hidden" style={{ backgroundColor: cream }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(160,120,80,0.08) 0%, transparent 70%)" }} />

        {/* Wrap Stage */}
        <motion.div className="relative z-10 mx-auto flex items-center justify-center w-full max-w-full flex-1 min-h-[30vh] max-h-[45vh]" style={{ scale: wrapScale, y: floatY }}>
          <motion.div className="absolute inset-0" style={{ opacity: op1, zIndex: 1 }}><Image src="/images/beeswax/3D_OPEN.png" alt="Beeswax fully opened" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority /></motion.div>
          <motion.div className="absolute inset-0" style={{ opacity: op2, zIndex: 2 }}><Image src="/images/beeswax/3D_FOLD_LEFT.png" alt="One side open" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority /></motion.div>
          <motion.div className="absolute inset-0" style={{ opacity: op3, zIndex: 3 }}><Image src="/images/beeswax/3D_FOLD_RIGHT.png" alt="Side folded" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority /></motion.div>
          <motion.div className="absolute inset-0" style={{ opacity: op4, zIndex: 4 }}><Image src="/images/beeswax/3D_FOLD_FINAL.png" alt="Folded closed" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" priority /></motion.div>
        </motion.div>

        {/* Text Container */}
        <div className="flex flex-col items-center gap-6 w-full flex-shrink-0 z-20">
          <motion.div className="relative text-center w-full" style={{ opacity: headlineOpacity, y: headlineY }}>
            <span className="mb-4 inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm bg-white/40" style={{ borderColor: sage, color: sage }}>🌿 Organik · Zero Plastic</span>
            <h1 className="mt-4 text-3xl font-black leading-tight" style={{ color: sage, fontFamily: 'var(--font-montserrat), sans-serif' }}>AMERTA<br /><span className="text-2xl font-semibold" style={{ color: sageDk }}>Kehangatan Alam<br/>dalam Genggaman.</span></h1>
            <p className="mx-auto mt-4 max-w-sm text-sm font-medium leading-relaxed" style={{ color: muted }}>Lupakan plastik sekali pakai. Lindungi makanan Anda dengan bungkus lilin lebah organik yang ramah lingkungan.</p>
          </motion.div>

          <motion.div className="relative flex flex-wrap justify-center gap-2" style={{ opacity: featOpacity, y: featY }}>
            <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>♻️ Reusable</span>
            <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: earth, color: sageDk }}>🌱 100% Compostable</span>
            <span className="rounded-full border px-3 py-1.5 text-[11px] font-bold shadow-sm bg-white/40" style={{ borderColor: sage, color: sageDk }}>🍯 Antibacterial</span>
          </motion.div>

          <motion.div className="relative text-center mt-2" style={{ opacity: ctaOpacity }}>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
