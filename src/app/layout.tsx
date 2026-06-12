import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const cormorant = Fraunces({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const inter = DM_Sans({
  variable: "--font-inter",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saloni Suchdev",
  description: "I help businesses stop talking about AI and start using it.",
  openGraph: {
    title: "Saloni Suchdev",
    description: "I help businesses stop talking about AI and start using it.",
    images: [{ url: "/hero.JPG", width: 1200, height: 800, alt: "Saloni Suchdev" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saloni Suchdev",
    description: "I help businesses stop talking about AI and start using it.",
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
