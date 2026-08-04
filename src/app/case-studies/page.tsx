import Image from "next/image";
import Link from "next/link";

const CASE_STUDIES = [
  {
    slug: "/magnum-thailand",
    tag: "Unilever / Magnum Thailand",
    title: "Flying Blind: Building Store Intelligence for Magnum Through a Corporate Demerger",
    summary:
      "How AI image recognition fixed Magnum's compliance and van sale visibility gap in Thailand, delivering a 1.5% market share gain six months post go-live.",
    image: "/images/field-visit-team.jpg",
    meta: ["2024", "Thailand", "AI / Image Recognition"],
  },
];

export default function CaseStudies() {
  return (
    <main>
      {/* HERO HEADER */}
      <section
        className="w-full px-6 md:px-16 lg:px-24"
        style={{ backgroundColor: "#0A0A0A", paddingTop: "140px", paddingBottom: "80px" }}
      >
        <div className="mx-auto max-w-4xl">
          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "80px",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Case Studies
          </h1>
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "520px",
              lineHeight: 1.65,
            }}
          >
            Projects worth documenting in full. The decisions, the constraints, and what the numbers actually showed.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <section
        className="w-full px-6 md:px-16 lg:px-24 py-20"
        style={{ backgroundColor: "#F5F0E8" }}
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={cs.slug}
              className="group flex flex-col overflow-hidden rounded-[2px] bg-white"
              style={{ textDecoration: "none" }}
            >
              {/* IMAGE */}
              <div className="relative w-full overflow-hidden" style={{ height: "280px" }}>
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-8">
                <span
                  className="uppercase tracking-[0.1em] text-[#F5C218]"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
                >
                  {cs.tag}
                </span>
                <h2
                  className="mt-3"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "#0A0A0A",
                    lineHeight: 1.2,
                  }}
                >
                  {cs.title}
                </h2>
                <p
                  className="mt-4 flex-1"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "14px",
                    color: "#555555",
                    lineHeight: 1.75,
                  }}
                >
                  {cs.summary}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-4">
                    {cs.meta.map((m) => (
                      <span
                        key={m}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "11px",
                          color: "#999999",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <span
                    className="uppercase tracking-[0.1em] text-[#0A0A0A] group-hover:text-[#F5C218] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
                  >
                    Read &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
