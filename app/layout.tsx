import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Escuela Sector Ángeles",
  description:
    "Una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes.",
  generator: "RVaLo",
  icons: {
    icon: [
      {
        url: "/escudo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/escudo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/escudo.png",
        type: "image/png",
      },
    ],
    apple: "/escudo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
