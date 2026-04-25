import "./css/style.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "AMERTA — Bungkus Lilin Lebah Organik",
  description:
    "Lindungi makanan Anda dengan bungkus lilin lebah organik AMERTA yang ramah lingkungan. 100% natural, reusable, dan compostable.",
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
