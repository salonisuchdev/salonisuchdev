import Image from "next/image";

export default function MagnumThailand() {
  return (
    <main>
      <section
        className="w-full px-6 md:px-16 lg:px-24"
        style={{ backgroundColor: "#0A0A0A", paddingTop: "140px", paddingBottom: "80px" }}
      >
        <div className="mx-auto max-w-3xl">
          <span
            className="uppercase tracking-[0.12em] text-[#F5C218]"
            style={{ fontFamily: "var(--font-inter)", fontSize: "11px", fontWeight: 500 }}
          >
            Case Study — Unilever / Magnum Thailand
          </span>
          <h1
            className="mt-4 text-white"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.08,
            }}
          >
            Flying Blind: Building Store Intelligence for Magnum Through a Corporate Demerger
          </h1>
          <div
            className="mt-8 flex gap-8"
            style={{ fontFamily: "var(--font-inter)", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
          >
            <span>2024</span>
            <span>Thailand</span>
            <span>AI / Image Recognition</span>
          </div>
        </div>
      </section>

      <div className="relative w-full" style={{ height: "500px", backgroundColor: "#0A0A0A" }}>
        <Image
          src="/images/field-visit-team.jpg"
          alt="Field visit with Unilever Thailand team"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <article className="w-full px-6 md:px-16 lg:px-24 py-20" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="mx-auto max-w-3xl">

          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>Thailand, 2024. 28,600 stores, zero visibility, and a client mid-split from one of the world&apos;s largest CPG groups.</p>
            <p>I joined the Magnum account six months before Unilever announced the demerger of its ice cream division in April 2024. By the time that news landed, we were already deep in the problem.</p>
          </div>

          <h2 className="mt-16 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.15 }}>
            Two distribution models, one compliance headache
          </h2>
          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>Thailand&apos;s ice cream distribution runs on two parallel systems. Modern trade (supermarkets, convenience chains, hypermarkets) uses a pre-sale model. Salespeople visit, take orders, stock arrives later. General trade (neighbourhood shops, roadside kiosks, small independents) runs on van sales. A driver loads up in the morning and sells directly from the vehicle.</p>
            <p>The compliance gap in both channels was significant. Coolers branded as Magnum coolers were being used to store competitor products. Merchandisers were photographing shelves in good condition, submitting the image, then rearranging the stock back to how it actually was. Brand visibility at point of sale was close to non-existent. In a market where 1% of market share is worth $4-5 million annually, these were expensive gaps.</p>
            <p>Unilever was spending $2-2.5 million a year in Thailand alone managing compliance. The bill covered field team salaries, audits, incentive structures, and administrative overhead. The return on that spend was difficult to quantify.</p>
          </div>

          <figure className="mt-12">
            <div className="relative w-full rounded-[2px] overflow-hidden" style={{ height: "440px" }}>
              <Image src="/images/cooler-interior.jpg" alt="In-store cooler showing mixed brand placement" fill className="object-cover object-center" />
            </div>
            <figcaption className="mt-3" style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#888888", lineHeight: 1.6 }}>
              A branded Unilever cooler. The kind of visibility gap the platform was built to track.
            </figcaption>
          </figure>

          <h2 className="mt-16 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.15 }}>
            Building the solution
          </h2>
          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>Store360, Vision Group&apos;s image recognition platform, captures shelf images through a merchandiser&apos;s phone and runs them through a trained model that identifies brand presence, cooler compliance, and planogram adherence. The system then generates alerts, scores, and performance reports for both the field team and the brand managers above them.</p>
            <p>For Magnum Thailand, we trained models on their full product range across every SKU and format. The dashboard gave the local team live visibility into what was happening at store level: compliance rates, cooler audit results, regional performance breakdowns. Sales figures came separately, collated from ice cream distributors. The dashboard tracked everything the field force touched. Which stores had gaps, which merchandisers were submitting accurate images, which routes were underperforming: all visible for the first time.</p>
            <p>The contract closed at $2 million ARR over three years. Production went live in mid-2024.</p>
          </div>

          <figure className="mt-12">
            <div className="relative w-full rounded-[2px] overflow-hidden" style={{ height: "440px" }}>
              <Image src="/images/cooler-compliant.jpg" alt="Well-organised store cooler with compliant planogram" fill className="object-cover object-center" />
            </div>
            <figcaption className="mt-3" style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#888888", lineHeight: 1.6 }}>
              Planogram compliance in practice: every SKU in position, every section correctly labelled.
            </figcaption>
          </figure>

          <h2 className="mt-16 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.15 }}>
            The demerger ran in parallel
          </h2>
          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>Unilever announced in April 2024 that it would spin off its ice cream division. Magnum, Wall&apos;s, Ben &amp; Jerry&apos;s would all move to a standalone entity. The announcement created immediate operational uncertainty. Budgets froze. Approval hierarchies blurred. The teams I was working with were navigating an internal restructure at the same time as a technology deployment.</p>
            <p>I spent a significant portion of that period on calls and in offices in Bangkok, managing the relationship through the noise. Outstanding payments, paused for several months during the transition, were settled around November 2024. A demerger and a live deployment do not make easy bedfellows. We got through both.</p>
          </div>

          <h2 className="mt-16 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.15 }}>
            The numbers, six months in
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px my-10 rounded-[2px] overflow-hidden" style={{ backgroundColor: "#1C1C1C" }}>
            <div className="flex flex-col items-center justify-center py-10 px-6" style={{ backgroundColor: "#0A0A0A" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "56px", fontWeight: 300, color: "#F5C218", lineHeight: 1 }}>20%</div>
              <div className="mt-3 text-center" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>Reduction in compliance payments</div>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-6" style={{ backgroundColor: "#0A0A0A" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "56px", fontWeight: 300, color: "#F5C218", lineHeight: 1 }}>1.5%</div>
              <div className="mt-3 text-center" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>Market share gain in Thailand</div>
            </div>
            <div className="flex flex-col items-center justify-center py-10 px-6" style={{ backgroundColor: "#0A0A0A" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "56px", fontWeight: 300, color: "#F5C218", lineHeight: 1 }}>$2M</div>
              <div className="mt-3 text-center" style={{ fontFamily: "var(--font-inter)", fontSize: "11px", color: "rgba(255,255,255,0.45)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.08em" }}>ARR contract value, 3-year term</div>
            </div>
          </div>

          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>Six months post go-live, the data pointed to a 20% reduction in compliance-related payments against a $2-2.5 million annual baseline. Market share in Thailand moved by approximately 1.5 percentage points. In a market where each point is worth $4-5 million, the commercial case was clear.</p>
            <p>Van sale routing also began to improve. The pre-sale team had better demand visibility before routes went out each day. Field coordination moved partly onto WhatsApp: practical, fast, and already the tool the field force actually used.</p>
          </div>

          <h2 className="mt-16 mb-6" style={{ fontFamily: "var(--font-cormorant)", fontSize: "38px", fontWeight: 400, color: "#0A0A0A", lineHeight: 1.15 }}>
            What the field visit changed
          </h2>

          <figure className="mt-2 mb-10">
            <div className="relative w-full rounded-[2px] overflow-hidden" style={{ height: "420px" }}>
              <Image src="/images/field-visit-store.jpg" alt="Field visit with Unilever team at a general trade store" fill className="object-cover object-top" />
            </div>
            <figcaption className="mt-3" style={{ fontFamily: "var(--font-inter)", fontSize: "12px", color: "#888888", lineHeight: 1.6 }}>
              Walking stores with the Unilever team. The visit that changed how we thought about the problem.
            </figcaption>
          </figure>

          <div className="flex flex-col gap-6" style={{ fontFamily: "var(--font-inter)", fontSize: "17px", color: "#1C1C1C", lineHeight: 1.85 }}>
            <p>We did a field visit early in the project. Not a polished client session: an actual morning with a merchandiser, walking stores, watching the process.</p>
            <p>What I saw that day shaped every decision that came after it. The merchandiser photographing a tidy shelf that was not actually tidy was not being malicious. The system had no consequences for inaccuracy and no immediate feedback loop. The van sale driver making routing decisions on gut instinct was not cutting corners. He had no better information to work with. Both were rational responses to a system that had not given them anything more useful.</p>
            <p>The AI layer solved the measurement problem. What made the measurement matter was the human layer: creating a payment consequence that incentivised the merchandiser to retake a bad photo, giving the driver tomorrow&apos;s demand picture the night before his route. The technology was never the hard part. Understanding the chain of people it had to work with was.</p>
            <p>That realisation did not come from a requirements document. It came from standing in a 7-Eleven in Bangkok at 8am and watching someone do their job.</p>
          </div>

        </div>
      </article>

      <section className="w-full px-6 md:px-16 lg:px-24 py-14" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="mx-auto max-w-3xl">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 uppercase tracking-[0.1em] text-white hover:text-[#F5C218] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)", fontSize: "12px", fontWeight: 500 }}
          >
            &larr; Back to Case Studies
          </a>
        </div>
      </section>
    </main>
  );
}
