import Link from "next/link";
import { articles } from "./data/articles";

export default function WhatIKnow() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section
        className="w-full px-6 md:px-16 lg:px-24"
        style={{
          backgroundColor: "#0A0A0A",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div className="mx-auto max-w-4xl">
          <span
            className="uppercase tracking-[0.1em] text-[#F5C218]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
          >
            Opinions
          </span>

          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            What I Know So Far
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
            Five articles. Unfiltered takes on business, culture, and the world.
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
            >
              {/* Number */}
              <span
                className="shrink-0 w-8 tabular-nums"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "13px",
                  color: "#aaaaaa",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <span
                className="flex-1 text-center transition-colors duration-200 group-hover:text-[#F5C218]"
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
