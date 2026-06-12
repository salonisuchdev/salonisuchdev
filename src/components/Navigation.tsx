"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Who Am I", href: "/about" },
  { label: "AI Work", href: "/professional-ai" },
  { label: "Personal Projects", href: "/personal-ai" },
  { label: "What I Know So Far", href: "/what-i-know" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages that start with a light (#F5F0E8) background need dark nav links
  const isLightPage = pathname === "/about";
  const linkColor = isLightPage ? "#1C1C1C" : "white";
  const hamburgerColor = isLightPage ? "#1C1C1C" : "white";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        borderBottom: scrolled
          ? isLightPage
            ? "1px solid rgba(0,0,0,0.1)"
            : "1px solid rgba(255,255,255,0.1)"
          : "none",
      }}
    >
      <div className="flex items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="text-[#F5C218] font-medium text-[18px] leading-none"
          style={{ fontFamily: "var(--font-body)" }}
        >
          SS
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.1em] hover:text-[#F5C218] transition-colors duration-200"
                style={{ fontFamily: "var(--font-body)", color: linkColor }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-1"
          style={{ color: hamburgerColor }}
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
        <div className="md:hidden flex flex-col gap-5 px-8 pb-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-[0.1em] hover:text-[#F5C218] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)", color: linkColor }}
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
