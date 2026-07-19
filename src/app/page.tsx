import Link from "next/link";

export default function Home() {
  return (
    <main>
      <style>{`
  .editorial-line {
    color: #F5C218;
    transition: color 0.3s ease;
    cursor: default;
  }
  .editorial-line:hover {
    color: white;
  }
  .editorial-group {
    cursor: default;
  }
  .editorial-group:hover .editorial-group-line {
    color: white;
  }
  .editorial-group-line {
    color: #F5C218;
    transition: color 0.3s ease;
    cursor: default;
  }
`}</style>
      {/* HERO */}
      <section className="relative flex w-full overflow-hidden" style={{ minHeight: "120vh", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        {/* Background photo — contained to this section only */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center 60%",
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
        />

        {/* Left editorial panel */}
        <div
          className="editorial-group absolute hidden xl:flex flex-col"
          style={{ left: "40px", top: "50%", transform: "translateY(-50%)", zIndex: 10, gap: "12px" }}
        >
          <span className="editorial-group-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontStyle: "italic", fontWeight: 400, lineHeight: 1.4, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
            bringing <span style={{ fontSize: "24px", fontWeight: 600 }}>symbiotic partnerships</span>
          </span>
          <span className="editorial-group-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontStyle: "italic", fontWeight: 400, lineHeight: 1.4, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
            to life, from first client pitch
          </span>
          <span className="editorial-group-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontStyle: "italic", fontWeight: 400, lineHeight: 1.4, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
            to close of contract
          </span>
        </div>

        {/* Right editorial panel */}
        <div
          className="absolute hidden xl:flex flex-col"
          style={{ right: "40px", top: "50%", transform: "translateY(calc(-50% - 135px))", zIndex: 10, textAlign: "right" }}
        >
          <span className="editorial-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "21px", fontStyle: "italic", fontWeight: 600, lineHeight: 1.5, letterSpacing: "0.02em", marginBottom: "105px" }}>
            Client Success Leader
          </span>
          <span className="editorial-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "21px", fontStyle: "italic", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.02em", marginBottom: "105px" }}>
            5 years scaling B2B AI SaaS
          </span>
          <span className="editorial-line" style={{ fontFamily: "var(--font-cormorant)", fontSize: "21px", fontStyle: "italic", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.02em" }}>
            INSEAD MBA'26
          </span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ paddingTop: "100px" }}>
          <h1
            className="text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(52px, 8vw, 96px)",
              fontWeight: 300,
              letterSpacing: "0.06em",
              lineHeight: 1,
            }}
          >
            SALONI SUCHDEV
          </h1>

          <span
            className="text-[#F5C218] uppercase tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 400,
              marginTop: "12px",
            }}
          >
            she / her
          </span>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse" style={{ zIndex: 10 }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <section style={{ background: "#0A0A0A" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          {[
            {
              title: "Who Am I",
              description: "The story, the journey, and the CV.",
              href: "/about",
            },
            {
              title: "AI in Practice",
              description: "How I use AI in account management and partnerships.",
              href: "/professional-ai",
            },
            {
              title: "Personal Projects",
              description: "Three AI apps built for my own betterment.",
              href: "/personal-ai",
            },
            {
              title: "My Takes",
              description: "Unfiltered takes on business, technology, fashion, and culture.",
              href: "/what-i-know",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-8 py-16 border-t border-white/10 last:border-b hover:bg-white/[0.02] transition-all duration-300"
            >
              <h3
                className="text-white group-hover:text-[#F5C218] group-hover:scale-[1.04] transition-all duration-300 shrink-0 origin-left"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {item.title}
              </h3>

              <div className="flex items-center gap-6 min-w-0">
                <p
                  className="hidden md:block text-right"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
                <span
                  className="text-[#F5C218] shrink-0 group-hover:translate-x-2 transition-transform duration-300"
                  style={{ fontSize: "20px" }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
