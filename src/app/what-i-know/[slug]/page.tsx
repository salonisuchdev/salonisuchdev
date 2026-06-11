import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data/articles";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  return { title: article ? `${article.title} — Saloni Suchdev` : "Article" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <main style={{ backgroundColor: "#F5F0E8" }}>
      {/* ARTICLE HEADER */}
      <section
        className="w-full px-6 md:px-16 lg:px-24"
        style={{
          backgroundColor: "#0A0A0A",
          paddingTop: "100px",
          paddingBottom: "60px",
        }}
      >
        <div className="mx-auto max-w-3xl">
          <Link
            href="/what-i-know"
            className="uppercase tracking-[0.1em] text-[#F5C218] hover:underline"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
          >
            What I Know So Far
          </Link>

          <h1
            className="mt-5 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.15,
              maxWidth: "700px",
            }}
          >
            {article.title}
          </h1>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-20">
        <div className="mx-auto max-w-[680px]">
          {article.content.length === 0 ? (
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "17px",
                color: "#888888",
                lineHeight: 1.85,
              }}
            >
              Coming soon.
            </p>
          ) : (
            article.content.map((paragraph, idx) => (
              <p
                key={idx}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: idx === 0 ? "19px" : "17px",
                  color: "#333333",
                  lineHeight: 1.85,
                  marginTop: idx === 0 ? 0 : "28px",
                }}
              >
                {paragraph}
              </p>
            ))
          )}

          {/* BACK LINK */}
          <div className="mt-16 pt-10 border-t border-black/[0.1]">
            <Link
              href="/what-i-know"
              className="uppercase tracking-[0.1em] text-[#F5C218] hover:underline"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              ← Back to What I Know So Far
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
