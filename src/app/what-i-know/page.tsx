"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "./data/articles";

const ARTICLE_IMAGES: Record<string, string> = {
  "loewe-peggy-gou": "/article-loewe.jpg",
  "agriculture-ai": "/article-agriculture.jpg",
  "billionaire-playbook": "/article-billionaire.jpg",
  "plenty-of-fish": "/article-fish.jpg",
  "coca-cola-partnerships": "/article-cocacola.jpg",
};

export default function WhatIKnow() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <main>
      {/* PAGE HEADER */}
      <section
        className="relative w-full px-6 md:px-16 lg:px-24 overflow-hidden"
        style={{ backgroundColor: "#0A0A0A", paddingTop: "120px", paddingBottom: "80px" }}
      >
        {/* One image layer per article, crossfades on hover */}
        {articles.map((article) => (
          <div
            key={article.slug}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${ARTICLE_IMAGES[article.slug]}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: hoveredSlug === article.slug ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          />
        ))}
        {/* Dark overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.6)", zIndex: 1 }}
        />
        {/* Text content */}
        <div className="relative mx-auto max-w-4xl" style={{ zIndex: 2 }}>
          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            My Takes
          </h1>
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.65,
            }}
          >
            Unfiltered takes on business, technology, fashion, and culture.
          </p>
        </div>
      </section>

      {/* ARTICLES LIST */}
      <section
        className="w-full px-6 md:px-16 lg:px-24 py-20"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="mx-auto max-w-4xl">
          {articles.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/what-i-know/${article.slug}`}
              className={`group flex items-center gap-6 py-10 border-t border-black/[0.12] cursor-pointer ${
                idx === articles.length - 1 ? "border-b" : ""
              }`}
              onMouseEnter={() => setHoveredSlug(article.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              {/* Number */}
              <span
                className="shrink-0 w-8 tabular-nums"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "16px",
                  color: "#888888",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <span
                className="flex-1 text-center group-hover:scale-[1.04] origin-left transition-all duration-300"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.5vw, 28px)",
                  color: "#111111",
                  lineHeight: 1.25,
                }}
              >
                {article.title}
              </span>

              {/* Arrow */}
              <span
                className="shrink-0 w-6 text-right text-[#F5C218] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ fontFamily: "var(--font-inter)", fontSize: "16px" }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
