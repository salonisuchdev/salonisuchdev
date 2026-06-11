import Link from "next/link";

const CARDS = [
  {
    label: "About",
    title: "Who Am I",
    description: "The story, the journey, and the CV.",
    href: "/about",
  },
  {
    label: "Professional",
    title: "AI Work",
    description: "How I use AI in account management and partnerships.",
    href: "/professional-ai",
  },
  {
    label: "Personal",
    title: "Personal Projects",
    description: "Three AI apps built for my own betterment.",
    href: "/personal-ai",
  },
  {
    label: "Opinions",
    title: "What I Know So Far",
    description: "Five articles. Unfiltered takes on business, culture, and the world.",
    href: "/what-i-know",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.JPG')",
            opacity: 0.35,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span
            className="mb-5 text-[#F5C218] uppercase tracking-[0.15em]"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              fontWeight: 400,
            }}
          >
            she / her
          </span>

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

          <p
            className="mt-7"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "520px",
              lineHeight: 1.65,
            }}
          >
            I help businesses stop talking about AI and start using it.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse">
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
      <section
        className="w-full px-6 pb-24"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <h2
          className="text-center pt-20 pb-12"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "48px",
            fontWeight: 400,
            color: "#111111",
          }}
        >
          Explore
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">
          {CARDS.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group block rounded-[4px] bg-white p-10 border border-black/[0.08] transition-all duration-200 hover:border-black/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
            >
              <span
                className="text-[#F5C218] uppercase tracking-[0.1em]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                {card.label}
              </span>

              <h3
                className="mt-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: 1.1,
                }}
              >
                {card.title}
              </h3>

              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#666666",
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>

              <span
                className="mt-6 inline-block uppercase tracking-[0.1em] text-[#F5C218] group-hover:underline"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
