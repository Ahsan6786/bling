import type { Metadata } from "next";
import { Outfit, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import Navbar from "@/components/navbar";
import Chatbot from "@/components/chatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://blingish.in"),
  title: "Blingish – Premium Artificial Jewellery Online Store",
  description: "Shop stylish and affordable artificial jewellery at Blingish. Earrings, pendants, and trendy jewelry with premium design.",

  keywords: [
    "artificial jewellery online",
    "premium artificial jewelry",
    "stylish jewelry online",
    "affordable luxury jewelry india",
    "statement earrings india",
    "trendy pendants",
    "blingish.in",
    "artificial jewelry store india"
  ],
  authors: [{ name: "Blingish" }],
  openGraph: {
    title: "Blingish – Premium Artificial Jewellery Online Store",
    description: "Shop stylish and affordable artificial jewellery at Blingish. Earrings, pendants, and trendy jewelry with premium design.",
    url: "https://blingish.in",
    siteName: "Blingish",
    images: [
      {
        url: "/images/blingish/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Blingish Premium Artificial Jewellery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blingish – Premium Artificial Jewellery Online Store",
    description: "Shop stylish and affordable artificial jewellery at Blingish. Earrings, pendants, and trendy jewelry with premium design.",
    images: ["/images/blingish/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/blingish/favicon.png",
    shortcut: "/images/blingish/favicon.png",
    apple: "/images/blingish/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};


import { ThemeProvider } from "@/context/theme-context";
import { PageWrapper } from "@/components/page-wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased font-inter transition-colors duration-500`}
      >
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Chatbot />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
