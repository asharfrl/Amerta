import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-20 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative flex h-14 md:h-20 items-center justify-between gap-3 rounded-2xl px-4 shadow-lg backdrop-blur-md"
          style={{
            backgroundColor: "rgba(244, 241, 222, 0.85)",
            border: "1px solid rgba(107, 112, 92, 0.2)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
          }}
        >
          {/* Brand logo */}
          <div className="flex flex-1 items-center">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-black tracking-tight transition-opacity hover:opacity-80"
              style={{ color: "#2C2F26" }}
            >
              <Logo />
              {/* <span className="hidden sm:inline">AMERTA</span> */}
            </Link>
          </div>

          {/* Nav links – desktop */}
          {/* <nav className="hidden items-center gap-6 text-sm font-semibold md:flex" style={{ color: "#6B705C" }}>
            <Link href="#learn" className="transition-colors hover:text-amerta-earth" style={{ color: "#6B705C" }}>
              Produk
            </Link>
            <Link href="#learn" className="transition-colors" style={{ color: "#6B705C" }}>
              Tentang Kami
            </Link>
          </nav> */}

          {/* CTA button */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#shop"
                className="inline-flex items-center rounded-full px-3 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs font-bold shadow-md transition-all hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
                style={{
                  backgroundColor: "#6B705C",
                  color: "#F4F1DE",
                }}
              >
                Mulai Langkah Hijau
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
