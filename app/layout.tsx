import "./css/style.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://amerta-beeswax.vercel.app"),
  title: "AMERTA | Kehangatan Alam dalam Genggaman",
  description:
    "Bungkus makanan organik dari lilin lebah alami. Solusi ramah lingkungan, reusable, dan 100% biodegradable untuk dapur minim plastik.",
  openGraph: {
    type: "website",
    siteName: "AMERTA",
    title: "AMERTA | Kehangatan Alam dalam Genggaman",
    description:
      "Bungkus makanan organik dari lilin lebah alami. Solusi ramah lingkungan, reusable, dan 100% biodegradable untuk dapur minim plastik.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "AMERTA Beeswax Wraps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMERTA | Kehangatan Alam dalam Genggaman",
    description:
      "Bungkus makanan organik dari lilin lebah alami. Solusi ramah lingkungan, reusable, dan 100% biodegradable untuk dapur minim plastik.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${montserrat.variable} font-montserrat bg-amerta-cream tracking-tight text-amerta-dark antialiased`}
        suppressHydrationWarning
      >
        <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
