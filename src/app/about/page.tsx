import Image from "next/image";

const EXPERIENCE = [
  {
    company: "Vision Group Retail",
    location: "Bengaluru, India",
    description: "AI-led retail intelligence SaaS for global CPG and FMCG brands",
    current: true,
    roles: [
      {
        title: "Regional Head, Customer Success",
        dates: "2023 – 2025",
        bullets: [
          "Led end-to-end sales cycle across Southeast Asia and Oceania, doubling APAC ARR from USD 4M to USD 8M in Year 1",
          "Presented to C-suite at global retail conferences and negotiated three strategic contracts across Hong Kong, Japan, and Vietnam",
          "Secured a USD 2M ARR three-year SaaS contract with an international ice-cream brand through market visits and digital GTM programs",
          "Drove client adoption of a first-of-its-kind IoT and image-recognition smart vending system for the world's largest non-alcoholic beverage company, delivering a 38% uplift in beverage sales across Australia, New Zealand, and Singapore",
        ],
      },
    ],
  },
  {
    company: "Infilect Technologies",
    location: "Bengaluru, India",
    description: "FMCG retail intelligence start-up",
    current: false,
    roles: [
      {
        title: "Lead Project Manager",
        dates: "2022 – 2023",
        bullets: [
          "Led AI-based retail execution programs amplifying in-store sales by 2–4% for food and beverage brands",
          "Increased revenue by 18% (USD 1.5M) through strategic account onboarding with 85% POC-to-production conversion globally",
        ],
      },
      {
        title: "Senior Project Manager",
        dates: "2021 – 2022",
        bullets: [
          "Increased customer satisfaction by 27% and retention by 34% through data-driven analytical insights",
          "Expanded product adoption to EU and USA by 55% through API and SDK integrations",
        ],
      },
      {
        title: "Project Manager",
        dates: "2020 – 2021",
        bullets: ["Created and scaled a Pilot Playbook improving team efficiency by 40%"],
      },
    ],
  },
  {
    company: "Sabre Corporation",
    location: "Bengaluru, India",
    description: "Software technology for global travel and aviation",
    current: false,
    roles: [
      {
        title: "Business Analyst",
        dates: "2019 – 2020",
        bullets: [
          "Configured flight planning tools to increase profits for European and Middle Eastern airlines by 2–3%",
          "Reduced operational costs by 10–12% through optimized fleet capacity planning",
        ],
      },
    ],
  },
];

const EDUCATION = [
  {
    institution: "INSEAD",
    location: "Singapore and Fontainebleau, France",
    degree: "MBA",
    dates: "2025 – 2026",
    note: "Class of July 2026",
    current: true,
    bullets: [
      "Recipient of the Henriette and Nobert Albin Scholarship for high-achieving women leaders",
      "VP of Retail and Luxury Goods Club; Negotiation Cup Finalist",
    ],
  },
  {
    institution: "Manipal Institute of Technology",
    location: "Manipal, India",
    degree: "B.Tech Computer and Communication Engineering",
    dates: "2015 – 2019",
    note: null,
    current: false,
    bullets: [],
  },
];

const CONTACT = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/salonisuchdev",
    href: "https://www.linkedin.com/in/salonisuchdev/",
  },
  {
    label: "Email (INSEAD)",
    value: "saloni.suchdev@insead.edu",
    href: "mailto:saloni.suchdev@insead.edu",
  },
  {
    label: "Email (Personal)",
    value: "salonisuchdevnss@gmail.com",
    href: "mailto:salonisuchdevnss@gmail.com",
  },
  {
    label: "Phone",
    value: "+33 7 69 65 28 42",
    href: "tel:+33769652842",
  },
];

export default function About() {
  return (
    <main style={{ backgroundColor: "#F5F0E8" }}>
      {/* BIO */}
      <section className="w-full px-6 pt-32 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-20">
          {/* Left — 60% */}
          <div className="flex-[3]">
            <span
              className="uppercase tracking-[0.1em] text-[#F5C218]"
              style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
            >
              Who Am I
            </span>

            <h1
              className="mt-4"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "42px",
                fontWeight: 400,
                color: "#111111",
                lineHeight: 1.2,
                maxWidth: "560px",
              }}
            >
              A creative business leader with a commercial instinct and an eye
              for a well-put-together outfit.
            </h1>

            <div
              className="mt-8 flex flex-col gap-5"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "16px",
                color: "#444444",
                lineHeight: 1.8,
              }}
            >
              <p>
                I have spent five years driving AI and digital transformation
                programs for some of the world's largest CPG brands, translating
                technology into real business outcomes across cultures,
                stakeholders, and time zones.
              </p>
              <p>
                I am currently pursuing my MBA at INSEAD, where I was awarded
                the Henriette and Nobert Albin Scholarship for high-achieving
                women leaders from diverse backgrounds. I am VP of the Retail
                and Luxury Goods Club, an INSEAD Negotiation Cup finalist, and
                someone who takes case competitions entirely too seriously.
              </p>
              <p>
                Outside of work, I have trekked to Everest Base Camp at 5340m,
                I dress with intention, and I read to step into someone else's
                shoes. That last habit, it turns out, is excellent preparation
                for my day job.
              </p>
            </div>
          </div>

          {/* Right — 40% */}
          <div className="flex-[2]">
            <div className="relative w-full rounded-[2px] overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/about.jpg"
                alt="Saloni Suchdev"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="w-full py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <h2
            className="text-center mb-16"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "48px",
              fontWeight: 400,
              color: "#111111",
            }}
          >
            Experience
          </h2>

          <div className="flex flex-col">
            {EXPERIENCE.map((job, jobIdx) => (
              <div
                key={job.company}
                className={`py-10 ${jobIdx < EXPERIENCE.length - 1 ? "border-b border-black/[0.08]" : ""} ${
                  job.current ? "pl-5 border-l-[3px] border-l-[#F5C218]" : ""
                }`}
              >
                {/* Company header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#111111",
                      }}
                    >
                      {job.company}
                    </span>
                    <span
                      className="ml-2"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        color: "#888888",
                      }}
                    >
                      · {job.description}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#888888",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {job.location}
                  </span>
                </div>

                {/* Roles */}
                <div className="flex flex-col gap-8">
                  {job.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h3
                          style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "24px",
                            fontWeight: 400,
                            color: "#111111",
                          }}
                        >
                          {role.title}
                        </h3>
                        <span
                          style={{
                            fontFamily: "var(--font-inter)",
                            fontSize: "13px",
                            color: "#888888",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {role.dates}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {role.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex gap-3"
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: "15px",
                              color: "#444444",
                              lineHeight: 1.7,
                            }}
                          >
                            <span className="mt-[0.45em] shrink-0 w-1 h-1 rounded-full bg-[#F5C218]" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* EDUCATION */}
          <h2
            className="text-center mt-20 mb-16"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "48px",
              fontWeight: 400,
              color: "#111111",
            }}
          >
            Education
          </h2>

          <div className="flex flex-col">
            {EDUCATION.map((edu, eduIdx) => (
              <div
                key={edu.institution}
                className={`py-10 ${eduIdx < EDUCATION.length - 1 ? "border-b border-black/[0.08]" : ""} ${edu.current ? "pl-5 border-l-[3px] border-l-[#F5C218]" : ""}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#111111",
                    }}
                  >
                    {edu.institution}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "13px",
                      color: "#888888",
                    }}
                  >
                    {edu.dates}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 mb-1">
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "#111111",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  {edu.note && (
                    <span
                      className="sm:ml-2"
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "13px",
                        color: "#888888",
                      }}
                    >
                      · {edu.note}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "13px",
                    color: "#888888",
                    marginBottom: edu.bullets.length > 0 ? "16px" : 0,
                  }}
                >
                  {edu.location}
                </p>

                {edu.bullets.length > 0 && (
                  <ul className="flex flex-col gap-2">
                    {edu.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3"
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "15px",
                          color: "#444444",
                          lineHeight: 1.7,
                        }}
                      >
                        <span className="mt-[0.45em] shrink-0 w-1 h-1 rounded-full bg-[#F5C218]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* DOWNLOAD CV */}
          <div className="flex justify-center mt-16">
            <a
              href="/Saloni_Suchdev_CV_Jun26.pdf"
              download
              className="inline-block px-10 py-[14px] rounded-[2px] bg-[#111111] text-white hover:bg-[#F5C218] hover:text-[#111111] transition-colors duration-200 uppercase tracking-[0.1em] text-[13px] font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="w-full px-6 py-20"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <h2
          className="text-center mb-14"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "48px",
            fontWeight: 400,
            color: "white",
          }}
        >
          Get in Touch
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 sm:gap-16 max-w-3xl mx-auto">
          {CONTACT.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-1">
              <span
                className="uppercase tracking-[0.1em] text-[#F5C218]"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-white hover:text-[#F5C218] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "14px",
                }}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
