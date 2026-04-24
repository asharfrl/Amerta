import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer style={{ backgroundColor: "#2C2F26" }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-10 sm:grid-cols-12 md:py-14 ${border ? "border-t" : ""}`}
          style={border ? { borderColor: "rgba(107,112,92,0.3)" } : {}}
        >
          {/* Brand block */}
          <div className="space-y-4 sm:col-span-12 lg:col-span-4">
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-black tracking-tight transition-opacity hover:opacity-80"
              style={{ color: "#F4F1DE" }}
            >
              <Logo />
              {/* <span>AMERTA</span> */}
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "#7a7d6d" }}>
              Bungkus lilin lebah organik yang ramah lingkungan. Dibuat dengan
              cinta untuk bumi dan keluarga Indonesia.
            </p>
            <div className="text-xs" style={{ color: "#7a7d6d" }}>
              &copy; {new Date().getFullYear()} AMERTA. Semua hak dilindungi.
            </div>
          </div>

          {/* Produk block */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold" style={{ color: "#F4F1DE" }}>
              Produk
            </h3>
            <ul className="space-y-2 text-sm">
              {["Semua Ukuran", "Paket Starter", "Paket Keluarga", "Limited Edition"].map((item) => (
                <li key={item}>
                  <Link
                    className="transition-colors"
                    style={{ color: "#7a7d6d" }}
                    href="#0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang block */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold" style={{ color: "#F4F1DE" }}>
              Tentang
            </h3>
            <ul className="space-y-2 text-sm">
              {["Misi Kami", "Blog", "Karir", "Laporan Dampak"].map((item) => (
                <li key={item}>
                  <Link
                    className="transition-colors"
                    style={{ color: "#7a7d6d" }}
                    href="#0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan block */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold" style={{ color: "#F4F1DE" }}>
              Bantuan
            </h3>
            <ul className="space-y-2 text-sm">
              {["Cara Merawat", "FAQ", "Kebijakan Privasi", "Syarat & Ketentuan"].map((item) => (
                <li key={item}>
                  <Link
                    className="transition-colors"
                    style={{ color: "#7a7d6d" }}
                    href="#0"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social block */}
          <div className="space-y-3 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold" style={{ color: "#F4F1DE" }}>
              Ikuti Kami
            </h3>
            <ul className="flex gap-2">
              {[
                { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.52V6.73a4.85 4.85 0 01-1.02-.04z" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href="#0"
                    aria-label={label}
                    className="flex items-center justify-center rounded-full transition-colors hover:opacity-80"
                    style={{ color: "#7a7d6d" }}
                  >
                    <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={path} />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Big watermark text */}
      <div className="relative h-24 w-full overflow-hidden md:h-48" aria-hidden="true">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 text-center text-[18vw] font-black leading-none md:text-[300px]"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(107,112,92,0.12)",
            letterSpacing: "-0.05em",
          }}
        >
          AMERTA
        </div>
      </div>
    </footer>
  );
}
