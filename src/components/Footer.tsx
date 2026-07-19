import Link from "next/link";

const NAV_LINKS = [
  { label: "Who Am I", href: "/about" },
  { label: "AI in Practice", href: "/professional-ai" },
  { label: "Personal Projects", href: "/personal-ai" },
  { label: "My Takes", href: "/what-i-know" },
];

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salonisuchdev/",
    external: true,
  },
  {
    label: "saloni.suchdev@insead.edu",
    href: "mailto:saloni.suchdev@insead.edu",
    external: false,
  },
  {
    label: "salonisuchdevnss@gmail.com",
    href: "mailto:salonisuchdevnss@gmail.com",
    external: false,
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A0A0A" }}>
      {/* Three columns */}
      <div
        className="mx-auto max-w-6xl px-6 md:px-16 py-15 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* Left — identity */}
        <div className="flex flex-col gap-2">
          <span
            className="text-white mt-1"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px" }}
          >
            Saloni Suchdev
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "12px",
              color: "#888888",
            }}
          >
            she/her
          </span>
        </div>

        {/* Center — navigation */}
        <div className="flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="uppercase tracking-[0.1em] transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                color: "#888888",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — contact */}
        <div className="flex flex-col gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="transition-colors duration-200 hover:text-white"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                color: "#888888",
              }}
            >
              {link.label}
            </a>
          ))}
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "13px",
              color: "#888888",
            }}
          >
            +33 7 69 65 28 42
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="text-center py-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "12px",
            color: "#555555",
          }}
        >
          2026 Saloni Suchdev
        </span>
      </div>
    </footer>
  );
}
