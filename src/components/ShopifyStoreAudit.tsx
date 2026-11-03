import { useState } from "react";
import shopifyHeroImage from "../images/jaydot2_shopify_249_hero3.png";

const auditSections = [
  {
    number: "01",
    title: "Homepage, Navigation & Product Pages",
    description:
      "Help customers understand what you sell, find products easily, and confidently decide what to buy.",
    items: [
      "Homepage layout, messaging, and calls to action",
      "Navigation, menus, and collection organization",
      "Product presentation and collection browsing",
      "Up to five product pages, including descriptions, imagery, pricing, and purchase options",
      "Brand messaging and storefront consistency",
    ],
    outcome:
      "Identify confusing navigation, weak product presentation, and barriers to product discovery.",
  },
  {
    number: "02",
    title: "Mobile Usability & Shopping Experience",
    description:
      "Evaluate how easily customers can browse your store and shop from their mobile devices.",
    items: [
      "Page layout, readability, and visual hierarchy",
      "Mobile navigation and collection browsing",
      "Product imagery and variant selection",
      "Add-to-cart visibility and usability",
      "Shopping journey from product discovery through the cart and accessible checkout flow",
    ],
    outcome:
      "Identify usability issues that could make shopping harder or discourage customers from completing a purchase.",
  },
  {
    number: "03",
    title: "Trust Signals & Purchase Friction",
    description:
      "Review the information and experiences that help customers feel confident about buying from your store.",
    items: [
      "Product information and purchase clarity",
      "Shipping, returns, and other buying policies",
      "Customer reviews and relevant trust signals",
      "Calls to action and purchase options",
      "Potential friction in the cart and checkout journey",
    ],
    outcome:
      "Find opportunities to strengthen buyer confidence, answer customer questions, and simplify purchasing decisions.",
  },
  {
    number: "04",
    title: "Technical, SEO & Performance Review",
    description:
      "Assess basic technical and search-visibility factors that contribute to your storefront experience.",
    items: [
      "Page loading and visible performance concerns",
      "Image sizing and optimization opportunities",
      "Page titles, meta descriptions, headings, and basic on-page SEO",
      "Broken links and obvious storefront issues",
      "Potential theme or app-related concerns",
    ],
    outcome:
      "Understand which technical and search-visibility issues should be addressed or investigated first.",
  },
  {
    number: "05",
    title: "Prioritized Findings & Action Plan",
    description:
      "Receive a clear report that translates audit findings into practical next steps.",
    items: [
      "Written findings with screenshots",
      "High-, medium-, and lower-priority recommendations",
      "Explanation of why each significant issue matters",
      "Suggested fixes and improvement opportunities",
      "Guidance on configuration changes, content improvements, or further technical work",
    ],
    outcome:
      "Leave with a prioritized plan for deciding what to fix first and where to invest your time.",
  },
];

const faqs = [
  {
    question: "How much does the Shopify Store Audit cost?",
    answer:
      "The audit costs a flat $249. The fee covers all five review areas and the written report described on this page.",
  },
  {
    question: "When will I receive my report?",
    answer:
      "Your report will be delivered within three business days after the required Shopify store access and necessary information have been received.",
  },
  {
    question: "What store access do you need?",
    answer:
      "Appropriate access is required to review the relevant storefront features and settings. Access will be limited to what is reasonably necessary for the audit. Collaborator access with the minimum necessary permissions is preferred. Never send your Shopify password by email.",
  },
  {
    question: "Will you make changes to my store?",
    answer:
      "The $249 package covers the audit and recommendations, not implementation. You can make the improvements yourself or discuss a separate implementation engagement with Jaydot2.",
  },
  {
    question: "Does the audit guarantee more sales?",
    answer:
      "No. The audit identifies potential problems and improvement opportunities, but results depend on many factors. No specific increase in sales or conversion rates is guaranteed.",
  },
  {
    question: "Is this a full technical or security audit?",
    answer:
      "No. This is a focused storefront, usability, basic SEO, and performance review. It excludes penetration testing, comprehensive security assessments, full code reviews, and detailed analytics investigations.",
  },
  {
    question: "What if I need more than five product pages reviewed?",
    answer:
      "The package covers up to five product pages. Additional product-page reviews or broader investigations can be quoted separately.",
  },
];

function AuditSection({ section }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
          {section.number}
        </span>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900">
            {section.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            {section.description}
          </p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {section.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
            <span
              aria-hidden="true"
              className="mt-1 text-emerald-700"
            >
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <p className="text-sm leading-6 text-slate-700">
          <strong className="text-slate-900">What you'll learn: </strong>
          {section.outcome}
        </p>
      </div>
    </article>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-medium text-slate-900">{question}</span>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl text-slate-500"
        >
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-3 pr-8 text-sm leading-7 text-slate-600">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function ShopifyStoreAudit() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero shopifyHeroImage */}
      <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
        <img src={shopifyHeroImage} alt="Shopify Store Audit" className="w-full" />
      </div>
      
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
            Jaydot2 · Shopify Consulting
          </p>

          <div className="mt-6 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Shopify Store Audit
              </h1>

              <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-600">
                Find out what's holding your Shopify store back.
              </p>

              <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                Even a well-designed store can lose potential customers
                because of confusing navigation, poor mobile usability,
                or unnecessary friction in the buying process. Get an
                expert review and a practical plan for improving your
                storefront.
              </p>

              <ul className="mt-8 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-emerald-700">✓</span>
                  Five focused review areas
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-emerald-700">✓</span>
                  Screenshots and prioritized recommendations
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-emerald-700">✓</span>
                  Three-business-day delivery after access is received
                </li>
              </ul>
            </div>

            {/* Price card */}
            <aside className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-medium text-slate-500">
                One-time service fee
              </p>

              <p className="mt-2 text-5xl font-semibold tracking-tight">
                $249
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                A professional storefront review with a written action plan.
                No recurring audit subscription.
              </p>

              <div className="my-6 border-t border-slate-200" />

              <p className="font-semibold text-slate-900">
                Delivered in 3 business days
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The delivery period starts once the required store access
                and information are available.
              </p>

              <a
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
              >
                Get Your Store Audited
              </a>

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Audit and recommendations included. Implementation is separate.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Audit scope */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            What's included
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Five areas. One clear action plan.
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Every audit focuses on the customer experience, potential
            barriers to purchasing, and practical improvements that fit
            your store.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {auditSections.map((section) => (
            <AuditSection key={section.number} section={section} />
          ))}

          <article className="flex flex-col justify-center rounded-2xl bg-slate-900 p-7 text-white sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Your deliverable
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              A report you can act on
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Receive written findings, screenshots, priority levels,
              and recommended next steps so you can focus on the
              improvements that matter most.
            </p>

            <p className="mt-6 text-sm font-medium">
              Included in your $249 audit
            </p>
          </article>
        </div>
      </section>

      {/* Delivery */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Simple process
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From store access to actionable insights in 3 business days.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Once your order is placed and the required access and
              information are available, the audit begins. Your report
              is delivered within three business days.
            </p>
          </div>

          <ol className="space-y-5">
            {[
              {
                title: "Place your order",
                text: "Purchase the Shopify Store Audit for $249.",
              },
              {
                title: "Provide store access",
                text: "Grant the appropriate collaborator access and identify the relevant product pages.",
              },
              {
                title: "Receive your report",
                text: "Get your findings, screenshots, and prioritized recommendations within 3 business days after access and required information are received.",
              },
            ].map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ideal clients and positioning */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Is this audit right for your business?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              This service is designed for small retailers and growing
              e-commerce businesses that want an independent assessment
              before investing more time or money in their storefront.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Retailers improving an existing Shopify store",
                "New store owners seeking an independent review",
                "Businesses preparing to invest in marketing",
                "Owners considering a storefront redesign",
                "Growing stores looking for usability improvements",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-emerald-700">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-7 sm:p-8">
            <h2 className="text-2xl font-semibold">
              Why Jaydot2?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Founded in 2006, Jaydot2 brings a technology consulting
              background spanning software development, application
              architecture, mobile solutions, cloud technology, and
              digital business services.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The approach goes beyond appearance to consider functionality,
              usability, performance, and the systems supporting the
              customer experience.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The result is practical guidance focused on your store's
              specific improvement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Take the next step
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to improve your Shopify store?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            Stop guessing which parts of your store need attention.
            Get an expert review, understand where customers may encounter
            friction, and receive a prioritized plan for your next
            improvements.
          </p>

          <p className="mt-8 text-4xl font-semibold tracking-tight">
            $249
          </p>

          <p className="mt-2 text-sm text-slate-500">
            One-time fee · Report delivered in 3 business days after access
          </p>

          <a
            href="/contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            Order Your Shopify Store Audit
          </a>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            The audit provides recommendations, not implementation or a
            guarantee of increased sales.
          </p>
        </div>
      </section>
    </main>
  );
}
