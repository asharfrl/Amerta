export default function Cta() {
  return (
    <section style={{ backgroundColor: "#F4F1DE" }} className="pb-16 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl text-center shadow-2xl"
          data-aos="zoom-y-out"
          style={{ backgroundColor: "#6B705C" }}
        >
          {/* Decorative organic blob glow */}
          <div
            className="pointer-events-none absolute -bottom-16 left-1/2 -z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            <div
              className="h-64 w-[500px] rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(160,120,80,0.4)" }}
            />
          </div>

          {/* Top decorative leaf pattern */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <svg
              className="absolute -right-12 -top-12 opacity-10"
              width={260}
              height={260}
              viewBox="0 0 260 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="130" cy="130" r="130" fill="#F4F1DE" />
              <circle cx="130" cy="130" r="90" fill="none" stroke="#F4F1DE" strokeWidth="1" />
              <circle cx="130" cy="130" r="50" fill="none" stroke="#F4F1DE" strokeWidth="1" />
            </svg>
            <svg
              className="absolute -bottom-12 -left-12 opacity-10"
              width={200}
              height={200}
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="100" cy="100" r="100" fill="#F4F1DE" />
            </svg>
          </div>

          <div className="relative px-6 py-16 md:px-16 md:py-24">
            {/* Badge */}
            <span
              className="mb-6 inline-block rounded-full border px-5 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ borderColor: "rgba(244,241,222,0.4)", color: "rgba(244,241,222,0.85)" }}
            >
              🌿 Mulai Perjalanan Hijaumu
            </span>

            <h2
              className="mb-6 text-3xl font-black leading-tight md:text-5xl"
              style={{ color: "#F4F1DE", letterSpacing: "-0.03em" }}
            >
              Bergabunglah bersama ribuan keluarga
              <br className="hidden md:block" />
              yang telah memilih{" "}
              <span style={{ color: "#e8e4ca" }}>AMERTA.</span>
            </h2>

            <p
              className="mx-auto mb-10 max-w-xl text-base leading-relaxed md:text-lg"
              style={{ color: "rgba(244,241,222,0.8)" }}
            >
              Setiap pembelian AMERTA membantu mengurangi 500+ lembar plastik
              dari lautan setiap tahun. Bersama kita bisa.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-black shadow-xl transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  backgroundColor: "#F4F1DE",
                  color: "#6B705C",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
              >
                Mulai Langkah Hijau →
              </a>
              <a
                href="#learn"
                className="inline-flex items-center gap-2 rounded-full border px-9 py-4 text-sm font-semibold transition-all hover:scale-105 active:scale-95"
                style={{
                  borderColor: "rgba(244,241,222,0.5)",
                  color: "#F4F1DE",
                  backgroundColor: "transparent",
                }}
              >
                Lihat Koleksi Kami
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="mt-10 flex flex-wrap justify-center gap-6 text-xs font-semibold"
              style={{ color: "rgba(244,241,222,0.6)" }}
            >
              <span>✓ Gratis ongkir se-Indonesia</span>
              <span>✓ Garansi uang kembali 30 hari</span>
              <span>✓ Bahan bersertifikat organik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
