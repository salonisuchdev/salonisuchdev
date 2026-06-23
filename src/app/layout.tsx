import type { Metadata } from "next";
import { Gilda_Display, Karla } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const cormorant = Gilda_Display({
  variable: "--font-cormorant",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Karla({
  variable: "--font-inter",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saloni Suchdev",
  description: "Portfolio of Saloni Suchdev — business leader, MBA candidate at INSEAD.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Saloni Suchdev",
    description: "Saloni Suchdev's Portfolio: a business leader, MBA candidate at INSEAD.",
    images: [{ url: "/hero.JPG", width: 1200, height: 800, alt: "Saloni Suchdev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saloni Suchdev",
    description: "Saloni Suchdev's Portfolio: a business leader, MBA candidate at INSEAD.",
    images: ["/hero.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
