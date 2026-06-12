import Image from "next/image";

export default function ProfessionalAI() {
  return (
    <main style={{ backgroundColor: "#F5F0E8" }}>
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
            AI
          </span>

          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "80px",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            AI in Practice
          </h1>

          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "560px",
              lineHeight: 1.65,
            }}
          >
            Most people talk about AI in commercial roles. Here is what it
            actually looks like in practice.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="mx-auto max-w-6xl flex flex-col gap-10">
          {/* TOOL 1 — Client Intelligence (image left) */}
          <article className="flex flex-col md:flex-row overflow-hidden rounded-[2px]">
            {/* Image */}
            <div className="relative w-full md:w-1/2 min-h-[300px] self-stretch">
              <Image
                src="/artifact-client-intelligence.jpg"
                alt="CPG Client Intelligence briefing"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 bg-white flex flex-col justify-center"
              style={{ padding: "48px" }}
            >
              <span
                className="uppercase tracking-[0.1em] text-[#F5C218]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
              >
                Daily Intelligence
              </span>

              <h2
                className="mt-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: 1.15,
                }}
              >
                Consumer Products Client Intelligence
              </h2>

              <div
                className="mt-5 flex flex-col gap-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#444444",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  Every account manager should know what happened at their
                  client's company before the client tells them. This tool
                  delivers a daily briefing via email on six major consumer
                  products accounts: leadership changes, M&A activity, financial
                  results, and product launches, organised by company and tagged
                  by category.
                </p>
                <p>
                  I use it to spot upsell triggers, prepare for client
                  conversations, and build the contextual knowledge that makes
                  relationships last.
                </p>
              </div>

              <p
                className="mt-8 uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#888888",
                }}
              >
                Built with Claude AI · Delivered daily at 10:00 CET on weekdays via Outlook
              </p>

              <a
                href="/sample-client-intelligence.pdf"
                download
                className="inline-block mt-6 px-6 py-3 rounded-[2px] border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-200 uppercase tracking-[0.1em] text-[12px] font-medium"
                style={{ fontFamily: "var(--font-inter)", width: "fit-content" }}
              >
                Download Sample
              </a>
            </div>
          </article>

          {/* TOOL 2 — Industry Intelligence (image right) */}
          <article className="flex flex-col md:flex-row-reverse overflow-hidden rounded-[2px]">
            {/* Image */}
            <div className="relative w-full md:w-1/2 min-h-[300px] self-stretch">
              <Image
                src="/artifact-industry-intelligence.jpg"
                alt="CPG Industry Intelligence briefing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 bg-white flex flex-col justify-center"
              style={{ padding: "48px" }}
            >
              <span
                className="uppercase tracking-[0.1em] text-[#F5C218]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
              >
                Daily Intelligence
              </span>

              <h2
                className="mt-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: 1.15,
                }}
              >
                CPG Industry Intelligence
              </h2>

              <div
                className="mt-5 flex flex-col gap-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#444444",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  The best account managers know the industry their clients are
                  navigating, not just the clients themselves. This briefing
                  pulls daily news from five leading EU and UK trade publications,
                  classifies every story by category, and flags every
                  AI-relevant development with a dedicated spotlight.
                </p>
                <p>
                  I use it to build pitch narratives and walk into partnership
                  conversations with a point of view on what the market is doing.
                </p>
              </div>

              <p
                className="mt-8 uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#888888",
                }}
              >
                Built with Claude AI · Delivered daily at 10:00 CET
              </p>
            </div>
          </article>

          {/* TOOL 3 — Weekly Update (two stacked images left) */}
          <article className="flex flex-col md:flex-row overflow-hidden rounded-[2px]">
            {/* Two stacked images */}
            <div className="flex flex-col w-full md:w-1/2 self-stretch min-h-[400px]">
              <div className="relative flex-1">
                <Image
                  src="/artifact-weekly-cover.jpg"
                  alt="Weekly client update cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative flex-1">
                <Image
                  src="/artifact-weekly-snapshot.jpg"
                  alt="Weekly client update snapshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 bg-white flex flex-col justify-center"
              style={{ padding: "48px" }}
            >
              <span
                className="uppercase tracking-[0.1em] text-[#F5C218]"
                style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
              >
                Weekly Automation
              </span>

              <h2
                className="mt-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "36px",
                  fontWeight: 400,
                  color: "#111111",
                  lineHeight: 1.15,
                }}
              >
                Weekly Client Update Agent
              </h2>

              <div
                className="mt-5 flex flex-col gap-4"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "15px",
                  color: "#444444",
                  lineHeight: 1.8,
                }}
              >
                <p>
                  Friday mornings used to mean two to three hours pulling
                  together client status updates from scattered sources. This
                  agent reads across Slack threads, email correspondence, and
                  Notion notes, synthesises the week's activity per client, and
                  drafts a structured update ready by 10:00 CET.
                </p>
                <p>
                  Consistent, complete communication for every client, every week.
                </p>
              </div>

              <p
                className="mt-8 uppercase tracking-[0.08em]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: "#888888",
                }}
              >
                Built with Claude AI · Delivered every Friday at 10:00 CET
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
