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
        url: "https://amerta-beeswax.vercel.app/images/og-image-min.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "AMERTA Beeswax Wraps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMERTA | Kehangatan Alam dalam Genggaman",
    description:
      "Bungkus makanan organik dari lilin lebah alami. Solusi ramah lingkungan, reusable, dan 100% biodegradable untuk dapur minim plastik.",
    images: ["https://amerta-beeswax.vercel.app/images/og-image-min.jpg"],
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
