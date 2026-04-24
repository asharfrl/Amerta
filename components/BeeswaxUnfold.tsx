"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────
   AMERTA Beeswax – Scroll-Driven Unfolding Hero

   Scroll segments (scrollYProgress):
   [0.00 – 0.25]  Asset-4 (3D_FOLD_FINAL)  – fully folded, floating
   [0.25 – 0.50]  Asset-3 (3D_FOLD_RIGHT)  – side-folded
   [0.50 – 0.75]  Asset-2 (3D_FOLD_LEFT)   – one side opening
   [0.75 – 1.00]  Asset-1 (3D_OPEN)        – fully opened
   ───────────────────────────────────────────────────────── */

export default function BeeswaxUnfold() {
  const containerRef = useRef<HTMLDivElement>(null);

  /* scrollYProgress = 0 → top of section, 1 → bottom */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Smooth spring for buttery scroll feeling */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 18,
    restDelta: 0.001,
  });

  /* ── Image opacities (0.0 to 0.4) ─── */
  const op4 = useTransform(smooth, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]);
  const op3 = useTransform(smooth, [0.1, 0.15, 0.22, 0.27], [0, 1, 1, 0]);
  const op2 = useTransform(smooth, [0.22, 0.27, 0.35, 0.4], [0, 1, 1, 0]);
  const op1 = useTransform(smooth, [0.35, 0.4], [0, 1]);

  /* ── Wrap scale, float & stage translation ─ */
  const wrapScale   = useTransform(smooth, [0, 0.6, 1.0], [0.9, 0.9, 1.05]);
  const wrapOpacity = useTransform(smooth, [0, 0.08], [0.5, 1]);
  const floatY      = useTransform(smooth, [0, 0.15], [0, -10]);

  /* ── Hero headline (0.4 to 0.6 fade in) ─────────────── */
  const headlineOpacity = useTransform(smooth, [0.4, 0.6], [0, 1]);
  const headlineY       = useTransform(smooth, [0.4, 0.6], [30, 0]);

  /* ── Feature pills appear in sequence ─────────────── */
  const feat1Opacity = useTransform(smooth, [0.6, 0.7], [0, 1]);
  const feat1Y       = useTransform(smooth, [0.6, 0.7], [20, 0]);
  const feat2Opacity = useTransform(smooth, [0.65, 0.75], [0, 1]);
  const feat2Y       = useTransform(smooth, [0.65, 0.75], [20, 0]);
  const feat3Opacity = useTransform(smooth, [0.7, 0.8], [0, 1]);
  const feat3Y       = useTransform(smooth, [0.7, 0.8], [20, 0]);

  /* ── Bottom CTA ─ */
  const ctaOpacity = useTransform(smooth, [0.8, 0.9], [0, 1]);
  const ctaY       = useTransform(smooth, [0.8, 0.9], [30, 0]);

  /* ── Scroll arrow ─ */
  const arrowOpacity = useTransform(smooth, [0, 0.10], [1, 0]);

  /* ── Brand colours ─ */
  const sage    = "#6B705C";
  const sageDk  = "#4f5444";
  const cream   = "#F4F1DE";
  const earth   = "#A07850";
  const dark    = "#2C2F26";
  const muted   = "#7a7d6d";

  return (
    /*
     * OUTER  – tall scroll canvas (400 vh gives scroll distance)
     * INNER  – sticky viewport-height panel
     */
    <section
      ref={containerRef}
      className="relative z-10 min-h-screen"
      style={{ height: "400vh" }}
    >
      {/* ── Sticky viewport ──────────────────────── */}
      <div
        className="sticky top-0 z-10 flex h-screen flex-col items-center justify-between px-4 pt-28 pb-8 md:pb-12"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 50% 55%, #e8e4ca 0%, ${cream} 60%, ${cream} 100%)`,
        }}
      >
        {/* Decorative radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(160,120,80,0.12) 0%, transparent 75%)",
          }}
        />

        {/* ── 3-D Wrap Stage (FIRST VISUAL) ─────────────────────── */}
        <motion.div
          className="relative z-10 mx-auto flex items-center justify-center w-full max-w-[280px] md:max-w-[500px] flex-1 min-h-[20vh] max-h-[45vh]"
          style={{
            scale: wrapScale,
            opacity: wrapOpacity,
            y: floatY,
          }}
        >
          {/* Layer 1 – Fully OPEN (base) */}
          <motion.div className="absolute inset-0" style={{ opacity: op1, zIndex: 1 }}>
            <Image
              src="/images/beeswax/3D_OPEN.png"
              alt="AMERTA beeswax wrap – fully opened"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 560px"
              priority
            />
          </motion.div>

          {/* Layer 2 – One Side Open (FOLD_LEFT) */}
          <motion.div className="absolute inset-0" style={{ opacity: op2, zIndex: 2 }}>
            <Image
              src="/images/beeswax/3D_FOLD_LEFT.png"
              alt="AMERTA beeswax wrap – one side open"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 560px"
              priority
            />
          </motion.div>

          {/* Layer 3 – Side Folded (FOLD_RIGHT) */}
          <motion.div className="absolute inset-0" style={{ opacity: op3, zIndex: 3 }}>
            <Image
              src="/images/beeswax/3D_FOLD_RIGHT.png"
              alt="AMERTA beeswax wrap – side folded"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 560px"
              priority
            />
          </motion.div>

          {/* Layer 4 – Fully Folded/Closed (initial state, top) */}
          <motion.div
            className="absolute inset-0"
            style={{ opacity: op4, zIndex: 4, y: floatY }}
          >
            <Image
              src="/images/beeswax/3D_FOLD_FINAL.png"
              alt="AMERTA beeswax wrap – folded closed"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 560px"
              priority
            />
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center gap-6 w-full flex-shrink-0">
          {/* ── Hero Headline (SECOND VISUAL) ──────────────────────── */}
          <motion.div
            className="relative z-20 text-center max-w-4xl mx-auto w-full px-4"
            style={{ opacity: headlineOpacity, y: headlineY }}
          >
          {/* Badge pill */}
          <span
            className="mb-4 inline-block rounded-full border px-5 py-1.5 text-xs font-bold uppercase tracking-widest shadow-sm"
            style={{
              borderColor: sage,
              backgroundColor: "rgba(107,112,92,0.08)",
              color: sage,
            }}
          >
            🌿 Organik · Zero Plastic · Ramah Lingkungan
          </span>

          <h1
            className="mt-4 text-3xl font-black leading-tight md:text-6xl"
            style={{ color: dark, letterSpacing: "-0.04em" }}
          >
            AMERTA:&nbsp;
            <span
              style={{
                backgroundImage: `linear-gradient(135deg, ${sage} 0%, ${earth} 60%, #8a9079 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kehangatan Alam
            </span>
            <br />
            <span
              className="text-3xl font-semibold md:text-6xl"
              style={{ color: sageDk }}
            >
              dalam Genggaman.
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed md:text-lg"
            style={{ color: muted }}
          >
            Lupakan plastik sekali pakai. Lindungi makanan Anda dengan bungkus
            lilin lebah organik yang ramah lingkungan.
          </p>
          </motion.div>

          {/* ── Feature Pills ──────────────────────── */}
          <div className="relative z-20 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            {/* Pill 1 */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs md:text-sm font-semibold shadow-md"
              style={{
                opacity: feat1Opacity,
                y: feat1Y,
                backgroundColor: "rgba(244,241,222,0.88)",
                borderColor: sage,
                color: sageDk,
              }}
            >
              ♻️ Reusable &amp; Washable
            </motion.span>

            {/* Pill 2 */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs md:text-sm font-semibold shadow-md"
              style={{
                opacity: feat2Opacity,
                y: feat2Y,
                backgroundColor: "rgba(244,241,222,0.88)",
                borderColor: earth,
                color: sageDk,
              }}
            >
              🌱 100% Compostable
            </motion.span>

            {/* Pill 3 */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs md:text-sm font-semibold shadow-md"
              style={{
                opacity: feat3Opacity,
                y: feat3Y,
                backgroundColor: "rgba(244,241,222,0.88)",
                borderColor: sage,
                color: sageDk,
              }}
            >
              🍯 Natural Antibacterial
            </motion.span>
          </div>

          {/* ── Bottom CTA ─────────────────────────── */}
          <motion.div
            className="relative z-20 text-center"
            style={{ opacity: ctaOpacity, y: ctaY }}
          >
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  backgroundColor: sage,
                  color: cream,
                  boxShadow: `0 8px 30px rgba(107,112,92,0.35)`,
                }}
              >
                Mulai Langkah Hijau →
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  borderColor: sage,
                  color: sage,
                  backgroundColor: "transparent",
                }}
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll arrow ───────────────────────── */}
        <motion.div
          className="absolute bottom-8 md:bottom-12 left-1/2 z-30 -translate-x-1/2"
          style={{ opacity: arrowOpacity }}
        >
          <div
            className="flex flex-col items-center gap-1.5"
            style={{ color: earth }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
