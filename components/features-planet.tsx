import Image from "next/image";

const features = [
  {
    title: "Reusable & Washable",
    desc: "Cuci dengan air dingin dan sabun lembut. Satu bungkus AMERTA bisa bertahan hingga satu tahun pemakaian aktif.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "100% Compostable",
    desc: "Terbuat dari bahan organik murni—beeswax, cotton organik, dan resin pohon. Terurai sempurna dalam tanah.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    title: "Natural Antibacterial",
    desc: "Lilin lebah alami mengandung propolis dengan sifat antibakteri yang menjaga kesegaran makanan lebih lama.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Desain Ramah Alam",
    desc: "Dibuat dengan motif batik alami, setiap bungkus AMERTA adalah karya seni yang menghormati tradisi lokal.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Kurangi Limbah Plastik",
    desc: "Satu keluarga menggunakan rata-rata 500 lembar cling-wrap per tahun. Ganti sekali—dampaknya seumur hidup.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Berbagai Ukuran",
    desc: "Tersedia dalam Small, Medium, Large, dan XL—sempurna untuk membungkus buah, sayuran, keju, hingga roti.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function FeaturesPlanet() {
  return (
    <section
      className="relative"
      style={{ backgroundColor: "#F4F1DE" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <span
              className="mb-4 inline-block rounded-full border px-5 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ borderColor: "#6B705C", color: "#8a9079" }}
            >
              Mengapa AMERTA?
            </span>
            <h2
              className="mt-3 text-3xl font-black leading-tight md:text-4xl"
              style={{ color: "#2C2F26", letterSpacing: "-0.03em" }}
            >
              Satu pilihan kecil,{" "}
              <span style={{ color: "#A07850" }}>dampak besar</span> bagi bumi.
            </h2>
            <p
              className="mt-4 text-base leading-relaxed md:text-lg"
              style={{ color: "#7a7d6d" }}
            >
              AMERTA dirancang untuk generasi yang peduli—produk yang cantik,
              fungsional, dan benar-benar ramah lingkungan.
            </p>
          </div>


          {/* Features Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 md:*:p-10">
            {features.map((feature, i) => (
              <article
                key={i}
                className="group transition-colors duration-300"
                style={{
                  borderTop: "1px solid rgba(107,112,92,0.2)",
                  borderLeft: i % 1 === 0 ? "1px solid rgba(107,112,92,0.2)" : undefined,
                }}
              >
                <h3
                  className="mb-3 flex items-center gap-2 font-bold"
                  style={{ color: "#2C2F26" }}
                >
                  <span
                    className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#6B705C", color: "#F4F1DE" }}
                  >
                    {feature.icon}
                  </span>
                  {feature.title}
                </h3>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#7a7d6d" }}
                >
                  {feature.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
