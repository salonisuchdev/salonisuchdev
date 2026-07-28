"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Who Am I", href: "/about" },
  { label: "AI in Practice", href: "/professional-ai" },
  { label: "Personal Projects", href: "/personal-ai" },
  { label: "My Takes", href: "/what-i-know" },
  { label: "Legal Brief", href: "/legal-brief" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages that start with a light (#F5F0E8) background need dark nav links
  const isLightPage = pathname === "/about";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled
          ? isLightPage
            ? "rgba(245,240,232,0.97)"
            : "rgba(10,10,10,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled
          ? isLightPage
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(255,255,255,0.1)"
          : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between px-8 py-6">
        {pathname !== "/" && (
          <Link
            href="/"
            className="text-[#F5C218] font-medium text-[14px] leading-none"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Saloni Suchdev
          </Link>
        )}

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-[#F5C218] ${isLightPage ? "text-[#1C1C1C]" : "text-white"}`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`md:hidden p-1 ${isLightPage ? "text-[#1C1C1C]" : "text-white"}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden flex flex-col gap-5 px-8 pb-8"
          style={{
            backgroundColor: isLightPage ? "#F5F0E8" : "#0A0A0A",
            borderTop: isLightPage
              ? "1px solid rgba(0,0,0,0.08)"
              : "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium uppercase tracking-[0.1em] transition-colors duration-200 hover:text-[#F5C218] ${isLightPage ? "text-[#1C1C1C]" : "text-white"}`}
              style={{ fontFamily: "var(--font-body)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
