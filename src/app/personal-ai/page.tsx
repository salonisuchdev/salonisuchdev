const PhoneFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{
    width: "140px",
    flexShrink: 0,
    background: "#1a1a1a",
    borderRadius: "32px",
    border: "2px solid #333333",
    padding: "10px",
    boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
    position: "relative",
  }}>
    {/* Dynamic island */}
    <div style={{
      position: "absolute",
      top: "16px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "52px",
      height: "14px",
      background: "#000000",
      borderRadius: "10px",
      zIndex: 10,
    }} />
    {/* Screen */}
    <div style={{
      borderRadius: "24px",
      overflow: "hidden",
      aspectRatio: "9/19.5",
      position: "relative",
    }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
      />
    </div>
  </div>
);

const STATS = [
  { value: "10 days", label: "to earn access" },
  { value: "5 days missed", label: "access pauses" },
  { value: "Day 11", label: "personalised insight unlocks" },
];

const PROJECTS = [
  {
    bg: "#1C1C1C",
    opacity: 1,
    label: "Journaling",
    title: ".dot.",
    body: "A journaling companion that learns you over time. Users choose Dottie or Dotten, who draws on previous entries to ask the right questions each day. Over ten days, the AI builds a picture of mood, energy, habits, and blind spots. On Day 11, a personalised insight summary unlocks. Voice-assisted entries let you speak instead of type.",
    link: { label: "Visit withdot.lovable.app", href: "https://withdot.lovable.app" },
    tags: ["Claude API", "Lovable", "ElevenLabs", "Adobe Firefly", "v0 by Vercel"],
    screens: [
      { src: "/dot-screen-1.jpg", alt: ".dot. welcome screen" },
      { src: "/dot-screen-2.jpg", alt: ".dot. check-in screen" },
      { src: "/dot-screen-3.jpg", alt: ".dot. re-earn screen" },
    ],
  },
  {
    bg: "#141414",
    opacity: 1,
    label: "Reading + Writing",
    title: "LineByLine",
    body: "A reading and writing tracker that builds a memory map of every book you read. Upload your book as a PDF, set a daily page schedule, and answer editorial questions after each session. Every response is saved to a memory map, a record of how you experienced the book as you read it. Losing access mid-book means losing the map you have been building.",
    link: { label: "Visit line-by-line-web-app.vercel.app", href: "https://line-by-line-web-app.vercel.app" },
    tags: ["Claude API", "Next.js", "React", "TypeScript", "Tailwind", "v0 by Vercel"],
    screens: [
      { src: "/linebyline-screen-1.jpg", alt: "LineByLine onboarding" },
      { src: "/linebyline-screen-2.jpg", alt: "LineByLine reading setup" },
      { src: "/linebyline-screen-3.jpg", alt: "LineByLine re-earn screen" },
    ],
  },
  {
    bg: "#1C1C1C",
    opacity: 0.5,
    label: "Styling",
    title: "Serve.ai",
    body: "Details coming soon.",
    link: null,
    tags: [],
    screens: null,
  },
];

export default function PersonalAI() {
  return (
    <main style={{ backgroundColor: "#0A0A0A" }}>
      {/* PAGE HEADER */}
      <section
        className="w-full px-6 md:px-16 lg:px-24"
        style={{ paddingTop: "120px", paddingBottom: "60px" }}
      >
        <div className="mx-auto max-w-5xl">
          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(44px, 6vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.05,
              maxWidth: "700px",
            }}
          >
            You stop showing up. I start making money.
          </h1>

          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "580px",
              lineHeight: 1.7,
            }}
          >
            Two AI-powered apps. One behavioral subscription model. Access is
            earned through ten days of demonstrated habit. Miss five consecutive
            days and the AI goes quiet. The conversion moment sits at peak
            emotional investment, when losing access actually hurts.
          </p>
        </div>
      </section>

      {/* BEHAVIORAL MODEL */}
      <div className="px-6 md:px-16 lg:px-24 pb-20">
        <div
          className="mx-auto max-w-4xl rounded-[4px]"
          style={{ backgroundColor: "#1C1C1C", padding: "60px" }}
        >
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex-1 flex flex-col items-center justify-center text-center py-8 sm:py-0 sm:px-8 first:pt-0 last:pb-0 sm:first:pl-0 sm:last:pr-0"
              >
                <span
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "48px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="mt-3 uppercase tracking-[0.1em]"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "12px",
                    color: "#888888",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <section className="w-full pb-20">
        <div className="flex flex-col gap-[2px]">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              style={{
                backgroundColor: project.bg,
                opacity: project.opacity,
                padding: "64px",
              }}
              className="px-6 md:px-16 lg:px-24"
            >
              <div
                style={{ padding: "0" }}
                className="mx-auto max-w-6xl flex flex-col md:flex-row gap-12 md:gap-16"
              >
                {/* Left — content */}
                <div className="flex-[3]">
                  <span
                    className="uppercase tracking-[0.1em] text-[#F5C218]"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
                  >
                    {project.label}
                  </span>

                  <h2
                    className="mt-3 text-white"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "56px",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    className="mt-5"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "15px",
                      color: project.opacity < 1 ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.7)",
                      lineHeight: 1.8,
                      maxWidth: "480px",
                    }}
                  >
                    {project.body}
                  </p>

                  {project.link && (
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block uppercase tracking-[0.1em] text-[#F5C218] hover:underline"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    >
                      {project.link.label} →
                    </a>
                  )}
                </div>

                {/* Right — phone frames + tech stack, or tags only */}
                {project.screens ? (
                  <div className="flex-[2] flex flex-col gap-6">
                    <div className="flex gap-3 items-end">
                      {project.screens.map((screen, i) =>
                        i === 1 ? (
                          <div key={screen.src} style={{ transform: "scale(1.06)", transformOrigin: "bottom center" }}>
                            <PhoneFrame src={screen.src} alt={screen.alt} />
                          </div>
                        ) : (
                          <PhoneFrame key={screen.src} src={screen.src} alt={screen.alt} />
                        )
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tech) => (
                        <span key={tech} style={{
                          background: "rgba(255,255,255,0.08)",
                          fontFamily: "var(--font-inter)",
                          fontSize: "12px",
                          color: "white",
                          padding: "6px 14px",
                          borderRadius: "20px",
                        }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                ) : project.tags.length > 0 && (
                  <div className="flex-[2] flex flex-wrap content-start gap-2 md:justify-end md:items-start pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-white"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "12px",
                          background: "rgba(255,255,255,0.08)",
                          padding: "6px 14px",
                          borderRadius: "20px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
