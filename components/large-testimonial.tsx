export default function LargeTestimonial() {
  return (
    <section style={{ backgroundColor: "#F4F1DE" }}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="space-y-6 text-center">
            {/* Decorative leaf icon */}
            <div className="relative inline-flex">
              <svg
                className="absolute -left-7 -top-3 -z-10"
                width={44}
                height={54}
                viewBox="0 0 44 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2C24 2 38 12 38 28C38 36 32 42 24 44C16 42 10 36 10 28C10 12 24 2 24 2Z"
                  fill="#6B705C"
                  fillOpacity="0.18"
                />
                <path
                  d="M10 30C10 30 2 24 4 14C8 6 16 4 22 8"
                  stroke="#A07850"
                  strokeWidth="1.5"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                />
              </svg>

              {/* Avatar placeholder – earthy monogram */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-black"
                style={{
                  backgroundColor: "#6B705C",
                  color: "#F4F1DE",
                }}
              >
                SR
              </div>
            </div>

            <blockquote>
              <p
                className="text-xl font-bold leading-relaxed md:text-2xl"
                style={{ color: "#2C2F26" }}
              >
                &ldquo;AMERTA mengubah cara keluarga kami menyimpan makanan.
                Tidak ada lagi plastik yang terbuang—dan makanan kami terasa
                lebih{" "}
                <em className="not-italic" style={{ color: "#6B705C" }}>
                  segar dan alami
                </em>
                .&rdquo;
              </p>
            </blockquote>

            <div className="text-sm font-semibold" style={{ color: "#7a7d6d" }}>
              <span style={{ color: "#2C2F26" }}>Sari Rahayu</span>{" "}
              <span style={{ color: "#d4cfb4" }}>/</span>{" "}
              <span style={{ color: "#A07850" }}>Ibu Rumah Tangga, Jakarta Selatan</span>
            </div>

            {/* Star rating */}
            <div className="flex justify-center gap-1" aria-label="Rating 5 bintang">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#A07850"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
