"use client";

import { useState } from "react";

const ANSWERS: Record<string, string> = {
  "What is legal privilege and why do law firms protect it?": `Legal privilege (formally called legal professional privilege) protects confidential communications between a lawyer and their client from being disclosed to courts, regulators, or opponents — even under compulsion.

There are two types: legal advice privilege covers advice given by a lawyer to a client; litigation privilege covers documents created for the purpose of actual or anticipated litigation.

Real-world example: If a company emails its lawyers asking "are we exposed to liability here?", that conversation is protected. A regulator investigating the company cannot demand to see it. This is why law firms stamp documents "privileged and confidential" — it is a legal shield, not a formality.

Why this matters for AI: When law firms adopt AI tools, privilege is a central concern. Sending client data to a third-party AI provider risks breaking privilege. Legal-specific AI products must demonstrate that data stays within protected channels — this is one of the core selling points for firms like Legora operating in this space.`,

  "What is the difference between a solicitor and a barrister?": `Solicitors are the lawyers most people deal with directly. They advise clients, draft contracts, manage transactions, and handle most day-to-day legal work. They work in law firms or in-house legal teams and build ongoing client relationships.

Barristers are specialists in courtroom advocacy. They are typically instructed by solicitors when a case goes to court, rather than being approached directly by clients. They are self-employed and work from chambers.

Think of it like a GP and a surgeon: the solicitor manages overall legal health and coordinates the matter; the barrister is the specialist called in for the complex procedure.

Why this matters for AI: AI tools are primarily adopted by solicitors, who handle high volumes of document-heavy work — due diligence, contract review, legal research. This is where AI drives the clearest efficiency gains. Barristers, whose work centres on oral advocacy, are a smaller and different market.`,

  "How does document discovery work in UK litigation?": `In England and Wales, the process is called disclosure (US lawyers call it discovery, and the terms are often used interchangeably). When parties are in litigation, each side must disclose documents relevant to the case — including documents that harm their own position.

Standard disclosure requires each party to search for and list documents that support or undermine any party's case. Historically this meant reviewing physical files; today it means processing millions of electronic documents — emails, contracts, internal messages, metadata.

Real-world example: A breach of contract dispute between two companies might require both sides to disclose every email, draft, and internal note related to the deal, spanning years of correspondence across multiple jurisdictions.

Why this matters for AI: Disclosure is one of the most time-consuming and expensive parts of litigation. AI-assisted document review has become one of the fastest-growing legal tech use cases, cutting the time lawyers spend reviewing documents from weeks to days and fundamentally changing how litigation teams are staffed.`,

  "What is a magic circle law firm?": `The magic circle refers to five elite law firms headquartered in London: Allen & Overy, Clifford Chance, Freshfields Bruckhaus Deringer, Linklaters, and Slaughter and May. The term reflects their prestige, global reach, and dominance of the highest-value corporate and financial work.

Real-world example: When a major bank executes a multi-billion pound acquisition, or a government privatises a national asset, a magic circle firm is almost always involved. Their clients include FTSE 100 companies, sovereign wealth funds, and global investment banks.

Why this matters for AI: Magic circle firms are early and influential adopters of legal AI. They have the budgets, the transaction volumes, and the competitive pressure to invest. They also set industry standards — when a magic circle firm adopts a tool, it signals legitimacy to the broader market. Winning a magic circle client is a significant commercial milestone for any legal AI company.`,

  "How do law firms bill clients and what are billable hours?": `Most law firms charge clients by the hour. Every lawyer tracks time in six-minute increments — tenths of an hour — and bills clients for each unit spent on their matter. A partner at a magic circle firm might charge £800 to £1,000 per hour; a junior associate, £300 to £500.

Real-world example: A client receives a monthly invoice itemising every lawyer who worked on their matter, the hours each logged, and a description of what was done — "reviewed draft share purchase agreement, 2.4 hours." A major transaction can generate six-figure monthly bills.

Why this matters for AI: The billable hour creates a structural tension with AI adoption. If AI reduces a ten-hour task to one hour, the firm bills 90% less for the same output. This is why law firms are increasingly exploring fixed-fee and value-based pricing models. Understanding this tension is essential for anyone selling AI into law firms — the conversation is as much about business model change as it is about technology.`,

  "What is due diligence in a corporate transaction?": `Due diligence is the investigation a buyer conducts on a target company before a deal completes — typically in an acquisition, merger, or significant investment. The goal is to surface legal risks before money changes hands.

Lawyers review thousands of documents: contracts with unfavourable terms, pending litigation, regulatory exposures, IP ownership gaps, employment liabilities, data protection issues. The output is a due diligence report that flags risks and recommends protections — price reductions, warranties, indemnities.

Real-world example: A private equity firm acquiring a technology company instructs its lawyers to review every material contract, software licence, employee agreement, and regulatory filing. A team of lawyers might spend weeks processing hundreds of documents.

Why this matters for AI: Due diligence is one of the highest-volume, most repetitive legal tasks — reviewing similar contracts at scale looking for the same risk factors. AI has dramatically accelerated this work. What once took a team weeks can now be completed in days, making due diligence one of the clearest return-on-investment cases for legal AI adoption.`,
};

const EXAMPLES = Object.keys(ANSWERS);

export default function LegalBrief() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse("");
    await new Promise((res) => setTimeout(res, 900));
    const answer = ANSWERS[query.trim()] || "This demo uses curated answers. Please select one of the example questions above to get started.";
    setResponse(answer);
    setLoading(false);
  };

  return (
    <main style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}>
      <section className="w-full px-6 md:px-16 lg:px-24" style={{ paddingTop: "120px", paddingBottom: "60px" }}>
        <div className="mx-auto max-w-3xl">
          <span className="uppercase tracking-[0.1em] text-[#F5C218]" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}>
            Legal Intelligence
          </span>
          <h1 className="mt-4 text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.05 }}>
            Legal Brief
          </h1>
          <p className="mt-5" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "560px" }}>
            The UK legal system — explained in plain English, on demand. Built so I am never at a loss in any client conversation.
          </p>
        </div>
      </section>

      <section className="w-full px-6 md:px-16 lg:px-24 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-8">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => { setQuery(ex); setResponse(""); }}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  color: query === ex ? "#F5C218" : "rgba(255,255,255,0.5)",
                  border: query === ex ? "1px solid #F5C218" : "1px solid rgba(255,255,255,0.15)",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {ex}
              </button>
            ))}
          </div>

          <div style={{ background: "#1C1C1C", borderRadius: "4px", padding: "24px" }}>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about the UK legal system, or select a question above..."
              rows={4}
              className="w-full bg-transparent outline-none resize-none"
              style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "white", lineHeight: 1.7 }}
              onKeyDown={(e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleSubmit(); }}
            />
            <div className="flex justify-between items-center mt-4">
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                Cmd + Enter to submit
              </span>
              <button
                onClick={handleSubmit}
                disabled={loading || !query.trim()}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: loading || !query.trim() ? "rgba(255,255,255,0.3)" : "white",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "10px 24px",
                  borderRadius: "2px",
                  cursor: loading || !query.trim() ? "not-allowed" : "pointer",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  if (!loading && query.trim()) {
                    (e.currentTarget as HTMLButtonElement).style.background = "#F5C218";
                    (e.currentTarget as HTMLButtonElement).style.color = "#111111";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#F5C218";
                  }
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                {loading ? "Thinking..." : "Brief me"}
              </button>
            </div>
          </div>

          {response && (
            <div className="mt-6" style={{ background: "#1C1C1C", borderRadius: "4px", padding: "32px", borderLeft: "3px solid #F5C218" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                {response}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
